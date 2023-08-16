import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { RefreshedAccount } from '@prisma/client'
import NextAuth, { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  events: {
    async signIn({ user, account, isNewUser }) {
      try {
        // Continue if no account provided or if user is new
        if (!account || isNewUser) return

        const userAccount = await prisma.account.findFirst({
          where: { userId: user.id },
        })

        // Continue if no account found
        if (!userAccount) return

        // Continue if token not expired
        if (userAccount.expires_at) {
          if (new Date().getTime() < userAccount.expires_at) {
            return
          }
        }

        // Fetch new access token
        const url =
          'https://discord.com/api/oauth2/token?' +
          new URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: userAccount.refresh_token!,
          })

        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'POST',
        })

        const refreshedTokens: RefreshedAccount = await response.json()

        if (!response.ok) {
          if (refreshedTokens.error === 'invalid_grant') {
            await prisma.account.update({
              where: { id: userAccount.id },
              data: {
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: new Date(
                  Date.now() + account.expires_at! * 1000
                ).getTime(),
              },
            })
            return
          }
          throw refreshedTokens
        }

        await prisma.account.update({
          where: { id: userAccount.id },
          data: {
            refresh_token:
              refreshedTokens.refresh_token ?? userAccount.refresh_token,
            access_token: refreshedTokens.access_token,
            expires_at: new Date(
              Date.now() + refreshedTokens.expires_at! * 1000
            ).getTime(),
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  callbacks: {
    async session({ session, user }) {
      // Get user and return access token
      const getToken = await prisma.account.findFirst({
        where: {
          userId: user.id,
        },
      })

      // Make access token and user id available to the current session
      session.user.accessToken = getToken!.access_token
      session.user.id = user.id

      return session
    },
  },
}

export default NextAuth(authOptions)

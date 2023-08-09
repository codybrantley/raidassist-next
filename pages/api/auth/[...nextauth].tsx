import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
  ],
  pages: {
    signIn: '/login',
  },
  // TODO: Add logic to create new users into mongo database
  events: {
    signIn: async (message) => {
      console.log('Sign in: ' + message)
    },
    signOut: async (message) => {
      console.log('Sign out: ' + message)
    },
    createUser: async (message) => {
      console.log('Create user: ' + message)
    },
    linkAccount: async (message) => {
      console.log('Link account: ' + message)
    },
    session: async (message) => { /* session is active */ },
  }
})
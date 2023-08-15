import { withAuth } from 'next-auth/middleware'

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
// TODO: Needs database connection, currently not redirecting unauthorized users
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      return true
    },
  },
})

export const config = { matcher: ['/dashboard', '/raids'] }
import { withAuth } from 'next-auth/middleware'

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      return (token) ? true : false
    },
  },
})

export const config = { matcher: ['/dashboard', '/raids'] }
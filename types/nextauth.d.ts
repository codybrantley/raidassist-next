import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User,
    error?: string
  }

  interface User {
    accessToken?: string | null
  }
}
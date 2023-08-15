import { Account } from "@prisma/client"

declare module "@prisma/client" {
  interface RefreshedAccount extends Account {
    error: string
  }
}
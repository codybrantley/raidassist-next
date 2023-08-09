import Header from "../header"
import Footer from "../footer"
import { SessionProvider } from 'next-auth/react'

interface LayoutProps {
  children: React.ReactNode
}

export default function NestedLayout({ children }: LayoutProps) {
  return (
    <SessionProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </SessionProvider>
  )
}
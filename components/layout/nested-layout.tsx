import { SessionProvider } from 'next-auth/react'
import Footer from '../footer'
import Header from '../header'

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

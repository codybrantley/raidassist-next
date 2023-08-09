import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import SignOutButton from '../components/auth/sign-out-button'

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()

  return (
    <div>
        <div className="bg-gray-900 py-3 px-4 text-blue-100">
            <div className="container mx-auto flex items-center justify-between">
                <h2 className="text-lg font-extrabold">RaidAssist.Me</h2>
                <span className="flex flex-row items-center justify-center xl:justify-start space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60">
                {session?.user && (
                    <>
                    <Image
                        src={session.user.image as string}
                        alt=''
                        className='h-8 w-8 rounded-full object-cover'
                        width={32}
                        height={32}
                    />
                    <h2 className="text-lg vertical-middle dark:text-gray-300 font-extrabold capitalize">
                        Hello, {session.user.name}
                        <SignOutButton />
                    </h2>
                    </>
                )}
                </span>
            </div>
        </div>
        <div className="flex font-semibold text-blue-100 text-base subpixel-antialiased">
            <div className="flex-1 flex bg-gray-800 py-8 px-4">
                <div className="container mx-auto">
                    <nav className="mb-8">
                        <ul className="text-base pt-2 grid gap-4 grid-cols-3">
                            <li>
                                <Link href="/dashboard" className="bg-gray-700 text-blue-100 hover:bg-gray-700 transition-colors duration-100 flex items-end py-3 px-4 space-x-2 rounded-lg font-bold text-opacity-70 hover:text-opacity-100">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z" fill="currentColor" /><path d="M21 11H13V13H21V11Z" fill="currentColor" /><path d="M13 15H21V17H13V15Z" fill="currentColor" /><path d="M21 19H13V21H21V19Z" fill="currentColor" /></svg>
                                    <span className="flex-1">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/raids" className="bg-gray-700 text-blue-100 hover:bg-gray-700 transition-colors duration-100 flex items-end py-3 px-4 space-x-2 rounded-lg font-bold text-opacity-70 hover:text-opacity-100">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z" fill="currentColor" /><path d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z" fill="currentColor" /><path d="M22 11H16V13H22V11Z" fill="currentColor" /><path d="M16 15H22V17H16V15Z" fill="currentColor" /><path d="M22 7H16V9H22V7Z" fill="currentColor" /></svg>
                                    <span className="flex-1">
                                        Raids
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/settings" className="bg-gray-700 text-blue-100 hover:bg-gray-700 transition-colors duration-100 flex items-end py-3 px-4 space-x-2 rounded-lg font-bold text-opacity-70 hover:text-opacity-100">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z" fill="currentColor" /></svg>
                                    <span className="flex-1">
                                        Settings
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}
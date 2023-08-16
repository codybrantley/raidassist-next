import SignInButton from '@/components/auth/sign-in-button'
import Link from 'next/link'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Login: NextPageWithLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">RaidAssist</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="p-5">
              <SignInButton className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block" />
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link
                  href="/"
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="inline-block ml-1">Back to home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default Login

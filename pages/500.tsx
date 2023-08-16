import Link from 'next/link'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const ServerError: NextPageWithLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-indigo-600 font-bold text-7xl">500</div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            Uh-oh! Server Error
          </div>

          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            Something went wrong with our servers.
          </div>

          <Link
            href="/"
            className="sm:text-indigo-600 sm:hover:text-indigo-800 sm:underline sm:underline-offset-2 max-sm:p-3 max-sm:capitalize max-sm:rounded-lg max-sm:text-white max-sm:bg-indigo-600 max-sm:hover:bg-indigo-800 font-medium text-sm md:text-xl lg:text-2xl cursor-pointer mt-6"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

ServerError.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default ServerError

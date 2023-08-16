import NestedLayout from '@/components/layout/nested-layout'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-8">
        <div className="col-span-1 bg-gray-700 rounded-lg px-4 lg:px-8 py-4 lg:py-6">
          <h2 className="text-xl text-blue-200 font-bold mb-4 lg:mb-6">
            Monthly target
          </h2>
          <div className="flex space-x-4 items-end mb-4 lg:mb-6">
            <div className="w-12 h-12 rounded-lg bg-blue-900 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-2xl mb-2 text-blue-100">&euro;21.291,09</span>
            <span className="text-blue-100 opacity-70 mb-2 whitespace-pre hidden xl:inline-block">
              / &euro;40.000
            </span>
          </div>
          <div className="rounded-full bg-gray-600 h-7 overflow-hidden">
            <div
              style={{ width: '65%' }}
              className="bg-green-400 h-7 rounded-full text-center text-green-50 flex items-center justify-center"
            >
              65%
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-lg px-4 lg:px-8 py-4 lg:py-6">
          <h2 className="text-xl text-blue-200 font-bold mb-4 lg:mb-6">
            Customers
          </h2>
          <div className="flex space-x-4 items-end mb-4 lg:mb-6">
            <div className="w-12 h-12 rounded-lg bg-blue-900 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            </div>
            <span className="text-2xl mb-2">491</span>
            <span className="text-green-600 text-base mb-2 bg-green-200 border-full px-3 rounded-full">
              &#8605; 32
            </span>
          </div>
          <p>Customers this month</p>
        </div>
        <div className="col-span-1 bg-gray-700 rounded-lg px-4 lg:px-8 py-4 lg:py-6">
          <h2 className="text-xl text-blue-200 font-bold mb-4 lg:mb-6">
            Sales
          </h2>
          <div className="flex space-x-4 items-end mb-4 lg:mb-6">
            <div className="w-12 h-12 rounded-lg bg-blue-900 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
              </svg>
            </div>
            <span className="text-2xl mb-2">230</span>
            <span className="text-red-600 text-base mb-2 bg-red-200 border-full px-3 rounded-full">
              <span className="transform rotate-180 inline-block">&#8604;</span>
              12
            </span>
          </div>
          <p>Sales this month</p>
        </div>
      </div>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}

export default Dashboard

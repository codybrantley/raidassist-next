import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import SignInButton from '@/components/auth/sign-in-button'
import Image from 'next/image'
import Sword from '../public/sword.svg'

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-indigo-900 px-4 py-4">
        <div className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="inline-block py-2 text-white text-xl font-bold"
            >
              RaidAssist.Me
            </a>
            <div className="inline-block cursor-pointer md:hidden">
              <div className="bg-gray-400 w-8 mb-2 h-0.5"></div>
              <div className="bg-gray-400 w-8 mb-2 h-0.5"></div>
              <div className="bg-gray-400 w-8 h-0.5"></div>
            </div>
          </div>
          <div>
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-400 hover:text-gray-100 mr-6"
              >
                Guide
              </a>
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-400 hover:text-gray-100 mr-6"
              >
                Commands
              </a>
              <a
                href="#"
                className="inline-block py-1 md:py-4 text-gray-400 hover:text-gray-100 mr-6"
              >
                Support
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <SignInButton />
            <a
              href="https://discord.com/oauth2/authorize?client_id=822555943304036392&scope=bot&permissions=268789968"
              className="inline-block py-2 px-4 text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg"
            >
              <i className="fab fa-discord mr-1"></i> Add To Server{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-indigo-900 md:overflow-hidden">
        <div className="px-4 py-20 md:py-4">
          <div className="md:max-w-6xl md:mx-auto">
            <div className="md:flex md:flex-wrap">
              <div className="md:w-1/2 text-center md:text-left md:pt-16">
                <h1 className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4">
                  {' '}
                  Your Discord Raid Scheduling & Signups Bot{' '}
                </h1>
                <p className="text-indigo-200 md:text-xl md:pr-48">
                  {' '}
                  Manage your guild raids with customizable signup forms, show
                  raid schedules/calendar events, and create handpicked rosters.{' '}
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="hidden md:block">
                  <div
                    className="-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                    style={{ transform: 'rotate(-8deg)' }}
                  >
                    <div className="bg-indigo-800 mx-auto rounded-lg px-2 pb-2 relative mb-8">
                      <div className="relative h-4 ml-2">
                        <span className="w-4 h-4 -mt-2 absolute ml-1.5 bg-white inline-block"></span>
                        <span className="w-4 h-4 -mt-2 absolute ml-16 bg-white inline-block"></span>
                      </div>
                      <div className="w-32 -ml-3 h-1 rounded bg-indigo-100 mb-2"></div>
                      <div className="flex justify-end">
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex mt-2 justify-end">
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex mt-2 justify-end">
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-4 h-3 rounded bg-indigo-100 mr-1"></div>
                      </div>
                    </div>
                    <div className="text-gray-800 text-center"> Calendars </div>
                  </div>
                  <div
                    className="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                    style={{ transform: 'rotate(-8deg)', zIndex: 2 }}
                  >
                    <div className="bg-indigo-800 mx-auto rounded-lg px-2 pb-2 relative mb-8">
                      <div className="mb-2 relative h-4">
                        <span className="w-20 ml-2 h-2 -mt-px absolute bg-white inline-block"></span>
                      </div>
                      <div className="flex ml-2">
                        <div className="w-2 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-16 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex ml-2 mt-2">
                        <div className="w-2 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-16 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex ml-2 mt-2">
                        <div className="w-2 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-16 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex ml-2 mt-2 mb-2">
                        <div className="w-2 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-16 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                    </div>
                    <div className="text-gray-800 text-center"> Signups </div>
                  </div>
                  <div
                    className="ml-32 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                    style={{
                      transform: 'rotate(-8deg)',
                      zIndex: 2,
                      marginBottom: '-220px',
                    }}
                  >
                    <div className="bg-indigo-800 mx-auto rounded-lg px-2 pb-2 relative mb-8">
                      <div className="flex ml-2 pt-4">
                        <div className="w-2 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-2 ml-1 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex ml-2 mt-2">
                        <div className="w-2 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-2 ml-1 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex ml-2 mt-2">
                        <div className="w-2 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-2 ml-1 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                      <div className="flex ml-2 mt-2 mb-2">
                        <div className="w-2 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                        <div className="w-2 ml-1 h-2 bg-indigo-100 mr-1"></div>
                        <div className="w-6 h-2 rounded bg-indigo-100 mr-1"></div>
                      </div>
                    </div>
                    <div className="text-gray-800 text-center"> Rosters </div>
                  </div>
                  <Image
                    priority
                    src={Sword}
                    alt=""
                    className="ml-32 absolute"
                    width={580}
                    style={{ transform: 'rotate(-8deg)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="fill-current mt-16 text-white hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fillOpacity="1"
            d="M0,224L1440,32L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      <p className="bg-white flex-grow text-center p-4 text-gray-600 pt-10">
        {' '}
        &copy; 2021 RaidAssist.Me &bull; Design by{' '}
        <a
          className="border-b text-blue-500"
          href="https://twitter.com/mithicher"
          target="_blank"
        >
          @mithicher
        </a>
        .{' '}
      </p>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default Page

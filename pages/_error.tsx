import type { ReactElement } from 'react'
import NestedLayout from '../components/layout/nested-layout'
import type { NextPageWithLayout } from './_app'

const Error: NextPageWithLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl text-white">Error occured fetching data</h2>
      </div>
    </>
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}

export default Error

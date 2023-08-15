import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import NestedLayout from '../components/layout/nested-layout'

const Error: NextPageWithLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2>Error Occured</h2>
      </div>
    </>
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}

export default Error

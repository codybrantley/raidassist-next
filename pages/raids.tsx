import type { ReactElement } from 'react'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import type { Guilds, Guild } from '@/types/discord/guild'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import NestedLayout from '@/components/layout/nested-layout'

export const getServerSideProps: GetServerSideProps<{
  guilds: Guilds
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  const access_token = session?.user?.accessToken

  const res = await fetch(
    `${process.env.NEXT_API_PATH}/discord/current/guilds?access_token=${access_token}&secret=${process.env.NEXT_API_SECRET}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const totalGuilds = await res.json()
  const guilds = totalGuilds.filter((guild: Guild) => {
    return guild.owner == true
  })

  return { props: { guilds } }
}

const Raids = ({
  guilds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="container mx-auto">
        <h2>Hello</h2>
        {guilds.map((guild) => (
          <h3>{guild.name}</h3>
        ))}
      </div>
    </>
  )
}

Raids.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>
}

export default Raids

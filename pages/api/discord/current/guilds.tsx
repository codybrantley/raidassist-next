import { NextApiRequest, NextApiResponse } from 'next'
import { RouteHandler } from '@/utils/handlers/routeHandler'
import { fetchDiscordData } from '@/utils/handlers/discordHandler'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await RouteHandler(request, response, {
    GET: async (request, response) => {
      try {
        const { status, data } = await fetchDiscordData(
          request,
          'discordUserGuilds',
          'users/@me/guilds'
        )
        response.status(status).json(data)
      } catch (error) {
        console.error(error)
      }
    },
  })
}

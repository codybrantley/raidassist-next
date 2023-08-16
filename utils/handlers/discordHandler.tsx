import { NextApiRequest } from 'next'
import redis from '../../lib/redis'

export const fetchDiscordData = async (
  request: NextApiRequest,
  cacheId: string,
  urlPath: string
) => {
  const { secret, access_token } = request.query

  // If secret key passed is incorrect or missing, error out
  if (secret != process.env.NEXT_API_SECRET) {
    return {
      status: 401,
      data: {
        message: '401: Missing or invalid secret',
        code: 0,
      },
    }
  }

  // If no access token provided, error out
  if (!access_token) {
    return {
      status: 400,
      data: {
        message: '400: No access token provided',
        code: 0,
      },
    }
  }

  // Attempt to collect user data from cache
  const cache = await redis.hget(cacheId, access_token as string)

  // IF cache data doesn't exist, fetch new data
  if (cache === null) {
    const discordResponse = await fetch(
      `${process.env.DISCORD_API_PATH}/${urlPath}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const data = await discordResponse.json()

    // Catch Discord API errors
    if (!discordResponse.ok) {
      return {
        status: discordResponse.status,
        data: data,
      }
    }

    // Stash fresh data into cache
    redis.hset(cacheId, access_token as string, JSON.stringify(data))

    return { status: 200, data: data }
  } else {
    return { status: 200, data: JSON.parse(cache) }
  }
}

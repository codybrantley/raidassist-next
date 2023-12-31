import type { NextApiRequest, NextApiResponse } from 'next'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type HttpHandler = (request: NextApiRequest, response: NextApiResponse) => void

interface RouteHandlerParams {
  GET?: HttpHandler
  POST?: HttpHandler
  PUT?: HttpHandler
  DELETE?: HttpHandler
}

export async function RouteHandler(
  request: NextApiRequest,
  response: NextApiResponse,
  handlers: RouteHandlerParams
) {
  const method = request.method as HttpMethod
  const handler = handlers[method]

  if (!handler) {
    return response.status(405).json({
      message: '405: Method not allowed',
      code: 0,
    })
  }

  return await handler!(request, response)
}

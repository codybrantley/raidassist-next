import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { query: { access_token }} = request
  const res = await fetch(`${process.env.DISCORD_API_PATH}/users/@me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json();

  response.status(200).json(data);
}
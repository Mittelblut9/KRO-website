import { useDrizzleDB } from '~/composables/db';
import { desc } from 'drizzle-orm'

async function getToken(): Promise<string> {
  const res = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials'
    })
  })
  return (await res.json() as any).access_token
}

export default defineEventHandler(async (event) => {
  const userId = event.context.params?.id
  if (!userId) throw new Error('Missing user ID')

  const twitchResponse = await fetch(
    `https://api.twitch.tv/helix/streams?user_id=${userId}`,
    {
      headers: {
        'Authorization': `Bearer ${await getToken()}`,
        'Client-ID': process.env.TWITCH_CLIENT_ID!
      }
    }
  )

  const streamData = await twitchResponse.json() as StreamResponse

  if (streamData.data?.length) return streamData.data[0]

  const lastVod = await useDrizzleDB.query.vods.findFirst({
    orderBy: [desc(vods.date)],
  })

  return {
    type: 'offline',
    lastVod
  }
})

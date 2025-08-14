import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

const runtimeConfig = useRuntimeConfig()

export const useDrizzleDB = () => {
  const connectionString = `postgres://${runtimeConfig.pgUser}:${runtimeConfig.pgPassword}@${runtimeConfig.pgHost}:${runtimeConfig.pgPort}/${runtimeConfig.pgDatabase}`

  const client = postgres(connectionString)
  return drizzle(client, { schema })
}

export type DrizzleDB = ReturnType<typeof useDrizzleDB>

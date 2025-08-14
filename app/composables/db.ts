import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

export const useDrizzleDB = () => {
    const runtimeConfig = useRuntimeConfig();

    const connectionString = `postgres://${runtimeConfig.pgUser}:${runtimeConfig.pgPassword}@${runtimeConfig.pgHost}:${runtimeConfig.pgPort}/${runtimeConfig.pgDatabase}`;
    const client = postgres(connectionString);
    return drizzle(client, { schema: {
        vods,
    } });
};

export type DrizzleDB = ReturnType<typeof useDrizzleDB>;

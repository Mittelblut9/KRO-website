import pg from 'pg';
const { Client } = pg;

export const useDb = () => {
  const config = useRuntimeConfig();
  const client = new Client({
      user: config.pg_user,
      host: config.pg_host,
      database: config.pg_database,
      password: config.pg_password,
      port: parseInt(config.pg_port),
  });

  client.connect();

  return client;
}

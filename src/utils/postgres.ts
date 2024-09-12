import pg from 'pg';
const { Client } = pg;

const config = useRuntimeConfig();
const client = new Client({
  user: config.pg_user,
  host: config.pg_host,
  database: config.pg_database,
  password: config.pg_password,
  port: parseInt(config.pg_port), // Default PostgreSQL port
});
    
await client.connect();

export default client;
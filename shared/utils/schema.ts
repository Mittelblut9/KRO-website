import { pgTable, serial, varchar, text, timestamp, integer, json, boolean } from 'drizzle-orm/pg-core'

export const vods = pgTable('vods', {
  id: serial('id').primaryKey(),
  vodid: varchar('vodid', { length: 256 }).unique().notNull(),
  title: text('title'),
  date: timestamp('date'),
  url: varchar('url', { length: 256 }),
  thumbnail: varchar('thumbnail', { length: 256 }),
  view_count: integer('view_count'),
  online_intend_date: varchar('online_intend_date', { length: 256 }),
  duration: integer('duration'),
  maybe_online: boolean('maybe_online').default(false),
  transcript: json('transcript').notNull()
})

export const alerts = pgTable('alerts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }),
  text: text('text'),
  active: boolean('active').default(false),
  created_at: timestamp('created_at').defaultNow()
})

export interface TokenResponse {
  access_token: string
  expires_in: number
  token_type: string
}

export type StreamResponse = {
  data: Array<{
    id: string;
    user_id: string;
    user_name: string;
    game_id: string;
    type: string;
    title: string;
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
    is_mature: boolean;
  }>;
}

export type Vod = typeof vods.$inferSelect
export type Stream = {
  lastVod?: Vod | null
}
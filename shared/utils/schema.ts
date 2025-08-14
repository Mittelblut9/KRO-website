import { pgTable, varchar, text, timestamp, integer, json, boolean } from 'drizzle-orm/pg-core';

export const vods = pgTable('vods', {
    vodid: varchar('vodid', { length: 256 }).primaryKey(),
    title: text('title'),
    date: timestamp('date'),
    url: varchar('url', { length: 256 }),
    thumbnail: varchar('thumbnail', { length: 256 }),
    view_count: integer('view_count'),
    online_intend_date: varchar('online_intend_date', { length: 256 }),
    duration: integer('duration'),
    maybe_online: boolean('maybe_online').default(false),
    transcript: json('transcript').notNull()
});

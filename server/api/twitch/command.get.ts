import { desc } from 'drizzle-orm';
import { useDrizzleDB } from '~/composables/db';
import { DateTime } from 'luxon';
import { defineEventHandler } from 'h3';

function isSameDate(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
}

export default defineEventHandler(async () => {
    const lastVod = await useDrizzleDB().query.vods.findFirst({
        orderBy: [desc(vods.date)],
    });

    if (!lastVod?.date) {
        return lastVod?.maybe_online
            ? 'Rumathra ist sich unsicher. MaybeLater'
            : '4Shrug';
    }

    const onlineIntendDates = lastVod.online_intend_date
        ? lastVod.online_intend_date.split(',').map((date: string) => new Date(date))
        : [];

    const isStreamPlanned = onlineIntendDates.some((intendDate: Date) => {
        const today = new Date();
        if (isSameDate(new Date(lastVod.date), today)) {
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return isSameDate(intendDate, tomorrow);
        }
        return isSameDate(intendDate, new Date());
    });

    if (isStreamPlanned && onlineIntendDates[0]) {
        const nextStreamTime = DateTime.fromJSDate(onlineIntendDates[0])
            .setZone('UTC')
            .setLocale('de')
            .toLocaleString(DateTime.TIME_24_SIMPLE);
        return `Rumathra plant um ${nextStreamTime} Uhr zu streamen! PagMan`;
    }

    return lastVod.maybe_online
        ? 'Rumathra überlegt noch... MaybeLater'
        : 'Heute kein Stream. Saj';
});

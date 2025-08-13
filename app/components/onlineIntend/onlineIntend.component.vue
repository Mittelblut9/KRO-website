<template>
    <div
        v-if="streamData.lastVod"
        class="grid justify-center items-center h-100 mt-10 text-center"
    >
        <h1
            v-if="streamData.lastVod.online_intend_date"
            class="text-9xl mt-10 font-extrabold text-green-400"
        >
            JA
        </h1>
        <h1
            v-else-if="streamData.lastVod.maybe_online"
            class="text-5xl mt-10 font-extrabold text-yellow-400"
        >
            VIELLEICHT
        </h1>
        <h1
            v-else
            class="text-5xl mt-10 font-extrabold text-red-400"
        >
            NEIN
        </h1>

        <div class="mt-10">
            <div v-if="streamData.lastVod.online_intend_date">
                <p v-html="$t('onlineIntend.date', { date: readableOnlineIntendDate, time: isSameDay ? $t('onlineIntend.dateToday') : $t('onlineIntend.dateOther') })" />
                <div
                    v-if="isLate"
                    class="flex mt-10 justify-center"
                >
                    <NuxtImg
                        :src="seventTv.getEmoteUrl('630db7e07b84e74996da9552')"
                        alt="Classic 7TV emote"
                        width="32"
                    />
                    <span
                        class="font-bold"
                        v-html="$t('onlineIntend.isLate')"
                    />
                </div>
            </div>
            <div v-else-if="streamData.lastVod.maybe_online">
                <p>Rumathra ist sich nicht sicher, ob er streamen wird</p>
            </div>
            <div v-else>
                <p v-html="$t('onlineIntend.notFetched')" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { Stream } from '~/shared/utils/stream.interface'; // Import aus shared Ordner

export default {
    name: 'OnlineIntendComponent',
    props: {
        streamData: {
            type: Object as PropType<Stream>,
            default: () => ({}),
            required: true
        }
    },
    data() {
        return {
            currentTime: Date.now(),
            seventTv: use7tv()
        };
    },
    computed: {
        readableOnlineIntendDate(): string {
            if (!this.streamData.lastVod?.online_intend_date) return '';

            const options: Intl.DateTimeFormatOptions = this.isSameDay
                ? { hour: 'numeric', minute: 'numeric' }
                : {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    };

            return new Date(this.correctOnlineIntendDate)
                .toLocaleString('de-DE', options);
        },
        correctOnlineIntendDate(): number {
            if (!this.streamData.lastVod?.online_intend_date) return 0;
            const date = new Date(this.streamData.lastVod.online_intend_date);
            return date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        },
        isSameDay(): boolean {
            if (!this.streamData.lastVod?.online_intend_date) return false;
            const targetDate = new Date(this.correctOnlineIntendDate);
            const today = new Date();
            return targetDate.getDate() === today.getDate()
                && targetDate.getMonth() === today.getMonth()
                && targetDate.getFullYear() === today.getFullYear();
        },
        isLate(): boolean {
            if (!this.streamData.lastVod?.online_intend_date) return false;
            return new Date(this.correctOnlineIntendDate) < new Date();
        }
    }
};
</script>

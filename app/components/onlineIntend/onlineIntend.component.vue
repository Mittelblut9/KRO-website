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
import { computed } from 'vue'
import type { PropType } from 'vue'

export default {
    name: 'OnlineIntendComponent',
    props: {
        streamData: {
            type: Object as PropType<Stream>,
            required: true,
            default: () => ({ lastVod: null })
        }
    },
    setup(props) {
        const seventTv = use7tv()

        const correctOnlineIntendDate = computed(() => {
            if (!props.streamData.lastVod?.online_intend_date) return 0
            const date = new Date(props.streamData.lastVod.online_intend_date)
            return date.setMinutes(date.getMinutes() + date.getTimezoneOffset())
        })

        const isSameDay = computed(() => {
            if (!props.streamData.lastVod?.online_intend_date) return false
            const targetDate = new Date(correctOnlineIntendDate.value)
            const today = new Date()
            return (
                targetDate.getDate() === today.getDate() &&
                targetDate.getMonth() === today.getMonth() &&
                targetDate.getFullYear() === today.getFullYear()
            )
        })

        const readableOnlineIntendDate = computed(() => {
            if (!props.streamData.lastVod?.online_intend_date) return ''

            const options: Intl.DateTimeFormatOptions = isSameDay.value
                ? { hour: 'numeric', minute: 'numeric' }
                : {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                }

            return new Date(correctOnlineIntendDate.value)
                .toLocaleString('de-DE', options)
        })

        const isLate = computed(() => {
            if (!props.streamData.lastVod?.online_intend_date) return false
            return new Date(correctOnlineIntendDate.value) < new Date()
        })

        return {
            seventTv,
            readableOnlineIntendDate,
            isSameDay,
            isLate
        }
    }
}
</script>
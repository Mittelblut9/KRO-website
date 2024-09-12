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
            v-else
            class="text-5xl mt-10 font-extrabold text-red-400"
        >
            NEIN (Vielleicht)
        </h1>

        <div class="mt-10">
            <div v-if="streamData.lastVod.online_intend_date">
                <p v-html="$t('onlineIntend.date', { date: readableOnlineIntendDate })" />
            </div>
            <div v-else>
                <p v-html="$t('onlineIntend.notFetched')" />
            </div>
            <div v-if="isLate">
                <div class="flex mt-10 justify-center">
                    <NuxtImg
                        :src="seventTv.getEmoteUrl('630db7e07b84e74996da9552')"
                        alt="Classic 7TV emote"
                        width="32"
                    />
                    <span v-html="$t('onlineIntend.isLate')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
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
      currentTime: ref(0),
      seventTv: use7tv()
    };
  },
  computed: {
    isOnline() {
      if(!this.streamData.lastVod) return false;
      return this.streamData.lastVod.online_intend_date ? true : false;
    },
    readableOnlineIntendDate() {
      if(!this.streamData.lastVod) return '';
      return new Date(this.streamData.lastVod.online_intend_date).toLocaleString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
    isLate() {
      if(!this.streamData.lastVod) return false;
      return new Date(this.streamData.lastVod.online_intend_date) < new Date();
    }
  },
};
</script>

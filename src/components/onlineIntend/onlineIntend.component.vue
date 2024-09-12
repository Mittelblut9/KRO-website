<template>
  <div class="grid justify-center items-center h-100 mt-10 text-center" v-if="streamData.lastVod">
    <h1 class="text-9xl mt-10 font-extrabold text-green-400" v-if="streamData.lastVod.online_intend_date">JA</h1>
    <h1 class="text-5xl mt-10 font-extrabold text-red-400" v-else>NEIN (Vielleicht)</h1>

    <div class="mt-10">
      <div v-if="streamData.lastVod.online_intend_date">
        <p v-html="$t('onlineIntend.date', { date: readableOnlineIntendDate })"></p>
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
  data() {
    return {
      currentTime: ref(0),
      seventTv: use7tv()
    };
  },
  props: {
    streamData: {
      type: Object as PropType<Stream>,
      default: () => ({}),
      required: true
    }
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
}
</script>

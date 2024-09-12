<template>
  <ULandingHero :ui="{ wrapper: 'py-16' }">
    <template #title>
      <h1
        class="flex justify-center items-center text-8xl italic font-[Roboto] font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent dark:text-transparent"
      >
        {{ $t('isLive') }}
        <nuxt-img
          class="ml-4 mt-[-30px] h-24 w-30"
          :src="sevenTv.getEmoteUrl('656298cadf131cd95634e15d')"
        />
      </h1>
    </template>
    <div class="flex items-center justify-center">
      <TwitchCardComponent class="w-6/12" :streamInfo="streamData" />
    </div>
  </ULandingHero>
</template>

<script lang="ts">
export default {
  name: 'IsLiveComponent',
  data() {
    return {
      sevenTv: use7tv()
    }
  },
  props: {
    streamData: {
      type: Object as PropType<Stream>,
      default: () => ({}),
      required: true
    }
  }
}
</script>

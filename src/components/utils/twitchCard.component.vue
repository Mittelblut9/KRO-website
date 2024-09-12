<template>
  <div>
    <a href="https://twitch.tv/rumathra">
      <UCard
        class="bg-emerald-50 dark:bg-emerald-950"
        :ui="{ body: { padding: '!p-0' } }"
      >
        <template #header>
          <h1
            class="text-2xl font-bold text-emerald-600 italic text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {{ streamInfo.title }}
          </h1>
        </template>

        <nuxt-img :src="thumbnail" aspect-ratio="16/9" class="w-full" />

        <template #footer>
          <div class="text-emerald-600 flex justify-between">
            <b class="text-left">{{ streamInfo.game_name }}</b>
            <span class="text-right"
              >{{ streamInfo.viewer_count }} Zuschauer</span
            >
          </div>
        </template>
      </UCard>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TwitchCardComponent',
  props: {
    streamInfo: {
      type: Object as () => Stream,
      default: () => ({}),
      required: true,
    },
  },
  computed: {
    thumbnail() {
      return this.streamInfo.thumbnail_url.replace('{width}', '1920').replace('{height}', '1080');
    },
  },
}
</script>

<style lang="scss">

</style>
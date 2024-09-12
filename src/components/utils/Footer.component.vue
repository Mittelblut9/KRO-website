<template>
    <UFooter>
        <template #top>
            <UFooterColumns :links="links" />
        </template>

        <template #left>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
                Copyright © {{ new Date().getFullYear() }}. All rights reserved.
            </p>
        </template>

        <template #right>
            <UColorModeButton size="sm" />

            <UButton
                to="https://github.com/nuxt-ui-pro/landing"
                target="_blank"
                icon="i-simple-icons-github"
                aria-label="GitHub"
                color="gray"
                variant="ghost"
            />
        </template>
    </UFooter>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
  data() {
    return {
      links: [{
        label: 'BlackDayz',
        children: [{
          label: 'Webseite',
          to: 'https://blackdayz.de'
        }]
      }, {
        label: 'Rechtliches',
        children: [{
          label: 'Impressum',
          to: 'https://blackdayz.de/impressum'
        }]
      }, {
        label: 'Über die Webseite',
        children: [{
          label: 'Repository',
          to: 'https://github.com/Mittelblut9/KRO-website'
        }, {
          label: 'Original',
          to: 'https://github.com/KommtKevinOnline'
        }]
      }]
    };
  },
};
</script>

<style lang="scss">

</style>
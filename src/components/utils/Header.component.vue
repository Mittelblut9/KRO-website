<template>
    <div>
        <UHeader :links="links">
            <template #logo>
                <div class="flex items-center">
                    {{ $t('header.title') }}
                    <NuxtImg
                        src="/img/Rumathra.png" 
                        alt="Rumathra"
                        class="rumathra-logo"
                    />
                </div>
            </template>
        </UHeader>
    </div>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
  data() {
    return {
      links: []
    };
  },
};
</script>

<style lang="scss" scoped>
.rumathra-logo {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
</style>
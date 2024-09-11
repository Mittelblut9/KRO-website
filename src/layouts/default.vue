<template>
    <HeaderComponent />

    <UMain>
        <NuxtPage />
    </UMain>

    <FooterComponent />

    <UNotifications />
</template>

<script lang="ts">
export default {
    name: 'DefaultLayout',
};
</script>
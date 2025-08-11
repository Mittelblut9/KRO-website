<template>
    <NuxtLoadingIndicator />
    <UApp
        :toaster="{
            position: 'top-right',
        }"
    >
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Kommt Rumathra Online?'
});
</script>

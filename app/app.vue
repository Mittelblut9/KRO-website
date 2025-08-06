<template>
    <NuxtLoadingIndicator />
    <UApp
        :toaster="{
            position: 'top-right',
        }"
    >
        <HeaderComponent />
        <UMain class="overflow-x-hidden">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UMain>
        <FooterComponent />
    </UApp>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Kommt Rumathra Online?'
});
</script>

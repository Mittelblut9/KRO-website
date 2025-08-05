<template>
    <NuxtLoadingIndicator />
    <UApp
        :toaster="{
            position: 'top-right',
        }"
    >
        <UMain class="overflow-x-hidden">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UMain>
    </UApp>
</template>

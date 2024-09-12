<template>
    <div>
        <UAccordion
            :items="items"
            :ui="{ wrapper: 'flex flex-col w-full' }"
        >
            <template #default="{ item, index, open }">
                <UButton
                    color="gray"
                    variant="ghost"
                    class="border-b border-gray-200 dark:border-gray-700"
                    :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
                >
                    <template #leading>
                        <div class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
                            <UIcon
                                :name="item.icon"
                                class="w-4 h-4 text-white dark:text-gray-900"
                            />
                        </div>
                    </template>

                    <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

                    <template #trailing>
                        <UIcon
                            name="i-heroicons-chevron-right-20-solid"
                            class="w-5 h-5 ms-auto transform transition-transform duration-200"
                            :class="[open && 'rotate-90']"
                        />
                    </template>
                </UButton>
            </template>
        </UAccordion>
    </div>
</template>

<script lang="ts">
export default {
  name: 'FAQComponent',
  data() {
    return {
      items: [{
          label: this.$t('faq.why.title'),
          icon: 'i-ic-round-help',
          defaultOpen: true,
          content: this.$t('faq.why.content')
        }, {
          label: this.$t('faq.how.title'),
          icon: 'i-gravity-ui-person-worker',
          content: this.$t('faq.how.content')
        }]
    };
  }
};
</script>

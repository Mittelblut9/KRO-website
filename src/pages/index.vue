<template>
    <div v-if="streamData.type">
        <OnlineIntendComponent :stream-data="streamData" v-if="streamData.type === 'offline'" />
        <IsLiveComponent :stream-data="streamData" v-else />
        <div class="flex justify-center">
            <div class="md:w-1/2 w-11/12 mt-20">
                <FaqComponent />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'IndexPage',
    data() {
        return {
            streamData: {} as Stream,
        };
    },
    beforeMount() {
        this.getStreamData();
    },
    methods: {
        async getStreamData() {
            const { data } = await useFetch<Stream>('/api/twitch/stream/41567638');
            if (data.value) {
                this.streamData = data.value;
            }
        }
    },
};
</script>

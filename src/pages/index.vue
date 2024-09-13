<template> <!--streamData.type-->
    <div>
        <OnlineIntendComponent
            v-if="streamData.type === 'offline'"
            :stream-data="streamData"
        />
        <IsLiveComponent
            v-else-if="streamData.type === 'live'"
            :stream-data="streamData"
        />
        <div v-else class="flex justify-center align-center mt-28">
            <div>
                <div class="flex justify-center">
                    <USkeleton class="h-32 w-[200px]" />
                </div>
                <div class="mt-10">
                    <USkeleton class="h-4 w-[600px]" />
                </div>
            </div>
        </div>
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

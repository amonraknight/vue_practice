<script setup>
    import { computed } from 'vue'
    import moment from 'moment'

    const props = defineProps({
        speaker: String,
        messageTxt: String,
        timestamp: Date
    })

    const dotColor = computed(() => {
        return props.speaker == 'AI' ? 'green-accent-3' : 'grey-lighten-3'
    })

    const timestamp = computed(() => {
        return moment(props.timestamp).format('YYYY-MM-DD HH:mm:ss')
    })

</script>

<template>
    <v-timeline-item :key="props.timestamp" :dot-color="dotColor" size="x-small">
        <div class="mb-4">
            <div class="font-weight-normal">
                <strong>{{ props.speaker }}</strong> @{{ timestamp }}
            </div>
            <div>{{ props.messageTxt }}</div>
        </div>
    </v-timeline-item>
</template>

<style scoped>

</style>
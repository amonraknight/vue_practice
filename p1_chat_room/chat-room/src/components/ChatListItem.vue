<script setup>
    const props = defineProps({
        speaker: String,
        messageTxt: String
    })
</script>

<template>
   <v-card v-bind:title="props.speaker" v-bind:text="props.messageTxt"></v-card>
</template>

<style scoped>

</style>
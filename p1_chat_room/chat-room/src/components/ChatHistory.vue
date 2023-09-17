<script setup>
    
    import { chatHistory } from '../stores/ChatHis'
    import ChatListItem from './ChatListItem.vue';

    const history = chatHistory()

</script>

<template>
    <!--
    <v-virtual-scroll height="300" :items="history.allChatHistory">
        <template v-slot:default="{ item }">
            <ChatListItem :speaker="item.spkr" :messageTxt="item.txt" :timestamp="item.timestamp"></ChatListItem>
        </template>
    </v-virtual-scroll>
    -->
    <v-card-text>
        <v-virtual-scroll id="history" height="300" :items="history.allChatHistory">
            <template v-slot:default="{ item }">
                <v-timeline density="compact" align="start">
                    <ChatListItem :speaker="item.spkr" :messageTxt="item.txt" :timestamp="item.timestamp"></ChatListItem>
                </v-timeline>
            </template>
        </v-virtual-scroll>
    </v-card-text>
</template>

<style scoped>

</style>
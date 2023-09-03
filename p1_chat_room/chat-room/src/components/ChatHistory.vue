<script setup>
   import { chatHistory } from '../stores/ChatHis'
   import ChatListItem from './ChatListItem.vue';

   const history = chatHistory()

</script>

<template>
    <v-virtual-scroll height="300" :items="history.allChatHistory">
        <template v-slot:default="{ item }">
            <ChatListItem :speaker="item.spkr" :messageTxt="item.txt"></ChatListItem>
        </template>
    </v-virtual-scroll>
</template>

<style scoped>

</style>
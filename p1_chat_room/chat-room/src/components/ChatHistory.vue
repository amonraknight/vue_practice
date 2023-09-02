<script setup>
   import { chatHistory } from '../stores/ChatHis'

   const history = chatHistory()

</script>

<template>
    <div class="chathsitory">
        <ul v-if="history.allChatHistory">
            <li v-for="item in history.allChatHistory">
                <div class="message">{{ item }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>
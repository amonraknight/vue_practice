import { defineStore } from 'pinia'
import { ref } from 'vue'

export const chatHistory = defineStore('history', () => {
    const allChatHistory = ref([])

    function saveMessageToHistory(newMessage) {
        allChatHistory.value.push(newMessage)
        // console.log(allChatHistory.value)
    }

    function cleanHistory() {
        allChatHistory.value = []
    }

    return { allChatHistory, saveMessageToHistory, cleanHistory }
})
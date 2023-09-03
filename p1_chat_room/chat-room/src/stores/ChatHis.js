import { defineStore } from 'pinia'
import { ref } from 'vue'

export const chatHistory = defineStore('history', () => {
    
    const allChatHistory = ref([])

    function createAMessage(speaker, textContent) {
        // Each message should have {spkr:"", txt:"", timestamp:}
        var message = {spkr:speaker, txt:textContent, timestamp:new Date()}
        return message
    }

    function saveMessageToHistory(speaker, textContent) {
        var newMessage = createAMessage(speaker, textContent)
        allChatHistory.value.push(newMessage)
        // console.log(allChatHistory.value)
    }

    function cleanHistory() {
        allChatHistory.value = []
    }

    
    return { allChatHistory, saveMessageToHistory, cleanHistory }
})
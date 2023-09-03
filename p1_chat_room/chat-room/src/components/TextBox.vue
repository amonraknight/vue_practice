<script setup>
    import { ref } from 'vue'
    import { chatHistory } from '../stores/ChatHis'

    const emit = defineEmits(['submitQuestion'])

    const history = chatHistory()
    var inputContent=ref('')


    function sendMessage() {
        if (inputContent.value) {
            console.log(inputContent.value)
            // Write into history.
            // console.log(history)
            history.saveMessageToHistory(inputContent.value)
            // Commit the function from parent: get the reply.
            emit('submitQuestion', inputContent.value)
            // Clean the message.
            inputContent.value=''
        }
        
    }

    function onKeyup() {
        sendMessage()
    }
</script>

<template>

    <v-container fluid>
        <v-textarea clearable counter
        clear-icon="mdi-close-circle"
        label="Type ctrl + enter to send."
        v-model="inputContent" 
        @keyup.ctrl.enter="onKeyup">
        </v-textarea>
    </v-container>
    
    <button @click="sendMessage">Send</button>
</template>

<style scoped>

</style>
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
    <div class="messageedit">
        <textarea placeholder="Type ctrl + enter to send." v-model="inputContent" @keyup.ctrl.enter="onKeyup"></textarea>
    </div>
    
    <button @click="sendMessage">Send</button>
</template>

<style scoped>

</style>
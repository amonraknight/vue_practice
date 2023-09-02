<script setup>
  import TextBox from './components/TextBox.vue';
  import ChatHistory from './components/ChatHistory.vue';
  import getReplyPromise from './api/datasources';
  import { chatHistory } from './stores/ChatHis';

  const history = chatHistory()

  async function getNdAppendAnswer(question) {
    // console.log('Got question:'+question)
    getReplyPromise(question)
    .then(response => {
      history.saveMessageToHistory(response.data)
    })
    .catch(error => {
      history.saveMessageToHistory('API is not available!')
    })
    
  }



</script>

<template>
  <div class="main">
    <ChatHistory />
    <TextBox @submit-question="getNdAppendAnswer"/>
  </div>
  
</template>

<style scoped>

</style>

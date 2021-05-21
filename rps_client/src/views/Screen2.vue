<template>
    <div>
        <h1>Screen 2</h1>
        <send-message screen="2" />
         <!-- <div>
        <button @click="sendMessage('Hello from screen 1')">Send message</button>
    </div> -->
    <!-- <div>
        {{this.message}}
    </div> -->
        <!-- <router-link to="/screen1">Screen1</router-link>
        <router-link to="/screen3">Screen3</router-link> -->
    </div>
</template>

<script>

import SendMessage from '../components/SendMessage.vue'

export default {
  components: {
      SendMessage
  }
}
</script>
<template>
    <div>
        <h1>Screen 1</h1>
        <send-message screen="1" />
         <!-- <div>
        <button @click="sendMessage('Hello from screen 1')">Send message</button>
    </div> -->
    <!-- <div>
        {{this.message}}
    </div> -->
        <!-- <router-link to="/screen2">Screen2</router-link>
        <router-link to="/screen3">Screen3</router-link> -->
    </div>
</template>

<script>

import SendMessage from '../components/SendMessage.vue'

export default {
  components: {
      SendMessage
  }, 

  data () {
  return {
    message: '----'
  }
},

    methods: {
        sendMessage(arg) {
            this.$socket.emit('message', arg)
        }
    },

    // sockets: {
    //     serverMessage (arg) {
    //         this.message = arg
    //     }
    // }

}
</script>
<template>
  <div id="app">
    <h2>Messages</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
          messages: [],
          socketId: ''
      }
  },
  components: {
  },
  sockets: {
      connect() {
        this.socketId = this.$socket.id
      },
      serverMessage (arg) {
          this.messages.push(arg)
      },
      serverMessages (arg) {
        this.messages = arg
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
    <div>
        <button @click="sendMessage()">Send message</button>
    </div>
</template>

<script>


export default {
    props: ['screen']
,    methods: {
        sendMessage() {
            this.$store.dispatch('sendMessage', {
                screen: this.screen
            })
        }
    }
}
</script>
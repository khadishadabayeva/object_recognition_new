<template>
    <div>
        <h1>Screen 3</h1>
        <!-- <router-link to="/screen1">Screen1</router-link>
        <router-link to="/screen2">Screen2</router-link> -->
   <send-message screen="3" />
    </div>
</template>

<script>
import SendMessage from '../components/SendMessage.vue'
export default {
    components: { SendMessage },
}
</script>
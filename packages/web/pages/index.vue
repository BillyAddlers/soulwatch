<template>
  <div>
    <div class="container mx-auto">
      {{ messageRandom }}
      <button @click="getMessage"></button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data () {
    return {
      messageRandom: ""
    }
  },
  mounted () {
    this.socket = this.$nuxtSocket({ name: "main", withCredentials: true })
  },
  methods: {
    getMessage() {
      return new Promise((resolve) => {

        this.socket.emit("request_data")
        this.socket.on("random_data", (randomWord) => {
          this.messageRandom = randomWord
          resolve()
        })
      })
    }
  }
})
</script>


<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{ data.counter }}</p>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const data = reactive({
      counter: '111'
    })
    return { data }
  }
}
</script>

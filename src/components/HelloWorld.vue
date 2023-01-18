<script setup lang="ts">
import { reactive, ref } from 'vue'

defineProps<{ msg: string }>()
const emit = defineEmits(["binh"])

const count = ref(0)

function call(){
  emit("binh", "yeu thu minh")
}

const arr = reactive([1, 2, 3])

const binh = ref<any>(1)


</script>

<template>
  <h1>{{ msg }}</h1>
  <component is="button" v-bind="$attrs">
    Hi
  </component>
  <ul>
    <li v-for="item in arr" :key="item">{{ item }} {{ msg }}</li>
  </ul>

  <input class="bg-green-500 px-4 py-2 rounded-lg" v-model="binh"/>

  <div class="card">
    <button type="button" @click="call">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

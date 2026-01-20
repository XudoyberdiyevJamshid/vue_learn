<!-- UserCard.vue -->
<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>Age: {{ age }}</p>
    <button @click="like">Like</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ name: string }>()

const age = ref<number>(7)
const num = ref<unknown>()
const k = ref<any>(7)

num.value = 88

k.value = 'sdsd'

k.value = true

if (typeof num.value == 'number') {
  num.value.toFixed(2)
}
if (typeof num.value == 'string') {
  console.log(num.value.length)
}

function like() {
  alert('Liked!')

  age.value = 8
}
</script>

<style>
.card {
  border: 2px solid blue;
  padding: 12px;
}

button {
  background: green;
  color: white;
}

button {
  background: var(--btn-color, green);
}
</style>

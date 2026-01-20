<script setup lang="ts">
import { ref, onActivated } from 'vue'

const users = ref<string[]>([])
const loading = ref(false)
const loaded = ref(false)

const fetchUsers = async () => {
  loading.value = true

  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  users.value = await res.json()

  loading.value = false
}

onActivated(() => {
  if (!loaded.value) {
    fetchUsers()
    loaded.value = true
  }
})
</script>

<template>
  <div>
    <h3>Users Tab</h3>

    <p v-if="loading">Loading...</p>

    <div class="flex">
      <div v-for="value in users" :key="value.id" class="w-24 h-14 bg-red-100 m-4">
        {{ value.name }}
      </div>
    </div>
  </div>
</template>

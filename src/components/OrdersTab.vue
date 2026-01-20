<script setup lang="ts">
import { ref, onActivated } from 'vue'

const orders = ref<number[]>([])
const loaded = ref(false)

const fetchOrders = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  orders.value = await res.json()
}

onActivated(() => {
  if (!loaded.value) {
    fetchOrders()
    loaded.value = true
  }
})
</script>

<template>
  <div>
    <h3>Orders Tab</h3>

    <ul class="flex flex-wrap gap-3 justify-between">
      <li v-for="o in orders" :key="o.id">
        <p>Order #{{ o.title }}</p>
        <!-- <img :src="o.thumbnailUrl" :alt="o.title" style="width: 100px; height: 100px" /> -->
      </li>
    </ul>
  </div>
</template>

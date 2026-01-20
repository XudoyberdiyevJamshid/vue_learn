<script setup lang="ts">
import { ref } from 'vue'
import UsersTab from './components/UsersTab.vue'
import OrdersTab from './components/OrdersTab.vue'

type Tab = 'users' | 'orders'

const activeTab = ref<Tab>('users')

import Modal from './components/Modal.vue'

const open = ref(false)
</script>

<template>
  <div>
    <user-card name="Jamshidbek" style="--btn-color: red"></user-card>
  </div>
  <!-- TAB BUTTONS -->
  <div class="tabs flex gap-4 m-5">
    <button class="bg-red-100 p-2 rounded-md" @click="activeTab = 'users'">Users</button>
    <button class="bg-green-400 p-2 rounded-md" @click="activeTab = 'orders'">Orders</button>
  </div>

  <!-- TAB CONTENT -->
  <KeepAlive>
    <component :is="activeTab === 'users' ? UsersTab : OrdersTab" />
  </KeepAlive>

  <hr />

  <button @click="open = true">Open modal</button>

  <Teleport to="#modals">
    <Modal v-if="open">
      <button @click="open = false">Close</button>
    </Modal>
  </Teleport>
</template>

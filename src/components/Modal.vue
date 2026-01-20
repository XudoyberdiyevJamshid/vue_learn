<template>
  <div class="overlay">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<style>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  background: white;
  margin: 100px auto;
  width: 300px;
}
</style>

<template>
  <div class="card p-20 d-flex flex-column justify-content-center align-items-center">
    <h1>La page A</h1>
    <p>
      <pre>{{ props }}</pre>
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>();
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 300px;
}
</style>

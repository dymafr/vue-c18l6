<template>
  <div class="card p-20 d-flex justify-content-center align-items-center">
    <h1>La page B</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
document.title = route.meta.title as string;
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 300px;
}
</style>

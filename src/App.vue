<script setup lang="ts">
import View from "@/View.vue";
</script>

<template>
  <Suspense>
    <template #fallback>
      <div class="flex justify-center items-center w-full h-full grow">
        <div class="text-4xl animate-pulse">Loading...</div>
      </div>
    </template>
    <View />
  </Suspense>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
}
</style>

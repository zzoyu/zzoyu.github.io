<script setup lang="ts">
const props = defineProps<{
  menuLabels: string[];
  currentIndex: number;
}>();
</script>

<template>
  <nav class="text-lg">
    <li
      v-for="(menu, i) in menuLabels"
      :key="i"
      class="transition-all duration-500 ease-in-out"
      :class="{ active: currentIndex === i }"
    >
      {{ menu }}
    </li>
  </nav>
</template>

<style scoped>
@tailwind base;
@tailwind components;

.active {
  @apply text-xl line-through;
}
</style>

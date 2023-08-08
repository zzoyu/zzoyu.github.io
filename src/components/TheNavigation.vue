<script setup lang="ts">
const props = defineProps<{
  menuLabels: string[];
  currentIndex: number;
}>();
const emit = defineEmits<{
  "update:currentIndex": [number];
}>();
</script>

<template>
  <nav class="text-lg">
    <li
      @click="$emit('update:currentIndex', i)"
      v-for="(menu, i) in menuLabels"
      :key="i"
      class="transition-all duration-500 ease-in-out cursor-pointer"
      :class="{ active: currentIndex === i }"
    >
      {{ menu }}
    </li>
  </nav>
</template>

<style scoped>
@tailwind base;

.active {
  @apply text-2xl;
}
</style>

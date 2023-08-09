<script setup lang="ts">
const isDarkMode = defineModel<boolean>();
</script>

<template>
  <button
    @click="isDarkMode = !isDarkMode"
    class="fixed right-10 top-10 z-10 flex flex-col"
  >
    <div class="w-8 h-4 bg-gray-300 rounded-full flex items-center">
      <div
        class="w-4 h-4 rounded-full shadow-sm dark:bg-slate-400 bg-green-300 hover:opacity-70 transform transition-all duration-300 flex justify-center items-center text-4xl"
        :class="{ ' translate-x-full': !isDarkMode }"
      ></div>
    </div>
  </button>
</template>

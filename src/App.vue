<script setup lang="ts">
import View from "@/View.vue";
import { useDarkMode } from "./composables/useDarkMode";

useDarkMode();
</script>

<template>
  <Suspense>
    <template #fallback>
      <div class="flex justify-center items-center w-full h-full grow">
        <div class="text-4xl animate-pulse font-sans">Loading...</div>
      </div>
    </template>
    <View />
  </Suspense>
</template>

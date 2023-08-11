<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@/types/Project";

const isOpen = ref(false);
const currentIndex = ref(0);

const props = defineProps<{
  assets: Project["assets"];
}>();
</script>

<template>
  <div v-if="assets" class="grid mt-2 w-fit grid-flow-col row-auto gap-1">
    <div
      v-for="(asset, index) in assets"
      @click="
        isOpen = !isOpen;
        currentIndex = index;
      "
      :key="index"
      class="max-h-48 h-full w-auto p-1 rounded-md bg-gray-200"
    >
      <img v-if="asset.match(/(png|jpg|jpeg|gif|webp)$/)" :src="asset" />
      <video
        @click="isOpen && $event.stopPropagation()"
        v-else
        :src="asset"
      ></video>
    </div>

    <Teleport to="body" v-if="isOpen">
      <div
        class="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center"
        @click="isOpen = false"
      >
        <div class="relative h-full w-fit max-w-full">
          <button
            class="absolute top-2 right-2 text-white text-3xl bg-gray-900 bg-opacity-50 rounded-full w-10 h-10 text-center"
            @click.stop="isOpen = false"
          >
            ✕
          </button>

          <button
            class="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl bg-gray-900 bg-opacity-50 rounded-full w-10 h-20 text-center"
            @click.stop="currentIndex = currentIndex - 1"
            :disabled="currentIndex === 0"
          >
            ←
          </button>

          <button
            class="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl bg-gray-900 bg-opacity-50 rounded-full w-10 h-20 text-center"
            @click.stop="currentIndex = currentIndex + 1"
            :disabled="currentIndex === assets.length - 1"
          >
            →
          </button>

          <img
            v-if="assets[currentIndex].match(/(png|jpg|jpeg|gif|webp)$/)"
            :src="assets[currentIndex]"
          />
          <video
            @click="isOpen && $event.stopPropagation()"
            v-else
            :src="assets[currentIndex]"
            :controls="isOpen"
          ></video>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
img,
video {
  @apply h-full w-auto max-w-full max-h-full object-contain;
}
</style>
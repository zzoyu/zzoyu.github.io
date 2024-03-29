<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "@/types/Project";

const isOpen = ref(false);
const currentIndex = ref(0);

const props = defineProps<{
  assets: Project["assets"];
}>();

const thumbnailAssets = props.assets?.map((asset) =>
  asset.replace(/(.(png|jpg|jpeg|gif|webp))$/, "-min$1")
);
</script>

<template>
  <div v-if="assets" class="mt-2 w-fit h-fit">
    <div class="grid gap-1 grid-cols-4 grid-flow-dense max-sm:grid-cols-4">
      <div
        v-for="(asset, index) in thumbnailAssets"
        @click="
          isOpen = !isOpen;
          currentIndex = index;
        "
        :key="index"
        class="max-h-36 p-1 rounded-md bg-gray-200 flex justify-center items-center grow-0"
      >
        <img v-if="asset.match(/(png|jpg|jpeg|gif|webp)$/)" :src="asset" />
        <video
          @click="isOpen && $event.stopPropagation()"
          v-else
          :src="asset"
        ></video>
      </div>
    </div>
    <Teleport to="body" v-if="isOpen">
      <Transition name="fade">
        <div
          class="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center"
          @click="isOpen = false"
        >
          <div class="relative h-full w-fit max-w-full">
            <button
              class="absolute top-2 right-2 z-50 text-white text-3xl bg-gray-900 bg-opacity-50 rounded-full w-10 h-10 text-center"
              @click.stop="isOpen = false"
            >
              ✕
            </button>

            <button
              v-if="currentIndex !== 0"
              class="absolute top-1/2 left-2 -translate-y-1/2 z-50 text-white text-3xl bg-gray-900 bg-opacity-50 rounded-full w-10 h-20 text-center"
              @click.stop="currentIndex = currentIndex - 1"
            >
              ←
            </button>

            <button
              v-if="currentIndex !== assets.length - 1"
              class="absolute top-1/2 right-2 -translate-y-1/2 z-50 text-white text-3xl bg-gray-900 bg-opacity-50 rounded-full w-10 h-20 text-center"
              @click.stop="currentIndex = currentIndex + 1"
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
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
img,
video {
  @apply object-contain h-full w-auto relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

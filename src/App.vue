<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import BaseSection from "@/components/BaseSection.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import TheRendererContainer from "@/components/TheRendererContainer.vue";
import TheLightToggle from "@/components/TheLightToggle.vue";

import Main from "@/components/sections/Main.vue";
import About from "@/components/sections/About.vue";

const sectionInfo = [
  {
    name: "Main",
    component: Main,
  },
  {
    name: "About",
    component: About,
  },
];

const sections = ref<InstanceType<typeof BaseSection>[] | null>(null);
const currentIndex = ref(0);

const moveToNextSection = () => {
  if (sections.value === null || currentIndex.value === sectionInfo.length - 1)
    return;
  sections.value?.[currentIndex.value + 1].focus();
};

const isDarkMode = ref(
  window.matchMedia("(prefers-color-scheme: dark)").matches
);

watchEffect(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <TheRendererContainer />
  <TheLightToggle v-model="isDarkMode" />
  <TheNavigation
    class="fixed bottom-10 left-10"
    :menuLabels="sectionInfo.map((section) => section.name)"
    :currentIndex="currentIndex"
  />
  <div class="fixed right-10 bottom-10 flex flex-col justify-end items-center">
    <button class="text-2xl animate-bounce" @click="moveToNextSection()">
      ↓
    </button>
  </div>

  <BaseSection
    v-for="(section, index) in sectionInfo"
    :key="index"
    @enter="currentIndex = index"
    ref="sections"
  >
    <component :is="section.component" />
  </BaseSection>
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

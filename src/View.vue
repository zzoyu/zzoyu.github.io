<script setup lang="ts">
import { scrollend } from "scrollyfills";
scrollend;

await document.fonts.load("1rem Pretendard-Regular");
console.log("fonts ready");

import { defineAsyncComponent, onMounted, provide, ref } from "vue";
import BaseSection from "@/components/BaseSection.vue";
import TheNavigation from "@/components/TheNavigation.vue";

import TheLightToggle from "@/components/TheLightToggle.vue";

import { useDarkMode } from "@/composables/useDarkMode";

import Main from "@/components/sections/Main.vue";
import About from "@/components/sections/About.vue";
import Projects from "@/components/sections/Projects.vue";
import Contact from "@/components/sections/Contact.vue";

const TheRendererContainer = defineAsyncComponent(
  () => import("@/components/TheRendererContainer.vue")
);

const sectionInfo = [
  {
    name: "Main",
    component: Main,
    sceneState: 0,
  },
  {
    name: "About",
    component: About,
    sceneState: 1,
  },
  {
    name: "Projects",
    component: Projects,
    sceneState: 1,
  },
  {
    name: "Contact",
    component: Contact,
    sceneState: 2,
  },
];

const sections = ref<InstanceType<typeof BaseSection>[] | null>(null);
const currentIndex = ref(0);
const isScrolling = ref(false);
const endScrolling = () => {
  isScrolling.value = false;
  window.removeEventListener("scrollend", endScrolling);
  console.log("end");
};

const moveToSection = (index = currentIndex.value + 1) => {
  if (
    sections.value === null ||
    index >= sectionInfo.length ||
    index === currentIndex.value
  )
    return;
  if (isScrolling.value) window.removeEventListener("scrollend", endScrolling);
  currentIndex.value = index;
  isScrolling.value = true;
  sections.value?.[index].focus();
  window.addEventListener("scrollend", endScrolling);
};

const isDarkMode = useDarkMode().isDarkMode;

onMounted(() => {
  window.onresize = () => {
    sections.value?.[currentIndex.value].focus();
  };
});

provide("currentIndex", currentIndex);
</script>

<template>
  <TheRendererContainer :sceneState="sectionInfo[currentIndex].sceneState" />
  <TheLightToggle v-model="isDarkMode" />
  <TheNavigation
    class="fixed bottom-10 left-10 z-10 bg-gray-100 dark:bg-zinc-900 bg-opacity-80"
    :menuLabels="sectionInfo.map((section) => section.name)"
    :currentIndex="currentIndex"
    @update:currentIndex="(index) => moveToSection(index)"
  />
  <div
    class="fixed right-10 bottom-10 z-10 flex flex-col justify-end items-center"
  >
    <button class="text-2xl animate-bounce" @click="moveToSection()">↓</button>
  </div>

  <div class="grid gap-8">
    <BaseSection
      v-for="(section, index) in sectionInfo"
      :key="index"
      @enter="currentIndex = index"
      ref="sections"
      :scrollable="!isScrolling"
    >
      <component :is="section.component" />
    </BaseSection>
  </div>
</template>

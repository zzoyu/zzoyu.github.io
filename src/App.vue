<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import BaseSection from "@/components/BaseSection.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import TheRendererContainer from "@/components/TheRendererContainer.vue";
import TheLightToggle from "@/components/TheLightToggle.vue";

const showHeaderName = ref(false);
const showHeaderDescription = ref(false);

onMounted(() => {
  showHeaderName.value = true;
});

const currentIndex = ref(0);

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
    :menuLabels="['Main', 'About', 'Projects', 'Contact']"
    :currentIndex="currentIndex"
  />
  <div class="fixed right-10 bottom-10 flex flex-col justify-end items-center">
    <div class="text-2xl animate-bounce">↓</div>
  </div>

  <BaseSection @enter="currentIndex = 0">
    <div class="flex flex-col grow mt-[10vh] justify-between">
      <div>
        <Transition
          name="popup"
          @after-enter="() => (showHeaderDescription = true)"
        >
          <h1 v-show="showHeaderName" class="text-4xl max-sm:text-2xl">
            조유진
          </h1>
        </Transition>
        <Transition name="fade">
          <h2 v-show="showHeaderDescription" class="text-2xl max-sm:text-xl">
            Frontend Developer, etc
          </h2>
        </Transition>
      </div>
    </div>
  </BaseSection>
  <BaseSection @enter="currentIndex = 1"> About </BaseSection>
  <BaseSection @enter="currentIndex = 2"> Project </BaseSection>
  <BaseSection @enter="currentIndex = 3"> Contact </BaseSection>
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

.popup-enter-active,
.popup-leave-active {
  transition: all 1s;
  margin-top: 0;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  margin-top: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

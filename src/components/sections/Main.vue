<script setup lang="ts">
import { onMounted, ref } from "vue";

const showHeaderName = ref(false);
const showHeaderDescription = ref(false);
onMounted(() => {
  showHeaderName.value = true;
});
</script>

<template>
  <div class="flex flex-col grow mt-[10vh] justify-between">
    <div>
      <Transition
        name="popup"
        @after-enter="() => (showHeaderDescription = true)"
      >
        <h1 v-show="showHeaderName">조유진</h1>
      </Transition>
      <Transition name="fade">
        <h2 v-show="showHeaderDescription">Frontend Developer, etc</h2>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
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

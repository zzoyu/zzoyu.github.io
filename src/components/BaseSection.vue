<script setup lang="ts">
import { onMounted, ref } from "vue";

defineExpose({
  section: ref<HTMLElement | null>(null),
  focus: () => {
    section.value?.scrollIntoView({ behavior: "smooth", block: "start" });
  },
});

const emit = defineEmits<{
  enter: [void];
  leave: [void];
}>();

const section = ref<HTMLElement | null>(null);

onMounted(() => {
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          emit("enter");
          section.value!.scrollIntoView({ behavior: "smooth", block: "start" });
          // console.log("enter");
        } else {
          emit("leave");
          // console.log("leave");
        }
      });
    },
    {
      threshold: 0.3,
    }
  ).observe(section.value!);
});
</script>

<template>
  <section
    ref="section"
    class="w-full h-screen left-0 top-0 p-10 flex justify-between"
  >
    <slot></slot>
  </section>
</template>

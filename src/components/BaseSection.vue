<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  scrollable: boolean;
}>();

defineExpose({
  section: ref<HTMLElement | null>(null),
  focus: () => {
    section.value?.scrollIntoView({ behavior: "smooth" });
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
        if (entry.isIntersecting && props.scrollable) {
          console.log(entry.intersectionRatio);
          emit("enter");
          section.value!.scrollIntoView({ behavior: "smooth" });
          // console.log("enter");
        } else {
          emit("leave");
          // console.log("leave");
        }
      });
    },
    {
      threshold: 0.5,
    }
  ).observe(section.value!);
});
</script>

<template>
  <section
    ref="section"
    class="w-full min-h-screen left-0 top-0 p-10 flex justify-between relative"
  >
    <slot></slot>
  </section>
</template>

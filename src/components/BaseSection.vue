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

const observer = ref<IntersectionObserver>();

const updateObserver = () => {
  observer.value?.disconnect?.();

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && props.scrollable) {
          emit("enter");
          if (entry.boundingClientRect.top < 0) return;
          section.value!.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          emit("leave");
        }
      });
    },
    {
      rootMargin: `0px 0px -${(window.innerHeight / 5) * 2}px 0px`,
      threshold: 0,
    }
  );
  observer.value.observe(section.value!);
};
onMounted(() => {
  updateObserver();
  window.addEventListener("resize", updateObserver);
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

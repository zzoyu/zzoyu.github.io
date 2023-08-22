<script setup lang="ts">
import type { Project } from "@/types/Project";
import ProjectItemGallery from "./ProjectItemGallery.vue";

const props = defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul class="list-disc flex flex-col gap-4">
    <li v-for="(project, index) in projects" :key="index">
      <h3 class="flex gap-1 items-baseline">
        {{ project.name }}
        <div class="flex text-base grow-0 justify-normal items-baseline ml-1">
          <mark v-for="stack in project.stacks" :key="stack">{{ stack }}</mark>
          <a
            v-for="link in project.links"
            :key="link"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            alt="링크"
          >
          </a>
        </div>
      </h3>
      <ul>
        <li v-for="(description, index) in project.descriptions" :key="index">
          {{ description }}
        </li>

        <ProjectItemGallery v-if="project.assets" :assets="project.assets" />
      </ul>
    </li>
  </ul>
</template>

<style scoped>
ul {
  @apply list-disc;
}
li > ul {
  @apply list-inside list-disc mb-4;
}

mark {
  @apply mr-1;
}

a::after {
  @apply bg-green-300 underline inline-block rounded-full text-center text-white ml-1 w-5 h-5 align-middle;
  @apply hover:opacity-70;
  content: "";
  background-size: 1em;
  background-repeat: no-repeat;
  background-position: calc(50% + 0px) center;
}

a[href*="github.io"]::after,
a[href*="surge.sh"]::after {
  @apply bg-blue-300;
  background-image: url("@/assets/link.svg");
}

a[href*="github.com"]::after {
  @apply bg-gray-400;
  background-image: url("@/assets/github.svg");
}

a[href*="docs.google.com"]::after {
  @apply bg-yellow-400;
  background-image: url("@/assets/doc.svg");
}
</style>

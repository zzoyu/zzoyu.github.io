<script setup lang="ts">
const props = defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul class="list-disc flex flex-col gap-2">
    <li v-for="(project, index) in projects" :key="index">
      {{ project.name }}
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
      <ul>
        <li v-for="(description, index) in project.descriptions" :key="index">
          {{ description }}
        </li>
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

li > mark {
  @apply mr-1;
}

a::after {
  @apply bg-green-300 underline inline-block rounded-full text-center text-white ml-1 w-5 h-5 align-top;
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

<script setup lang="ts">
import TheConfetti from "@/components/TheConfetti.vue";
import { inject } from "vue";

const currentIndex = inject("currentIndex");
</script>

<template>
  <div class="flex flex-col gap-10 grow relative">
    <h1>Contact</h1>
    <ul class="list-disc">
      <li>상세 이력서 파일입니다. <mark>준비중.pdf</mark></li>
      <li>
        이메일로 연락 주실 경우 다음 주소로 연락 부탁드립니다.
        <mark>cho.yj@outlook.com</mark>
      </li>
    </ul>
    <h2 class="mt-10">감사합니다.</h2>
    <a href="#app" class="underline underline-offset-4 mt-10">⬆ 위로가기</a>
  </div>
  <TheConfetti
    v-if="currentIndex === 3"
    class="absolute w-full h-full left-0 top-0 pointer-events-none"
  />
</template>

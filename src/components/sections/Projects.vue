<script setup lang="ts">
import type { Project } from "types/Project";
import ProjectItems from "@/components/ProjectItems.vue";

const projectsWork: Project[] = [
  {
    name: "쇼핑몰 솔루션 디자인 빌더 FrontEnd",
    stacks: ["Next 13"],
  },
  {
    name: "쇼핑몰 솔루션 백오피스 FrontEnd",
    stacks: ["Nuxt 3"],
    descriptions: [
      "SSR 어드민 페이지",
      "분리된 Storybook 프로젝트를 사용한 아토믹 디자인 시스템 구축",
    ],
  },
  {
    name: "라이브 커머스 실시간 방송 스트리밍 Android App",
    stacks: ["Kotlin Android"],
    descriptions: [
      "RTMP 프로토콜 기반 영상 송출 앱",
      "Zeplin을 통한 협업, 커스텀 디자인 적용",
      "카메라 및 마이크 제어",
      "백엔드 API 비동기 통신",
    ],
  },
  {
    name: "라이브 커머스 방송 시청 플레이어 FrontEnd",
    stacks: ["Vue 3"],
    descriptions: [
      "웹소켓 실시간 데이터 통신 및 API 비동기 통신",
      "HLS.js 기반 실시간 스트리밍 플레이어",
      "벡터 기반 Lottie 애니메이션 적용",
      "카카오톡 커스텀 공유",
      "가상 PIP 기능을 구현하여, 자연스러운 페이지 이동 및 통계 수집 등 상품-플레이어 상호작용",
    ],
  },
  {
    name: "라이브 커머스 방송 관리 백오피스 FrontEnd",
    stacks: ["Nuxt 2"],
    descriptions: [
      "웹소켓 실시간 데이터 통신 및 API 비동기 통신",
      "각종 UI 컴포넌트 체계 구현",
      "집계 그래프(D3.js, Canvas) 및 엑셀 등 통계용 기능 구현",
    ],
  },
  {
    name: "지자체 공공 숙박 예약 플랫폼 FrontEnd",
    stacks: ["Vue 2"],
    descriptions: [
      "라우팅 체계 및 미들웨어 작성",
      "레이아웃 구현 및 페이지 개발",
    ],
  },
];

const projectsPersonal: Project[] = [
  {
    name: "픽셀 에디터",
    stacks: ["Vue 3"],
    links: [
      "https://zzoyu.github.io/vue-pixel-editor/",
      "https://github.com/zzoyu/vue-pixel-editor",
    ],
    descriptions: [
      "Canvas 기반 그림판",
      "레트로 풍 픽셀 아트를 그리기 위한 도구",
      "색상 팔레트 기능 제공",
      "지우개, 연필, 직선, 직사각형, 원, 채우기 기능",
      "레이어 기능 지원(우선순위 변경, 가시성 변경, 삭제, 잠금)",
    ],
  },
  {
    name: "비트 메이커",
    stacks: ["Vue 3"],
    links: [
      "https://painstaking-ant.surge.sh",
      "https://github.com/zzoyu/vue-drum-pad",
    ],
    descriptions: [
      "WebAudio API 기반, 비트를 만들 수 있는 웹 앱",
      "클릭 및 키보드 입력 녹화로 편집 가능",
      "주소에 비트 정보를 인코딩하여 공유할 수 있는 기능",
    ],
  },
  {
    name: "무선 다관절 탐사 로봇",
    stacks: ["C", "Java Android"],
    links: [
      "https://docs.google.com/presentation/d/e/2PACX-1vTNj3BgHcWyBRu_sCsbBOsrZVegW1x-_PIJvLJIMjGkisQqAEHuh2S7EUA/pub?start=false&loop=false&delayms=3000",
    ],
    descriptions: [
      "비동기 시리얼 통신 기반 블루투스 모듈 제어 및 인터럽트 처리",
      "전용 안드로이드 앱을 통한 기기 제어 및 데이터 수신",
    ],
  },
];
</script>

<template>
  <div class="">
    <h1>Projects</h1>
    <h2>업무 프로젝트</h2>
    <ProjectItems :projects="projectsWork" />

    <h2>개인 및 토이 프로젝트</h2>
    <ProjectItems :projects="projectsPersonal" />
  </div>
</template>

<style scoped></style>

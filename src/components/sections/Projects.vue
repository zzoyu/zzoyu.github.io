<template>
  <div class="">
    <h1>Projects</h1>
    <ul class="list-disc flex flex-col gap-2">
      <li>
        쇼핑몰 솔루션 디자인 빌더 FrontEnd (진행) <mark>Next 13</mark>
        <ul></ul>
      </li>
      <li>
        쇼핑몰 솔루션 백오피스 FrontEnd (중단) <mark>Nuxt 3</mark>
        <ul>
          <li>SSR 어드민 페이지</li>
          <li>분리된 Storybook 프로젝트를 사용한 아토믹 디자인 시스템 구축</li>
        </ul>
      </li>

      <li>
        라이브 커머스 실시간 방송 스트리밍 Android App <mark>Kotlin</mark>
        <ul>
          <li>RTMP 프로토콜 기반 영상 송출 앱</li>
          <li>Zeplin을 통한 협업, 커스텀 디자인 적용</li>
          <li>카메라 및 마이크 제어</li>
          <li>백엔드 API 비동기 통신</li>
        </ul>
      </li>
      <li>
        라이브 커머스 방송 시청 플레이어 FrontEnd <mark>Vue 3</mark>
        <ul>
          <li>웹소켓 실시간 데이터 통신 및 API 비동기 통신</li>
          <li>HLS.js 기반 실시간 스트리밍 플레이어</li>
          <li>벡터 기반 Lottie 애니메이션 적용</li>
          <li>카카오톡 커스텀 공유</li>
          <li>
            가상 PIP 기능을 구현하여, 자연스러운 페이지 이동 및 통계 수집 등
            상품-플레이어 상호작용
          </li>
        </ul>
      </li>
      <li>
        라이브 커머스 방송 관리 백오피스 FrontEnd <mark>Nuxt 2</mark>
        <ul>
          <li>웹소켓 실시간 데이터 통신 및 API 비동기 통신</li>
          <li>각종 UI 컴포넌트 체계 구현</li>
          <li>집계 그래프(D3.js, Canvas) 및 엑셀 등 통계용 기능 구현</li>
        </ul>
      </li>
      <li>
        지자체 숙박 예약 플랫폼 FrontEnd <mark>Vue 2</mark>
        <ul>
          <li>라우팅 체계 및 미들웨어 작성</li>
          <li>레이아웃 구현</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  @apply list-disc;
}

li > ul {
  @apply list-inside mb-4;
}
</style>

<template>
  <div class="flex flex-col gap-10 grow">
    <h1>About me</h1>
    <div class="flex flex-col gap-2">
      <h2 class="">조유진 <mark>1996.11.02</mark></h2>
      <div class="flex gap-4">
        <a href="https://www.linkedin.com/in/fe-yjcho/" target="_blank"
          >이력서</a
        >
        <a href="https://www.linkedin.com/in/fe-yjcho/" target="_blank"
          >LinkedIn</a
        >
        <a href="https://github.com/zzoyu" target="_blank">GitHub</a>
      </div>
    </div>

    <ul>
      <li>(구)임베디드, (현)프론트엔드 개발자</li>
      <li>
        한국방송통신대학교 컴퓨터과학과 졸업
        <mark>3.3/4.5</mark>
      </li>
    </ul>
    <ul>
      <li>
        저는 유저와 직접 상호작용하는 모든 분야를 좋아합니다. 취미로는 게임
        개발을 배우고 있습니다.
      </li>

      <li>
        업무에서 Vue.js 3, Nuxt.js 3 위주의 프로젝트를 다수 수행하였습니다.
      </li>
      <li>언어는 TypeScript, JavaScript를 주로 사용하고 있습니다.</li>
      <li>
        현재는 이커머스 플랫폼 회사의 쇼핑몰 솔루션 개발팀에서 신규 프로젝트 및
        유지보수 작업을 맡고 있습니다.
      </li>
    </ul>

    <ul class="flex flex-col gap-4">
      <li>
        <h3>FrontEnd</h3>
        <ul class="stack">
          <li>Vue.js <mark>best</mark></li>
          <li>Nuxt.js <mark>best</mark></li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Android(?)</li>
        </ul>
      </li>

      <li>
        <h3>BackEnd</h3>
        <ul class="stack">
          <li>Express.js</li>
          <li>PHP</li>
        </ul>
      </li>

      <li>
        <h3>Language</h3>
        <ul class="stack">
          <li>JavaScript <mark>best</mark></li>
          <li>TypeScript <mark>best</mark></li>
          <li>Python</li>
          <li>Kotlin</li>
          <li>PHP</li>
          <li>C/C++</li>
        </ul>
      </li>

      <li>
        <h3>Etc.</h3>
        <ul class="stack">
          <li>Git</li>
          <li>GitHub(+Action)</li>
          <li>GitLab(+Workflow)</li>
          <li>Linux</li>
          <li>Docker</li>
          <li>Storybook</li>
          <li>TailwindCSS</li>
        </ul>
      </li>

      <li>
        <h3>그 외 관심사🧐</h3>
        <ul class="stack">
          <li>Three.js</li>
          <li>Phaser.js</li>
          <li>Arduino</li>
          <li>Raspberry Pi</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  @apply underline underline-offset-4 text-emerald-400;
}
</style>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const container = ref<HTMLElement | null>(null);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

const showHeaderName = ref(false);
const showHeaderDescription = ref(false);

onMounted(() => {
  if (container.value) {
    container.value.appendChild(renderer.domElement);
    animate();
  }

  showHeaderName.value = true;

  window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    // set camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
});
</script>

<template>
  <div ref="container" class="fixed w-full h-full left-0 top-0"></div>
  <div class="fixed w-full h-full left-0 top-0 p-10 flex justify-between">
    <div class="flex flex-col mt-[10vh] justify-between">
      <div>
        <Transition
          name="popup"
          @after-enter="() => (showHeaderDescription = true)"
        >
          <h1 v-show="showHeaderName" class="text-4xl max-sm:text-2xl">
            조유진
          </h1>
        </Transition>
        <Transition name="fade">
          <h2 v-show="showHeaderDescription" class="text-2xl max-sm:text-xl">
            Frontend Developer, etc
          </h2>
        </Transition>
      </div>
      <div>
        <nav>
          <li>소개</li>
          <li>프로젝트</li>
          <li>연락처</li>
        </nav>
      </div>
    </div>
    <div class="h-full flex flex-col justify-end items-center">
      <div class="text-black text-2xl animate-bounce">↓</div>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
}

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

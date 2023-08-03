<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
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

onMounted(() => {
  if (container.value) {
    container.value.appendChild(renderer.domElement);
    animate();
  }

  window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    // set camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
});
</script>

<template>
  <div
    ref="container"
    class="fixed w-full h-full left-0 top-0 pointer-events-none"
  ></div>
</template>
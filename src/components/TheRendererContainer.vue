<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const container = ref<HTMLElement | null>(null);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const loader = new GLTFLoader();
const test = await loader.load(
  "Orbiter_Space_Shuttle_OV-103_Discovery-150k-4096.gltf",
  (gltf) => {
    scene.add(gltf.scene);
    gltf.scene;
    gltf.scenes;
    gltf.cameras;
    gltf.asset;

    gltf.scene.rotation.x = 0.5;
    gltf.scene.rotation.y = 0.5;
    gltf.scene.rotation.z = 1.5;
    gltf.scene.scale.set(0.1, 0.1, 0.1);
  }
);

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
    class="fixed w-full h-full left-0 top-0 -z-10 pointer-events-none"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  AmbientLight,
  DirectionalLight,
} from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

enum SceneState {
  Rolling = 0,
  StopMoving = 1,
}
const props = defineProps<{
  sceneState: SceneState;
}>();

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

const ambientLight = new AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const dirLight = new DirectionalLight(0xefefff, 1.5);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);

camera.position.z = 5;

const loader = new GLTFLoader();
const me = await loader.loadAsync("/me.gltf");

me.scene.scale.set(0.3, 0.3, 0.3);
me.scene.rotation.y = -2;
me.scene.position.set(0, -1, 0);
scene.add(me.scene);

const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  switch (props.sceneState) {
    case SceneState.Rolling:
      me.scene.rotation.y += 0.03;
      me.scene.rotation.x = Math.sin(Date.now() * 0.002) * 0.1;

      me.scene.position.y += (-2 - me.scene.position.y) * 0.1;
      me.scene.position.x += (0 - me.scene.position.x) * 0.1;

      me.scene.scale.x += (0.3 - me.scene.scale.x) * 0.1;
      me.scene.scale.y += (0.3 - me.scene.scale.y) * 0.1;
      me.scene.scale.z += (0.3 - me.scene.scale.z) * 0.1;
      break;
    case SceneState.StopMoving:
      // tween model to center and stop rotating
      me.scene.rotation.y += (-2 - me.scene.rotation.y) * 0.1;
      me.scene.rotation.x += (0 - me.scene.rotation.x) * 0.1;

      me.scene.position.y += (-2 - me.scene.position.y) * 0.1;
      me.scene.position.x +=
        (2 - me.scene.position.x + Math.sin(Date.now() * 0.002) * 0.5) * 0.1;

      me.scene.scale.x += (0.2 - me.scene.scale.x) * 0.1;
      me.scene.scale.y += (0.2 - me.scene.scale.y) * 0.1;
      me.scene.scale.z += (0.2 - me.scene.scale.z) * 0.1;

      break;
  }
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

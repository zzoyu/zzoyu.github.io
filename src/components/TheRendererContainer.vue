<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  Object3D,
} from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

enum SceneState {
  Rolling = 0,
  StopMoving = 1,
  Hopping = 2,
}
const props = defineProps<{
  sceneState: SceneState;
}>();

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const container = ref<HTMLElement | null>(null);
let renderer: WebGLRenderer | null = null;
let me: Object3D | null = null;
let animationFrameId: number | null = null;

const ambientLight = new AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const dirLight = new DirectionalLight(0xefefff, 1.5);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);

camera.position.z = 5;

const loader = new GLTFLoader();

const isWebGLAvailable = () => {
  const canvas = document.createElement("canvas");
  return Boolean(
    canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl"),
  );
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  if (!renderer || !me) return;

  renderer.render(scene, camera);

  switch (props.sceneState) {
    case SceneState.Rolling:
      me.rotation.y += 0.03;
      me.rotation.x = Math.sin(Date.now() * 0.002) * 0.1;

      me.position.y += (-2 - me.position.y) * 0.1;
      me.position.x += (0 - me.position.x) * 0.1;

      me.scale.x += (0.3 - me.scale.x) * 0.1;
      me.scale.y += (0.3 - me.scale.y) * 0.1;
      me.scale.z += (0.3 - me.scale.z) * 0.1;
      break;
    case SceneState.StopMoving:
      // tween model to corner and stop rotating
      me.rotation.y += (-2 - me.rotation.y) * 0.1;
      me.rotation.x += (0 - me.rotation.x) * 0.1;

      me.position.y += (-2 - me.position.y) * 0.1;
      me.position.x +=
        (2 - me.position.x + Math.sin(Date.now() * 0.002) * 0.5) * 0.1;

      me.scale.x += (0.2 - me.scale.x) * 0.1;
      me.scale.y += (0.2 - me.scale.y) * 0.1;
      me.scale.z += (0.2 - me.scale.z) * 0.1;
      break;

    case SceneState.Hopping:
      me.rotation.y += (-2 - me.rotation.y) * 0.1;
      me.rotation.x = Math.sin(Date.now() * 0.002) * 0.1;
      me.position.y += (-2 - me.position.y) * 0.1;
      me.position.x += (1 - me.position.x) * 0.1;

      me.scale.x += (0.3 - me.scale.x) * 0.1;
      me.scale.y += (0.3 - me.scale.y) * 0.1;
      me.scale.z += (0.3 - me.scale.z) * 0.1;

      break;
  }
};

const handleResize = () => {
  if (!renderer) return;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

onMounted(() => {
  if (!container.value || !isWebGLAvailable()) {
    return;
  }

  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.value.appendChild(renderer.domElement);
  } catch {
    renderer = null;
    return;
  }

  loader
    .loadAsync("/me.gltf")
    .then((model) => {
      me = model.scene;
      me.scale.set(0.3, 0.3, 0.3);
      me.rotation.y = -2;
      me.position.set(0, -1, 0);
      scene.add(me);
      animate();
    })
    .catch(() => {
      me = null;
    });

  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);

  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }

  renderer?.dispose();
});
</script>

<template>
  <div
    ref="container"
    class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
  ></div>
</template>

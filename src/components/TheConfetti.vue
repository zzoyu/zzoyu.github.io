<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);

const resizeCanvas = () => {
  if (!canvas.value) return;
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
};

const createConfetti = (canvas: HTMLCanvasElement) => {
  const confetti = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.25,
    r: Math.random() * 15 + 1,
    d: Math.random() * 1 + 1,
    fillStyle: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 0.5 + 0.5})`,
  };
  return confetti;
};

const confettiList = ref<ReturnType<typeof createConfetti>[]>([]);

const drawConfetti = (
  ctx: CanvasRenderingContext2D,
  confetti: ReturnType<typeof createConfetti>
) => {
  ctx.beginPath();
  // tilt the confetti
  ctx.moveTo(confetti.x + confetti.r / 2, confetti.y);
  ctx.lineTo(confetti.x, confetti.y + confetti.r / 2);
  ctx.lineTo(confetti.x - confetti.r / 2, confetti.y);
  ctx.lineTo(confetti.x, confetti.y - confetti.r / 2);
  ctx.closePath();
  ctx.fillStyle = confetti.fillStyle;
  ctx.fill();
};

const confettiAnimation = () => {
  if (!canvas.value) return;
  const ctx = canvas.value.getContext("2d");
  if (!ctx) return;

  // create confetti every 10 frames
  if (Math.random() < 0.1)
    confettiList.value.push(createConfetti(canvas.value));

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  confettiList.value.forEach((confetti, index) => {
    drawConfetti(ctx, confetti);
    confetti.y += confetti.d;
    confetti.x += Math.sin(confetti.y * 0.05);
    if (confetti.y >= canvas.value!.height) {
      confettiList.value.splice(index, 1);
    }
  });

  // if (confetti.y <= canvas.value.height) {
  requestAnimationFrame(confettiAnimation);
  // }
};

onMounted(() => {
  const ctx = canvas.value?.getContext("2d");
  if (!ctx || !canvas.value) return;

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);

  confettiAnimation();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvas);
});
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

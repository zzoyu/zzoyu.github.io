import { ref, watchEffect } from "vue";

const isDarkMode = ref(
  window.matchMedia("(prefers-color-scheme: dark)").matches
);

watchEffect(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

export function useDarkMode() {
  return { isDarkMode };
}

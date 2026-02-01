import { ref, onMounted, onUnmounted } from "vue";

export function useElementObserver() {
  const isVisible = ref(false);
  const target = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        isVisible.value = entries[0]?.isIntersecting || false;
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      },
    );

    if (target.value) observer.observe(target.value);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { target, isVisible };
}

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { XCircle } from "lucide-vue-next";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry) {
        isVisible.value = entry.isIntersecting;
      }
    },
    {
      threshold: 0.3,
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="py-24 bg-main transition-colors duration-300 overflow-hidden"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div
        class="max-w-3xl mb-14 transition-all duration-700 ease-out"
        :class="
          isVisible
            ? 'opacity-100 translate-y-0 blur-none'
            : 'opacity-0 translate-y-12 blur-sm'
        "
      >
        <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-4 text-main">
          Punya Bisnis, Tapi Digitalisasinya Masih
          <span class="text-primary">Setengah-Setengah?</span>
        </h3>

        <p class="text-main/70 text-lg">
          Banyak startup dan UMKM pengin go digital, tapi sering kejebak di
          masalah ini:
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          class="p-6 border border-main/10 rounded-xl bg-secondary transition-all duration-700 ease-out delay-100"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-12 blur-sm'
          "
        >
          <div class="flex items-start gap-3">
            <XCircle class="size-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 class="font-semibold mb-2 text-main">
                Bingung mulai dari mana
              </h4>
              <p class="text-main/70 text-sm">
                Mau bikin website atau aplikasi, tapi nggak tahu harus mulai
                dari strategi, fitur, atau teknologi apa.
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-6 border border-main/10 rounded-xl bg-secondary transition-all duration-700 ease-out delay-200"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-12 blur-sm'
          "
        >
          <div class="flex items-start gap-3">
            <XCircle class="size-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 class="font-semibold mb-2 text-main">
                Hasil IT nggak sesuai kebutuhan
              </h4>
              <p class="text-main/70 text-sm">
                Sudah pakai jasa IT, tapi produk akhirnya nggak membantu
                operasional atau pertumbuhan bisnis.
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-6 border border-main/10 rounded-xl bg-secondary transition-all duration-700 ease-out delay-300"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-12 blur-sm'
          "
        >
          <div class="flex items-start gap-3">
            <XCircle class="size-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 class="font-semibold mb-2 text-main">
                Ribet & mahal, dampaknya minim
              </h4>
              <p class="text-main/70 text-sm">
                Fitur terlalu kompleks, biaya besar, tapi tidak memberi hasil
                yang signifikan.
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-6 border border-main/10 rounded-xl bg-secondary transition-all duration-700 ease-out delay-400"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-12 blur-sm'
          "
        >
          <div class="flex items-start gap-3">
            <XCircle class="size-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 class="font-semibold mb-2 text-main">
                Tidak punya partner IT jangka panjang
              </h4>
              <p class="text-main/70 text-sm">
                Tidak ada tim yang bisa diajak diskusi, berkembang, dan scaling
                bareng bisnis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-14 max-w-3xl transition-all duration-700 ease-out delay-500"
        :class="
          isVisible
            ? 'opacity-100 translate-y-0 blur-none'
            : 'opacity-0 translate-y-12 blur-sm'
        "
      >
        <p class="text-lg font-medium text-main">
          Kalau salah satunya relate,
          <span class="text-primary font-semibold">
            berarti lo nggak sendirian.
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

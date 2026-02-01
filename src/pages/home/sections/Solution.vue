<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Target,
  Zap,
  TrendingUp,
  BrainCircuit,
  Code2,
  Rocket,
  RefreshCcw,
} from "lucide-vue-next";

// === LOGIC ANIMASI ===
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
    { threshold: 0.4 }
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
    class="py-24 px-10 bg-secondary transition-colors duration-300 overflow-hidden"
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
          Di sinilah <span class="text-primary">OneTem</span> Berperan
        </h3>
        <p class="text-main/70 text-lg">
          OneTem hadir bukan cuma sebagai vendor IT, tapi sebagai
          <span class="font-medium text-main"> partner digital </span>
          yang bantu lo mikir dari sisi bisnis sampai solusi teknologinya
          benar-benar jalan.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          class="p-6 bg-main rounded-xl border border-main/10 shadow-sm hover:shadow-md transition-all duration-500 ease-out delay-100"
          :class="
            isVisible
              ? 'opacity-100 scale-100 blur-none'
              : 'opacity-0 scale-90 blur-sm'
          "
        >
          <div
            class="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary"
          >
            <Target class="size-6" />
          </div>
          <h4 class="font-semibold mb-2 text-main">Relevan dengan bisnis</h4>
          <p class="text-main/70 text-sm">
            Kami mulai dari problem dan tujuan bisnis, bukan langsung lompat ke
            fitur teknis yang membingungkan.
          </p>
        </div>

        <div
          class="p-6 bg-main rounded-xl border border-main/10 shadow-sm hover:shadow-md transition-all duration-500 ease-out delay-200"
          :class="
            isVisible
              ? 'opacity-100 scale-100 blur-none'
              : 'opacity-0 scale-90 blur-sm'
          "
        >
          <div
            class="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary"
          >
            <Zap class="size-6" />
          </div>
          <h4 class="font-semibold mb-2 text-main">Mudah dipakai</h4>
          <p class="text-main/70 text-sm">
            Solusi yang simpel, jelas, UX yang intuitif, dan bisa langsung
            dipakai tim tanpa training ribet.
          </p>
        </div>

        <div
          class="p-6 bg-main rounded-xl border border-main/10 shadow-sm hover:shadow-md transition-all duration-500 ease-out delay-300"
          :class="
            isVisible
              ? 'opacity-100 scale-100 blur-none'
              : 'opacity-0 scale-90 blur-sm'
          "
        >
          <div
            class="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary"
          >
            <TrendingUp class="size-6" />
          </div>
          <h4 class="font-semibold mb-2 text-main">Siap berkembang</h4>
          <p class="text-main/70 text-sm">
            Arsitektur dibangun supaya bisa scaling (diperbesar) seiring
            pertumbuhan transaksi bisnis lo.
          </p>
        </div>
      </div>

      <div
        class="bg-main rounded-2xl border border-main/10 p-8 md:p-10 shadow-lg transition-all duration-700 ease-out delay-300"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        "
      >
        <h4 class="text-xl font-semibold mb-4 text-main">
          Pendekatan End-to-End
        </h4>

        <p class="text-main/70 mb-8 max-w-3xl">
          Makanya, kami pakai pendekatan end-to-end — dari perencanaan,
          pengembangan, sampai implementasi dan support. Bukan cuma bikin, tapi
          memastikan solusi itu benar-benar kepakai.
        </p>

        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div
            class="p-4 rounded-xl bg-secondary border border-main/5 flex items-center gap-3 transition-all duration-700 ease-out delay-400"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            "
          >
            <BrainCircuit class="size-5 text-primary shrink-0" />
            <span class="font-medium text-main">Business Planning</span>
          </div>

          <div
            class="p-4 rounded-xl bg-secondary border border-main/5 flex items-center gap-3 transition-all duration-700 ease-out delay-500"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            "
          >
            <Code2 class="size-5 text-primary shrink-0" />
            <span class="font-medium text-main">Design & Dev</span>
          </div>

          <div
            class="p-4 rounded-xl bg-secondary border border-main/5 flex items-center gap-3 transition-all duration-700 ease-out delay-600"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            "
          >
            <Rocket class="size-5 text-primary shrink-0" />
            <span class="font-medium text-main">Implementation</span>
          </div>

          <div
            class="p-4 rounded-xl bg-secondary border border-main/5 flex items-center gap-3 transition-all duration-700 ease-out delay-700"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            "
          >
            <RefreshCcw class="size-5 text-primary shrink-0" />
            <span class="font-medium text-main">Maintenance</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

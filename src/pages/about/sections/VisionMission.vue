<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";

const { target: _target, isVisible } = useElementObserver();

const missions = [
  "Menciptakan lingkungan yang mendukung proses belajar, bertumbuh, dan berbagi pengetahuan.",
  "Mengembangkan kompetensi melalui keterlibatan langsung dalam proyek nyata.",
  "Membangun kolaborasi lintas bidang untuk menciptakan solusi berbasis teknologi.",
  "Menyediakan solusi IT yang relevan, adaptif, dan sesuai kebutuhan bisnis.",
  "Menjalin kemitraan jangka panjang berbasis nilai dan kepercayaan.",
  "Menumbuhkan budaya kerja yang sehat dan saling mendukung.",
];
</script>

<template>
  <section
    ref="_target"
    class="relative py-24 md:py-32 bg-bg-main transition-colors duration-700"
  >
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="mb-20">
        <div
          class="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest transition-all duration-1000 delay-100"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          "
        >
          Our Vision
        </div>

        <h2
          class="text-3xl md:text-5xl font-black text-text-main tracking-tight mb-8 transition-all duration-1000 delay-300"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          Menjadi tempat yang
          <span class="text-primary italic font-serif"
            >aman & berkelanjutan</span
          >
          bagi talenta digital.
        </h2>

        <div
          class="max-w-3xl p-8 md:p-10 rounded-[2.5rem] bg-secondary transition-all duration-1000 delay-500"
          :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        >
          <p
            class="text-xl md:text-2xl text-text-main/80 leading-relaxed italic"
          >
            "Serta tumbuh sebagai partner solusi IT end-to-end yang berdampak
            dan berdaya saing global."
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-4">
          <h3
            class="text-2xl font-black text-text-main uppercase tracking-tighter transition-all duration-1000 delay-600"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            "
          >
            Misi Kami
          </h3>
          <div class="mt-4 w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div class="lg:col-span-8">
          <ul class="grid sm:grid-cols-2 gap-6">
            <li
              v-for="(mission, index) in missions"
              :key="index"
              class="group flex gap-4 transition-all duration-700"
              :style="{ transitionDelay: `${700 + index * 100}ms` }"
              :class="
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              "
            >
              <div
                class="shrink-0 w-6 h-6 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
              >
                <div
                  class="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white"
                ></div>
              </div>
              <p
                class="text-text-main/70 leading-relaxed group-hover:text-text-main transition-colors"
              >
                {{ mission }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"
    ></div>
  </section>
</template>

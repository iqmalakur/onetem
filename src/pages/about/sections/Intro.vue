<script setup>
import { useElementObserver } from "@/composables/useElementObserver";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="relative pt-32 pb-24 bg-bg-main transition-colors duration-500 overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div
        class="flex items-center gap-3 mb-8 transition-all duration-1000 delay-100"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <span class="w-10 h-0.5 bg-primary"></span>
        <span class="text-xs font-bold tracking-[0.3em] text-primary uppercase"
          >About OneTem</span
        >
      </div>

      <h1
        class="text-4xl md:text-6xl font-black text-text-main mb-12 tracking-tight transition-all duration-1000 delay-300"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        Membangun Solusi, <br />
        <span class="opacity-50 italic font-serif">Bukan Sekadar Kode.</span>
      </h1>

      <div class="grid md:grid-cols-12 gap-12 lg:gap-20">
        <div
          class="md:col-span-7 transition-all duration-1000 delay-500"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          "
        >
          <p
            class="text-xl md:text-2xl text-text-main/80 leading-relaxed font-medium"
          >
            OneTem lahir dari satu keyakinan sederhana: solusi digital yang baik
            tidak dibangun sendirian. Dibutuhkan
            <span class="text-primary">kolaborasi</span>, pemahaman bisnis, dan
            eksekusi yang tepat.
          </p>
        </div>

        <div
          class="md:col-span-5 flex items-end transition-all duration-1000 delay-700"
          :class="
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          "
        >
          <div
            class="relative p-8 rounded-2xl bg-secondary transition-colors duration-500"
          >
            <p class="text-text-main/70 leading-relaxed italic relative z-10">
              "Kami hadir sebagai partner solusi IT end-to-end yang membantu
              startup dan UMKM beradaptasi di era digital dengan cara yang
              relevan."
            </p>
            <span
              class="absolute top-4 left-4 text-6xl text-primary/10 font-serif pointer-events-none"
              >“</span
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-0 transition-opacity duration-1000"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
    ></div>
  </section>
</template>

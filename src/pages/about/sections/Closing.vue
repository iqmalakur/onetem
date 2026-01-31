<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="relative py-32 md:py-48 bg-secondary/30 transition-colors duration-700 overflow-hidden"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
    ></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <div
        class="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-bg-main shadow-sm border border-primary/5 transition-all duration-1000 delay-100"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span
          class="text-[10px] font-black text-text-main uppercase tracking-[0.2em]"
          >Our Commitment</span
        >
      </div>

      <h2
        class="text-4xl md:text-6xl font-black text-text-main tracking-tight leading-[1.1] mb-10 transition-all duration-1000 delay-300"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        "
      >
        Lebih dari Sekadar <br />
        <span class="text-primary italic font-serif">Jasa IT.</span>
      </h2>

      <div
        class="space-y-6 max-w-2xl mx-auto transition-all duration-1000 delay-500"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        <p
          class="text-xl md:text-2xl text-text-main/80 leading-relaxed font-medium"
        >
          Bagi kami, teknologi bukan tujuan akhir, melainkan alat untuk membantu
          bisnis tumbuh dengan cara yang
          <span
            class="text-text-main underline decoration-primary/30 decoration-4 underline-offset-4"
            >lebih cerdas</span
          >
          dan berkelanjutan.
        </p>

        <p class="text-lg text-text-main/60 leading-relaxed italic">
          OneTem hadir untuk menjadi partner yang sejalan dengan visi Anda,
          berkolaborasi, berinovasi, dan tumbuh bersama di setiap langkah.
        </p>
      </div>

      <div
        class="mt-16 transition-all duration-1000 delay-700"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
      >
        <div
          class="inline-block p-px rounded-full bg-linear-to-r from-transparent via-primary/50 to-transparent w-full max-w-xs"
        ></div>
        <p
          class="mt-8 text-[10px] font-bold text-primary uppercase tracking-[0.4em]"
        >
          Ready to Grow?
        </p>
      </div>
    </div>
  </section>
</template>

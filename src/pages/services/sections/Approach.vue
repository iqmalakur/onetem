<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import ServiceList from "./ServiceList.vue";
import { whatsapp } from "@/data/social";

const { target: _target, isVisible } = useElementObserver();

const steps = [
  "Diskusi dan analisis kebutuhan",
  "Perencanaan solusi yang realistis",
  "Pengembangan yang terstruktur",
  "Testing dan evaluasi",
  "Support berkelanjutan",
];
</script>

<template>
  <section
    ref="_target"
    class="bg-secondary/30 py-24 rounded-t-[3rem] transition-all duration-1000 ease-in-out"
    :class="
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    "
  >
    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div
        class="space-y-8 transition-all duration-700 delay-200"
        :class="
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        "
      >
        <div>
          <h2 class="text-3xl font-bold mb-6 text-text-main">
            Cara Kami Bekerja
          </h2>
          <p class="text-text-main/70 text-lg">
            Kami percaya hasil terbaik lahir dari kolaborasi yang baik. Setiap
            layanan kami kerjakan dengan pendekatan:
          </p>
        </div>

        <ServiceList :items="steps" />
      </div>

      <div
        class="bg-bg-main p-10 rounded-3xl shadow-xl border border-secondary space-y-6 relative overflow-hidden transition-all duration-700 delay-400"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-1000"
          :class="isVisible ? 'scale-100' : 'scale-0'"
        />

        <p class="text-lg font-medium text-text-main relative z-10">
          Bingung menentukan solusi digital yang paling cocok?
        </p>
        <p class="text-text-main/70 relative z-10">
          Tenang. Anda tidak harus langsung tahu semuanya. Kami siap membantu
          memetakan kebutuhan dan menemukan solusi terbaik.
        </p>

        <ButtonCTA
          :href="`https://wa.me/${whatsapp}`"
          class="w-full justify-center py-4 bg-primary hover:bg-primary-hover text-white rounded-xl transition-all hover:scale-[1.05] active:scale-95 shadow-md hover:shadow-primary/20 relative z-10"
        >
          Konsultasi Gratis Sekarang
        </ButtonCTA>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
// Import Icon
import { Rocket, CheckCircle2, ArrowRight } from "lucide-vue-next";

// === LOGIC ANIMASI ===
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry) isVisible.value = entry.isIntersecting;
    },
    { threshold: 0.1 },
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

// Fitur singkat untuk trust signal
const benefits = ["Scalable System", "Clean Code", "On-Time Delivery"];
</script>

<template>
  <section ref="sectionRef" class="py-28 bg-primary relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <svg
        class="w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 100 C 20 0 50 0 100 100 Z"
          fill="none"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          d="M0 100 C 50 0 80 0 100 100 Z"
          fill="none"
          stroke="white"
          stroke-width="0.5"
          opacity="0.5"
        />
      </svg>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/10 rounded-full blur-[100px] pointer-events-none"
    ></div>

    <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
      <div
        class="flex flex-col items-center transition-all duration-1000 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <div
          class="mb-6 bg-white/10 border border-white/20 p-4 rounded-full backdrop-blur-sm animate-bounce duration-3000"
        >
          <Rocket :size="32" class="text-white" />
        </div>

        <h3
          class="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight tracking-tight"
        >
          Siap Naik Level Lewat <br />
          <span class="text-yellow-300">Solusi Digital yang Tepat?</span>
        </h3>

        <p
          class="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Saatnya punya partner IT yang satu visi. Fokus urus bisnis lo, biar
          <span class="text-white font-bold border-b border-white/30 pb-0.5"
            >OneTem</span
          >
          yang urus teknologinya.
        </p>

        <div class="flex flex-col items-center gap-8">
          <div class="hover:scale-105 transition-transform duration-300">
            <ButtonCTA
              :href="`https://wa.me/${whatsapp}`"
              :external="true"
              :isPrimary="false"
              class="bg-white! text-primary! border-white! hover:bg-blue-50!"
            >
              <span class="flex items-center gap-2 font-bold">
                Hubungi Tim OneTem Sekarang
                <ArrowRight :size="18" />
              </span>
            </ButtonCTA>
          </div>

          <div
            class="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-blue-100"
          >
            <div
              v-for="benefit in benefits"
              :key="benefit"
              class="flex items-center gap-2"
            >
              <CheckCircle2 :size="16" class="text-yellow-300" />
              <span>{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

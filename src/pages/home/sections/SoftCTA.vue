<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
// Import Icon
import { MessageCircleQuestion, Coffee, ArrowRight } from "lucide-vue-next";

// === ANIMASI SCROLL ===
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
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-secondary relative overflow-hidden">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div
      class="absolute top-10 left-10 text-main/5 animate-bounce duration-3000"
    >
      <MessageCircleQuestion :size="64" />
    </div>
    <div
      class="absolute bottom-10 right-10 text-main/5 animate-pulse duration-4000"
    >
      <Coffee :size="64" />
    </div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <div
        class="flex flex-col items-center transition-all duration-1000 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <div
          class="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-main/5 shadow-sm text-primary rotate-3 hover:rotate-0 transition-transform duration-500"
        >
          <Coffee :size="32" stroke-width="1.5" />
        </div>

        <h3 class="text-3xl md:text-5xl font-bold leading-tight mb-6 text-main">
          Masih ragu solusi digital apa yang <br class="hidden md:block" />
          <span class="text-primary">Paling Cocok</span> buat bisnis lo?
        </h3>

        <p
          class="text-main/70 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
        >
          Nggak masalah, kita mulai dari ngobrol santai dulu. <br />
          Kami bantu breakdown kebutuhan bisnis lo dan cari solusi paling masuk
          akal,
          <span class="font-bold text-main bg-primary/10 px-1 rounded-md"
            >tanpa ribet.</span
          >
        </p>

        <div
          class="scale-100 hover:scale-105 transition-transform duration-300"
        >
          <ButtonCTA
            :href="`https://wa.me/${whatsapp}`"
            :external="true"
            :isPrimary="true"
          >
            <span class="flex items-center gap-2">
              Konsultasi Gratis Sekarang
              <ArrowRight :size="20" />
            </span>
          </ButtonCTA>
        </div>

        <p class="mt-6 text-sm text-main/40 font-medium">
          Respond cepat • No commitment required
        </p>
      </div>
    </div>
  </section>
</template>

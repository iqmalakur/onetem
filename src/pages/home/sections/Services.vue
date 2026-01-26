<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ButtonCTA from "@/components/button/ButtonCTA.vue";

// === LOGIC ANIMASI (Reversible) ===
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
    id="services"
    ref="sectionRef"
    class="py-24 bg-main transition-colors duration-300 overflow-hidden relative"
  >
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div
        class="max-w-3xl mb-16 transition-all duration-1000 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <h3 class="text-3xl md:text-4xl font-bold mb-4 text-main">
          Apa yang Bisa <span class="text-primary">Kami Bantu?</span>
        </h3>
        <p class="text-main/70 text-lg max-w-2xl">
          Kami fokus ke solusi digital yang relevan, fungsional, dan benar-benar
          kepakai untuk operasional dan pertumbuhan bisnis lo.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8"
      >
        <div
          class="group relative p-8 rounded-3xl bg-secondary border border-main/5 overflow-hidden transition-all duration-500 lg:col-span-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 delay-100"
          :class="
            isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-10'
          "
        >
          <div
            class="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-main/50 border border-main/10 mb-6 text-4xl shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              🌐
            </div>
            <h4
              class="text-2xl font-bold mb-4 text-main group-hover:text-primary transition-colors"
            >
              Website Development
            </h4>
            <p class="text-main/70 text-lg leading-relaxed">
              Bangun website profesional high-performance yang nggak cuma
              kelihatan keren, tapi juga SEO-friendly untuk ningkatin
              kredibilitas di mata customer.
            </p>
          </div>
        </div>

        <div
          class="group relative p-8 rounded-3xl bg-secondary border border-main/5 overflow-hidden transition-all duration-500 lg:col-span-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 delay-200"
          :class="
            isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-10'
          "
        >
          <div
            class="absolute inset-0 bg-linear-to-bl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
          <div class="relative z-10">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-main/50 border border-main/10 mb-6 text-4xl shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              📱
            </div>
            <h4
              class="text-xl font-bold mb-3 text-main group-hover:text-primary transition-colors"
            >
              Mobile App (Android/iOS)
            </h4>
            <p class="text-main/70 leading-relaxed">
              Aplikasi native atau hybrid yang dirancang sesuai alur bisnis lo,
              bikin operasional lapangan jadi lebih rapi dan efisien.
            </p>
          </div>
        </div>

        <div
          class="group relative p-8 rounded-3xl bg-secondary border border-main/5 overflow-hidden transition-all duration-500 lg:col-span-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 delay-300"
          :class="
            isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-10'
          "
        >
          <div
            class="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
          <div class="relative z-10">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-main/50 border border-main/10 mb-6 text-4xl shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              🤖
            </div>
            <h4
              class="text-xl font-bold mb-3 text-main group-hover:text-primary transition-colors"
            >
              Chatbot & Automation
            </h4>
            <p class="text-main/70 leading-relaxed">
              Otomatisasi CS dan penjualan agar bisnis tetap responsif 24/7
              tanpa menambah beban biaya SDM manual.
            </p>
          </div>
        </div>

        <div
          class="group relative p-8 rounded-3xl bg-secondary border border-main/5 overflow-hidden transition-all duration-500 lg:col-span-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 delay-400"
          :class="
            isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-10'
          "
        >
          <div
            class="absolute inset-0 bg-linear-to-tl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
          <div class="relative z-10">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-main/50 border border-main/10 mb-6 text-4xl shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              🧩
            </div>
            <h4
              class="text-2xl font-bold mb-4 text-main group-hover:text-primary transition-colors"
            >
              Custom Digital Solution
            </h4>
            <p class="text-main/70 text-lg leading-relaxed">
              Setiap bisnis punya tantangan unik. Kami siap menganalisis dan
              membangun sistem custom (ERP mini, CRM, dll) yang sesuai kebutuhan
              spesifik lo.
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-16 text-center lg:text-left transition-all duration-700 ease-out delay-500"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <ButtonCTA href="/services" :isPrimary="false">
          Lihat Detail Semua Layanan
        </ButtonCTA>
      </div>
    </div>
  </section>
</template>

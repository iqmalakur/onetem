<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
import { MessageCircleMore } from "lucide-vue-next";

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
    { threshold: 0.3 }
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
    class="pt-28 pb-24 bg-secondary transition-colors duration-300 px-6 md:px-10 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div
          class="transition-all duration-700 ease-out"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-12 blur-sm'
          "
        >
          <h1
            class="text-3xl md:text-4xl font-bold leading-tight mb-6 text-main"
          >
            Your End-to-End <br />
            <span class="text-primary">Digital Solution Partner</span>
            <br />
            Satu Partner untuk Semua Kebutuhan Digital Bisnis Lo
          </h1>
        </div>

        <p
          class="text-main/70 text-lg mb-10 max-w-xl transition-all duration-700 ease-out delay-100"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-12 blur-sm'
          "
        >
          <span class="font-semibold text-main">OneTem</span> adalah partner IT
          untuk startup dan UMKM yang ingin naik level lewat website, aplikasi,
          dan solusi digital yang benar-benar kepakai — bukan cuma bagus di
          tampilan.
        </p>

        <div
          class="flex flex-wrap gap-4 transition-all duration-700 ease-out delay-200"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-12 blur-sm'
          "
        >
          <ButtonCTA :href="`https://wa.me/${whatsapp}`" :external="true">
            <MessageCircleMore class="size-5 mr-2" />
            Konsultasi Gratis
          </ButtonCTA>

          <ButtonCTA href="/services" :isPrimary="false">
            Lihat Layanan
          </ButtonCTA>
        </div>
      </div>

      <div
        class="hidden md:flex md:justify-center transition-all duration-700 ease-out delay-300"
        :class="
          isVisible
            ? 'opacity-100 translate-y-0 blur-none'
            : 'opacity-0 translate-y-12 blur-sm'
        "
      >
        <div
          class="lg:sticky lg:top-32 transition-all duration-1000 ease-out delay-100 transform hover:scale-[1.02]"
        >
          <div
            class="relative w-full mx-auto bg-[#1e1e2e] rounded-xl shadow-2xl overflow-hidden border border-white/10 font-mono text-sm leading-relaxed"
          >
            <div
              class="bg-[#27273a] px-4 py-3 flex items-center justify-between border-b border-white/5"
            >
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div class="text-white/40 text-xs tracking-wider">
                onetem@server ~
              </div>
              <div class="w-10"></div>
            </div>

            <div class="p-6 text-white/90 min-h-80 flex flex-col gap-3">
              <div>
                <span class="text-green-400">➜</span>
                <span class="text-blue-400">~</span>
                <span class="text-yellow-400">whoami</span>
                <div class="mt-1 text-white/80">
                  Hi! We are
                  <span class="font-bold text-white">OneTem Squad</span>.<br />
                  Your technical co-founder partner.
                </div>
              </div>

              <div class="mt-2">
                <span class="text-green-400">➜</span>
                <span class="text-blue-400">~</span>
                <span class="text-yellow-400">cat</span> services.json
                <div class="mt-1 pl-2 border-l-2 border-white/10 text-white/70">
                  {<br />
                  &nbsp;&nbsp;"core":
                  <span class="text-green-300">"Web & Mobile Apps"</span>,<br />
                  &nbsp;&nbsp;"focus":
                  <span class="text-green-300">"Scalability & Performance"</span
                  >,<br />
                  &nbsp;&nbsp;"style":
                  <span class="text-green-300">"Clean Code"</span><br />
                  }
                </div>
              </div>

              <div class="mt-2">
                <span class="text-green-400">➜</span>
                <span class="text-blue-400">~</span> list stack
                <div class="mt-1 flex flex-wrap gap-2 text-xs font-bold">
                  <span class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                    >TypeScript</span
                  >
                  <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded"
                    >Vue.js</span
                  >
                  <span class="bg-red-500/20 text-red-300 px-2 py-1 rounded"
                    >Laravel</span
                  >
                  <span class="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded"
                    >Flutter</span
                  >
                </div>
              </div>

              <div class="mt-4">
                <span class="text-green-400">➜</span>
                <span class="text-blue-400">~</span>
                <span class="text-white/50 italic"
                  >Ready to build your product? 🚀</span
                >
                <span
                  class="inline-block w-2.5 h-4 bg-white/70 align-middle ml-1 animate-pulse"
                ></span>
              </div>
            </div>

            <div
              class="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

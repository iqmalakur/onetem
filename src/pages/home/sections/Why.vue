<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
// Import Icon dari Lucide Vue Next
import {
  Handshake,
  UsersRound,
  Maximize2,
  ScanSearch,
  Target,
} from "lucide-vue-next";

// === DATA KONTEN ===
const reasons = [
  {
    title: "Pendekatan Kolaboratif",
    desc: "Diskusi dua arah. Kami berani memberikan saran teknis yang jujur demi kebaikan produk.",
    icon: Handshake,
  },
  {
    title: "Tim Lintas Bidang",
    desc: "Sinergi antara Developer, Designer, dan Business Analyst agar produk fungsional dan 'menjual'.",
    icon: UsersRound,
  },
  {
    title: "Solusi Scalable (Fleksibel)",
    desc: "Arsitektur siap tumbuh. Mulai dari MVP hemat budget, hingga sistem Enterprise jutaan user.",
    icon: Maximize2,
  },
  {
    title: "100% Transparan",
    desc: "Scope kerja jelas (SOW). Pantau progress mingguan. Tidak ada biaya tersembunyi.",
    icon: ScanSearch,
  },
  {
    title: "Fokus Dampak Bisnis",
    desc: "Tujuan akhir bukan hanya kode yang rapi, tapi operasional efisien dan profit meningkat.",
    icon: Target,
  },
];

// === LOGIC ANIMASI ===
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry) isVisible.value = entry.isIntersecting;
    },
    { threshold: 0.1 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="py-24 px-10 bg-secondary relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div
          class="lg:sticky lg:top-32 transition-all duration-1000 ease-out delay-100"
          :class="
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          "
        >
          <div
            class="relative aspect-4/5 rounded-3xl overflow-hidden bg-main/5 border border-main/10 shadow-lg group"
          >
            <div
              class="absolute inset-0 bg-linear-to-tr from-primary/20 via-secondary to-primary/10 opacity-50 group-hover:scale-105 transition-transform duration-700"
            ></div>

            <div
              class="absolute inset-0 flex flex-col gap-4 items-center justify-center text-main/30"
            >
              <img
                src="https://i.pinimg.com/736x/49/2c/be/492cbe801d7f8bd8609c2df85a3bb191.jpg"
                alt=""
              />
            </div>

            <div class="absolute inset-0 bg-main/10 mix-blend-overlay"></div>
          </div>
        </div>

        <div>
          <div
            class="text-left mb-12 transition-all duration-1000 ease-out"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            "
          >
            <h3
              class="text-3xl md:text-4xl font-bold leading-tight mb-4 text-main"
            >
              Kenapa Banyak Startup & UMKM <br />
              <span class="text-primary">Cocok dengan OneTem?</span>
            </h3>
            <p class="text-main/70 text-lg max-w-xl">
              Kami memposisikan diri sebagai Technical Partner, yang peduli
              kualitas kode dan pertumbuhan bisnis Anda.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div
              v-for="(item, index) in reasons"
              :key="index"
              class="group relative rounded-2xl p-4 transition-all duration-300 hover:bg-main hover:shadow-sm"
              :class="[
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10',
                `delay-${(index + 1) * 100}`,
              ]"
            >
              <div class="flex items-start gap-5">
                <div class="shrink-0">
                  <div
                    class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    <component
                      :is="item.icon"
                      :size="24"
                      stroke-width="1.5"
                      class="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div class="pt-0.5">
                  <h4
                    class="text-lg font-bold text-main mb-1 group-hover:text-primary transition-colors duration-300"
                  >
                    {{ item.title }}
                  </h4>
                  <p
                    class="text-main/70 leading-relaxed text-sm group-hover:text-main/90 transition-colors"
                  >
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

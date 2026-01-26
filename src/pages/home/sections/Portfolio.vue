<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  Bot,
  ExternalLink,
} from "lucide-vue-next";

// === DATA PROJECT ===
// Kita buat object agar mudah dimanage dan dirender
const projects = [
  {
    title: "Corporate Website Revamp",
    category: "Web Development",
    desc: "Redesign website korporat untuk meningkatkan brand trust dan SEO performance.",
    tags: ["Vue.js", "Tailwind", "SEO"],
    icon: Globe,
    color: "bg-blue-500",
  },
  {
    title: "Internal Management System",
    category: "Web App (SaaS)",
    desc: "Aplikasi dashboard untuk memantau stok, keuangan, dan kinerja karyawan secara realtime.",
    tags: ["Laravel", "React", "MySQL"],
    icon: LayoutDashboard,
    color: "bg-purple-500",
  },
  {
    title: "Customer Service AI Bot",
    category: "Automation",
    desc: "Integrasi Chatbot WhatsApp untuk merespon pertanyaan pelanggan 24/7 secara otomatis.",
    tags: ["Python", "OpenAI", "WhatsApp API"],
    icon: Bot,
    color: "bg-green-500",
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
    { threshold: 0.1 }, // Memicu animasi saat 10% section terlihat
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-main relative overflow-hidden">
    <div
      class="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div
        class="max-w-3xl mb-16 transition-all duration-1000 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-4 text-main">
          Selected Works & <br />
          <span class="text-primary">Case Studies</span>
        </h3>

        <p class="text-main/70 text-lg leading-relaxed">
          Kami telah mengerjakan berbagai solusi digital. Dari website branding
          hingga sistem kompleks yang menjadi tulang punggung operasional
          bisnis.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="(item, index) in projects"
          :key="index"
          class="group flex flex-col bg-secondary/30 border border-main/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
          :class="[
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
            `delay-${(index + 1) * 100}`,
          ]"
        >
          <div
            class="relative h-52 bg-secondary flex items-center justify-center overflow-hidden group-hover:bg-primary/5 transition-colors duration-500"
          >
            <div class="absolute inset-0 opacity-10" :class="item.color"></div>

            <component
              :is="item.icon"
              :size="48"
              class="text-main/40 group-hover:scale-110 group-hover:text-primary transition-all duration-500"
              stroke-width="1"
            />

            <div
              class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            >
              <div
                class="bg-main shadow-sm border border-main/10 p-2 rounded-full"
              >
                <ExternalLink :size="16" class="text-primary" />
              </div>
            </div>
          </div>

          <div class="p-6 flex flex-col grow">
            <span
              class="text-xs font-bold tracking-wider text-primary uppercase mb-2"
            >
              {{ item.category }}
            </span>

            <h4
              class="text-xl font-bold text-main mb-3 group-hover:text-primary transition-colors"
            >
              {{ item.title }}
            </h4>

            <p class="text-sm text-main/60 leading-relaxed mb-6 grow">
              {{ item.desc }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2.5 py-1 text-[10px] font-medium bg-main border border-main/10 rounded-md text-main/60"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-main/10 pt-12 transition-all duration-1000 delay-500 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <div>
          <p
            class="text-main/50 text-sm font-semibold uppercase tracking-widest mb-2"
          >
            Our Approach
          </p>
          <div
            class="flex items-center gap-3 text-lg md:text-xl font-medium text-main"
          >
            <span>Paham Masalah</span>
            <ArrowRight class="text-primary w-5 h-5" />
            <span class="text-primary">Solusi Tepat</span>
            <ArrowRight class="text-primary w-5 h-5" />
            <span>Delivery Rapi</span>
          </div>
        </div>

        <div>
          <ButtonCTA href="/portfolio" :isPrimary="false">
            Lihat Semua Project
          </ButtonCTA>
        </div>
      </div>
    </div>
  </section>
</template>

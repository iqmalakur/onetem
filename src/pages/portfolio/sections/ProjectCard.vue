<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";

interface Props {
  title: string;
  category: string;
  description: string;
  link: string;
  index: number;
  isVisible: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    class="group relative bg-bg-main rounded-[2.5rem] border border-secondary overflow-hidden ease-[cubic-bezier(0.2,0.8,0.2,1)] transition-all duration-1200"
    :class="
      isVisible
        ? 'opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0'
        : 'opacity-0 translate-y-24 translate-x-4 scale-90 -rotate-3'
    "
  >
    <div
      class="relative h-72 bg-secondary transition-colors duration-500 overflow-hidden"
    >
      <div
        class="absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-3"
      >
        <span
          class="text-text-main/5 font-black text-7xl tracking-tighter uppercase italic select-none"
        >
          {{ category.split(" ")[0] }}
        </span>
      </div>

      <div class="absolute top-6 left-6 z-20">
        <span
          class="px-4 py-2 rounded-full bg-bg-main/80 dark:bg-bg-main/40 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border border-primary/5 dark:border-white/10"
        >
          {{ category }}
        </span>
      </div>

      <div
        class="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      ></div>
    </div>

    <div class="p-10 relative">
      <span
        class="absolute -top-4 -right-2 text-8xl font-black text-primary/5 dark:text-primary/10 select-none transition-all duration-700 group-hover:text-primary/20 group-hover:-translate-y-4 group-hover:-translate-x-2"
      >
        0{{ index + 1 }}
      </span>

      <h3
        class="text-2xl md:text-3xl font-black text-text-main mb-4 leading-tight group-hover:text-primary transition-colors duration-300 relative z-10"
      >
        {{ title }}
      </h3>

      <p
        class="text-text-main/60 text-base leading-relaxed mb-10 line-clamp-3 transition-colors duration-500 group-hover:text-text-main/80 relative z-10"
      >
        {{ description }}
      </p>

      <a
        :href="link"
        target="_blank"
        class="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-secondary text-text-main font-bold text-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.25)] dark:hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:-translate-y-1 active:scale-95"
      >
        Lihat Project
        <ExternalLink
          :size="16"
          stroke-width="3"
          class="transition-transform duration-300 group-hover:rotate-12"
        />
      </a>
    </div>
  </div>
</template>

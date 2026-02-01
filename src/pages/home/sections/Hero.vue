<script setup lang="ts">
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
import { useElementObserver } from "@/composables/useElementObserver";
import {
  MessageCircleMore,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-vue-next";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="pt-32 pb-24 bg-secondary transition-colors duration-500 px-6 md:px-10 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div class="relative z-10">
        <div
          class="transition-[transform,opacity] duration-1000 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          "
        >
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <Sparkles :size="16" class="animate-pulse" />
            <span class="text-[10px] font-black uppercase tracking-[0.2em]"
              >Partner Digital Terpercaya</span
            >
          </div>

          <h1
            class="text-4xl md:text-6xl font-black leading-[1.1] mb-8 text-text-main tracking-tight"
          >
            Level Up Bisnis Lo <br />
            <span class="text-primary italic font-serif">Tanpa Ribet IT.</span>
          </h1>
        </div>

        <p
          class="text-text-main/70 text-lg md:text-xl mb-10 max-w-xl transition-[transform,opacity] duration-1000 delay-200 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          "
        >
          <span class="font-bold text-text-main">OneTem</span> bantu startup dan
          UMKM punya website, aplikasi, hingga sistem otomatis yang bikin
          operasional makin sat-set dan jualan makin meningkat.
        </p>

        <div
          class="flex flex-wrap gap-4 transition-[transform,opacity] duration-1000 delay-400 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          "
        >
          <ButtonCTA :href="`https://wa.me/${whatsapp}`" :external="true">
            <MessageCircleMore class="size-5 mr-2" />
            Konsultasi Gratis
          </ButtonCTA>

          <ButtonCTA href="/portfolio" :isPrimary="false">
            Lihat Hasil Kerja
          </ButtonCTA>
        </div>
      </div>

      <div
        class="relative transition-[transform,opacity] duration-1200 delay-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        :class="
          isVisible
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-20 scale-90'
        "
      >
        <div
          class="relative bg-bg-main rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-primary/5 p-2 overflow-hidden"
        >
          <div class="bg-secondary rounded-4xl p-6 min-h-75">
            <div class="flex items-center justify-between mb-8">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-primary/20"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-primary/20"></div>
              </div>
              <div class="h-2 w-24 bg-primary/10 rounded-full"></div>
            </div>

            <div class="space-y-4">
              <div
                class="h-12 w-full bg-bg-main rounded-2xl flex items-center px-4 gap-3"
              >
                <div
                  class="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <CheckCircle2 :size="14" class="text-primary" />
                </div>
                <div class="h-2 w-32 bg-primary/5 rounded-full"></div>
              </div>
              <div
                class="h-12 w-[90%] bg-bg-main rounded-2xl flex items-center px-4 gap-3"
              >
                <div
                  class="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <CheckCircle2 :size="14" class="text-primary" />
                </div>
                <div class="h-2 w-24 bg-primary/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-4xl shadow-xl transition-transform duration-1000 delay-700 group hover:-translate-y-2"
          :class="
            isVisible ? 'translate-y-0 scale-100' : 'translate-y-10 scale-50'
          "
        >
          <TrendingUp :size="24" stroke-width="3" />
          <p class="text-[10px] font-black uppercase mt-2 tracking-widest">
            Growth
          </p>
        </div>

        <div
          class="absolute -bottom-10 -left-10 bg-bg-main border border-primary/10 p-5 rounded-3xl shadow-xl flex items-center gap-4 transition-transform duration-1000 delay-1000"
          :class="
            isVisible ? 'translate-y-0 scale-100' : 'translate-y-10 scale-50'
          "
        >
          <div
            class="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center"
          >
            <Sparkles :size="20" class="text-primary" />
          </div>
          <div>
            <p
              class="text-[10px] font-black text-primary uppercase tracking-[0.2em]"
            >
              Solution
            </p>
            <p class="text-xs font-bold text-text-main">Custom & Scalable</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

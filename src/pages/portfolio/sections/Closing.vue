<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";
import { ArrowRight } from "lucide-vue-next";

const { target: _target, isVisible } = useElementObserver();

const workflow = ["Paham Masalah", "Cari Solusi", "Deliver dengan Rapi"];
</script>

<template>
  <section
    ref="_target"
    class="relative py-24 md:py-32 bg-bg-main overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 order-2 lg:order-1">
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2"
          >
            <template v-for="(step, index) in workflow" :key="index">
              <div
                class="px-6 py-4 rounded-2xl bg-secondary border border-primary/5 transition-[transform,opacity] duration-1000"
                :class="
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                "
                :style="{ transitionDelay: `${index * 200}ms` }"
              >
                <span
                  class="text-sm font-black text-text-main tracking-tight uppercase"
                  >{{ step }}</span
                >
              </div>

              <ArrowRight
                v-if="index < workflow.length - 1"
                class="hidden sm:block text-primary/30 transition-opacity duration-1000"
                :class="isVisible ? 'opacity-100' : 'opacity-0'"
                :style="{ transitionDelay: `${index * 200 + 100}ms` }"
                :size="20"
              />
            </template>
          </div>
        </div>

        <div class="lg:col-span-5 order-1 lg:order-2">
          <div
            class="transition-[transform,opacity] duration-1000 delay-500 ease-out"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            "
          >
            <h2
              class="text-2xl md:text-3xl font-black text-text-main mb-6 tracking-tight"
            >
              Pendekatan yang
              <span class="text-primary italic font-serif">Konsisten.</span>
            </h2>
            <p class="text-lg text-text-main/70 leading-relaxed">
              Kami percaya bahwa
              <span class="text-text-main font-semibold"
                >kolaborasi yang baik</span
              >
              akan selalu menghasilkan solusi digital yang relevan dan berdampak
              jangka panjang bagi bisnis Anda.
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-20 pt-10 border-t border-secondary text-center transition-[transform,opacity] duration-1000 delay-1000"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <p
          class="text-[10px] font-black tracking-[0.5em] text-primary uppercase"
        >
          Build for the future with OneTem
        </p>
      </div>
    </div>

    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"
    ></div>
  </section>
</template>

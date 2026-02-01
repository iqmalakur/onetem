<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";
import { Briefcase } from "lucide-vue-next";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="relative pt-32 pb-16 bg-bg-main overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div
        class="flex items-center gap-4 mb-8 transition-all duration-1000"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <div class="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Briefcase :size="20" stroke-width="2.5" />
        </div>
        <span class="text-xs font-black tracking-[0.3em] text-primary uppercase"
          >Our Showcase</span
        >
      </div>

      <div class="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
        <div class="lg:col-span-8">
          <h1
            class="text-4xl md:text-6xl font-black text-text-main tracking-tight leading-[1.1] transition-all duration-800"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            "
          >
            Implementasi Nyata <br />
            <span class="text-primary italic font-serif"
              >Solusi Digital Kami.</span
            >
          </h1>
        </div>

        <div class="lg:col-span-4 pb-2">
          <div
            class="h-0.5 w-12 bg-primary mb-6 transition-all duration-1000 delay-500"
            :class="isVisible ? 'w-24' : 'w-0'"
          ></div>
          <p
            class="text-lg text-text-main/60 leading-relaxed transition-all duration-800"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            "
          >
            Melalui setiap portofolio, kami menunjukkan bagaimana ide diolah
            melalui kolaborasi dan strategi yang matang.
          </p>
        </div>
      </div>

      <div
        class="max-w-3xl mt-12 transition-all duration-1000 delay-900"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        "
      >
        <p class="text-xl text-text-main/80 leading-relaxed font-medium">
          Kami menghasilkan solusi digital yang mampu memberikan
          <span class="text-text-main border-b-2 border-primary/20"
            >nilai nyata</span
          >
          serta mendukung pertumbuhan dan kebutuhan bisnis klien secara
          berkelanjutan.
        </p>
      </div>
    </div>

    <div
      class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none"
    ></div>
  </section>
</template>

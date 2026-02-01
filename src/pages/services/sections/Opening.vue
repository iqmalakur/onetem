<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="max-w-6xl mx-auto px-6 mb-32 transition-all duration-1000 ease-out"
    :class="isVisible ? 'opacity-100' : 'opacity-0'"
  >
    <div class="max-w-3xl space-y-6">
      <h1
        class="text-4xl md:text-5xl font-bold tracking-tight text-text-main transition-all duration-1000 delay-100"
        :class="
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
        "
      >
        Solusi Digital yang Dibangun Sesuai
        <span class="relative inline-block text-primary">
          Kebutuhan Bisnis
          <span
            class="absolute bottom-1 left-0 w-full h-1.5 bg-primary/20 transition-all duration-1000 delay-700"
            :class="isVisible ? 'scale-x-100' : 'scale-x-0'"
            style="transform-origin: left"
          ></span>
        </span>
        Anda
      </h1>

      <p
        class="text-lg leading-relaxed text-text-main/70 transition-all duration-1000 delay-300"
        :class="
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        "
      >
        Setiap bisnis punya tantangan yang berbeda. Karena itu,
        <span class="font-semibold text-text-main">OneTem</span> tidak
        menawarkan solusi instan yang sama untuk semua. Kami berkolaborasi untuk
        merancang solusi digital yang relevan, fungsional, dan siap mendukung
        pertumbuhan bisnis.
      </p>

      <div
        class="h-1 bg-secondary rounded-full transition-all duration-1000 delay-500"
        :class="isVisible ? 'w-24' : 'w-0'"
      ></div>
    </div>
  </section>
</template>

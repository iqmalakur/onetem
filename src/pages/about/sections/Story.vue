<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="relative py-24 md:py-32 bg-secondary transition-colors duration-700 overflow-hidden"
  >
    <div
      class="absolute inset-0 opacity-[0.4] pointer-events-none transition-opacity duration-1000"
      :class="isVisible ? 'opacity-40' : 'opacity-0'"
      style="
        background-image: radial-gradient(
          var(--color-primary) 0.5px,
          transparent 0.5px
        );
        background-size: 24px 24px;
      "
    ></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div class="md:col-span-4 md:sticky md:top-32">
          <div
            class="transition-all duration-1000 ease-out"
            :class="
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            "
          >
            <h2
              class="text-3xl md:text-4xl font-black text-text-main tracking-tight leading-tight"
            >
              Perjalanan <br />
              <span class="text-primary italic font-serif">Kami.</span>
            </h2>

            <div class="mt-8 flex items-center gap-4">
              <div class="h-0.5 bg-text-main/10 flex-1 overflow-hidden">
                <div
                  class="h-full bg-primary transition-all duration-1000 delay-500"
                  :class="isVisible ? 'w-full' : 'w-0'"
                ></div>
              </div>
              <span
                class="text-[10px] font-black tracking-widest text-primary uppercase"
                >Est. 2025</span
              >
            </div>
          </div>
        </div>

        <div class="md:col-span-8 space-y-12">
          <div
            class="transition-all duration-1000 delay-300 ease-out"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            "
          >
            <p class="text-xl md:text-2xl text-text-main/80 leading-relaxed">
              OneTem dibentuk dari kebutuhan akan wadah kolektif untuk
              <span
                class="text-text-main font-bold border-b-2 border-primary/20"
                >belajar, bertumbuh, dan berkarya</span
              >. Kami percaya talenta hebat membutuhkan ekosistem yang tepat
              untuk menghasilkan dampak nyata.
            </p>
          </div>

          <div
            class="group relative p-8 md:p-10 rounded-4xl bg-bg-main shadow-2xl shadow-primary/5 border border-primary/5 transition-all duration-1000 delay-500"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            "
          >
            <div class="flex flex-col sm:flex-row gap-8">
              <div class="flex sm:flex-col items-center gap-4">
                <div
                  class="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20"
                >
                  <span class="text-xl font-black tracking-tighter">26</span>
                </div>
                <div
                  class="hidden sm:block w-px h-full min-h-20 bg-linear-to-b from-primary/20 to-transparent"
                ></div>
              </div>

              <div class="flex-1">
                <div class="inline-flex items-center gap-2 mb-4">
                  <span
                    class="w-2 h-2 rounded-full bg-primary animate-pulse"
                  ></span>
                  <span
                    class="text-xs font-bold text-primary uppercase tracking-[0.2em]"
                    >Official Rumination</span
                  >
                </div>

                <h3
                  class="text-2xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors duration-300"
                >
                  Desember 2025
                </h3>

                <p class="text-text-main/70 leading-relaxed italic text-lg">
                  "Dirumuskan oleh enam pendiri dengan latar belakang lintas
                  disiplin: Informatika, Marketing, dan DKV. Keberagaman inilah
                  yang menjadi DNA utama kami."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

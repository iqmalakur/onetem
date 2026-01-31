<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="relative py-24 md:py-32 bg-secondary transition-colors duration-700"
  >
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="mb-16 md:text-center">
        <h2
          class="text-3xl md:text-5xl font-black text-text-main tracking-tight mb-6 transition-all duration-1000 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          "
        >
          Siapa <span class="text-primary italic font-serif">Kami?</span>
        </h2>
        <div
          class="h-1.5 w-20 bg-primary md:mx-auto rounded-full transition-all duration-1000 delay-300"
          :class="isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'"
        ></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-stretch">
        <div
          class="group relative p-8 md:p-12 rounded-[2.5rem] bg-bg-main transition-all duration-1000 delay-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
          :class="
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          "
        >
          <div class="mb-8 flex items-center gap-4">
            <div
              class="p-3 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-black text-text-main uppercase tracking-widest"
            >
              Internal
            </h3>
          </div>
          <p class="text-lg text-text-main/70 leading-relaxed">
            OneTem adalah ruang kolaboratif untuk
            <span class="text-text-main font-semibold"
              >pengembangan talenta digital</span
            >. Tempat kami belajar bersama, berbagi pengalaman, dan membangun
            peluang secara berkelanjutan bagi setiap anggota di dalamnya.
          </p>
        </div>

        <div
          class="group relative p-8 md:p-12 rounded-[2.5rem] bg-bg-main transition-all duration-1000 delay-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
          :class="
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          "
        >
          <div class="mb-8 flex items-center gap-4">
            <div
              class="p-3 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3
              class="text-xl font-black text-text-main uppercase tracking-widest"
            >
              Eksternal
            </h3>
          </div>
          <p class="text-lg text-text-main/70 leading-relaxed">
            Mitra penyedia
            <span class="text-text-main font-semibold"
              >solusi IT end-to-end</span
            >. Mulai dari pengembangan website, aplikasi mobile, hingga chatbot
            yang dirancang khusus untuk membantu bisnis beradaptasi di era
            digital.
          </p>
        </div>
      </div>

      <div
        class="mt-16 text-center transition-all duration-1000 delay-1000"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <div
          class="inline-block px-8 py-6 border-2 border-primary/10 rounded-3xl group hover:border-primary/30 transition-all duration-500"
        >
          <p
            class="text-xl md:text-2xl font-bold text-text-main tracking-tight"
          >
            Kami tidak hanya mengerjakan proyek, <br class="md:hidden" />
            <span class="text-primary italic font-serif"
              >tetapi membangun kerja sama jangka panjang.</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

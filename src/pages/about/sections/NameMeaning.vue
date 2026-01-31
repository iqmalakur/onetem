<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    class="relative py-24 md:py-32 bg-bg-main transition-colors duration-700 overflow-hidden"
  >
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <header class="max-w-3xl mb-16">
        <h2
          class="text-3xl md:text-5xl font-black text-text-main tracking-tight mb-6 transition-all duration-1000 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          Filosofi Nama
          <span class="text-primary italic font-serif">OneTem.</span>
        </h2>
        <p
          class="text-xl text-text-main/70 leading-relaxed transition-all duration-1000 delay-200"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          Sebuah representasi dari semangat kebersamaan dan kesatuan tujuan yang
          kami bangun sejak awal.
        </p>
      </header>

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div
          class="group p-10 rounded-[2.5rem] bg-secondary border border-transparent hover:border-primary/10 transition-all duration-700 delay-400"
          :class="
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-12'
          "
        >
          <div
            class="text-6xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors"
          >
            01
          </div>
          <h3 class="text-4xl font-black text-text-main mb-4 tracking-tighter">
            One.
          </h3>
          <p class="text-lg text-text-main/70 leading-relaxed">
            Melambangkan
            <span class="text-text-main font-bold">satu visi</span> dan arah
            yang sama. Fokus kami tidak terbagi dalam memberikan dampak yang
            signifikan bagi setiap partner.
          </p>
        </div>

        <div
          class="group p-10 rounded-[2.5rem] bg-secondary border border-transparent hover:border-primary/10 transition-all duration-700 delay-600"
          :class="
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          "
        >
          <div
            class="text-6xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors"
          >
            02
          </div>
          <h3 class="text-4xl font-black text-text-main mb-4 tracking-tighter">
            Tem.
          </h3>
          <p class="text-lg text-text-main/70 leading-relaxed">
            Berarti
            <span class="text-text-main font-bold">tempat</span> sekaligus
            permainan kata dari <span class="italic font-serif">team</span>.
            Ruang kolaboratif di mana ide-ide besar dieksekusi bersama.
          </p>
        </div>
      </div>

      <div
        class="relative p-10 md:p-12 rounded-[3rem] bg-primary text-white text-center transition-all duration-1000 delay-800"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <p
          class="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto"
        >
          "OneTem dimaknai sebagai satu tempat bagi individu dan bisnis dengan
          visi yang sama untuk
          <span
            class="font-black underline underline-offset-8 decoration-white/30"
            >tumbuh dan berkembang</span
          >
          bersama."
        </p>

        <div
          class="absolute inset-0 opacity-10 pointer-events-none"
          style="
            background-image: repeating-linear-gradient(
              45deg,
              #fff 0,
              #fff 1px,
              transparent 0,
              transparent 50%
            );
            background-size: 20px 20px;
          "
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
</script>

<template>
  <section class="py-24 bg-secondary">
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-3xl">
        <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Masih ragu solusi digital apa yang paling cocok buat bisnis lo?
        </h3>

        <p class="text-gray-600 text-lg mb-6">
          Nggak masalah. Kita bisa mulai dari ngobrol dulu.
        </p>

        <p class="text-gray-600 text-lg mb-10">
          Kami siap bantu lo nge-breakdown kebutuhan bisnis dan cari solusi yang
          paling masuk akal,
          <span class="font-medium text-gray-800"> tanpa ribet. </span>
        </p>

        <ButtonCTA :href="`https://wa.me/${whatsapp}`" :external="true">
          Konsultasi Gratis Sekarang
        </ButtonCTA>
      </div>
    </div>
  </section>
</template>

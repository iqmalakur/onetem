<script setup lang="ts">
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
</script>

<template>
  <section class="pt-32 pb-24 bg-secondary">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div>
        <h1 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Your End-to-End <br />
          <span class="text-primary">Digital Solution Partner</span>
          <br />
          Satu Partner untuk Semua Kebutuhan Digital Bisnis Lo
        </h1>

        <p class="text-gray-600 text-lg mb-10 max-w-xl">
          <span class="font-semibold">OneTem</span> adalah partner IT untuk
          startup dan UMKM yang ingin naik level lewat website, aplikasi, dan
          solusi digital yang benar-benar kepakai — bukan cuma bagus di
          tampilan.
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4">
          <ButtonCTA :href="whatsapp" :external="true"> WhatsApp </ButtonCTA>

          <ButtonCTA href="/services" :isPrimary="false">
            Lihat Layanan
          </ButtonCTA>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="hidden md:flex justify-center">
        <div
          class="w-full h-80 bg-white rounded-2xl shadow flex items-center justify-center text-gray-400"
        >
          Illustration / Mockup
        </div>
      </div>
    </div>
  </section>
</template>

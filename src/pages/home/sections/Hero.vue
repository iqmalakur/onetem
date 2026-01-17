<script setup lang="ts">
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
import { MessageCircleMore } from "lucide-vue-next";
</script>

<template>
  <section class="pt-28 pb-24 bg-secondary px-10">
    <div class="grid md:grid-cols-2">
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
          <ButtonCTA :href="`https://wa.me/${whatsapp}`" :external="true">
            <MessageCircleMore class="size-5 mr-2" />
            Konsultasi Gratis
          </ButtonCTA>

          <ButtonCTA href="/services" :isPrimary="false">
            Lihat Layanan
          </ButtonCTA>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="hidden md:flex md:justify-center">
        <div
          class="relative w-full max-w-md aspect-square bg-secondary/50 backdrop-blur-xl border border-main/10 rounded-3xl shadow-2xl p-6 flex flex-col gap-4 transform transition hover:scale-[1.02] duration-500 z-10"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="flex gap-2">
              <div class="size-3 rounded-full bg-red-400"></div>
              <div class="size-3 rounded-full bg-yellow-400"></div>
              <div class="size-3 rounded-full bg-green-400"></div>
            </div>
            <div class="h-2 w-20 bg-main/10 rounded-full"></div>
          </div>
          Illustration / Mockup
        </div>
      </div>
    </div>
  </section>
</template>

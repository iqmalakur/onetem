<script setup lang="ts">
import ButtonCTA from "@/components/button/ButtonCTA.vue";
</script>

<template>
  <section id="portfolio" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="max-w-3xl mb-16">
        <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Beberapa Project yang Pernah
          <span class="text-primary">Kami Kerjakan</span>
        </h3>

        <p class="text-gray-600 text-lg">
          Kami telah mengerjakan berbagai project digital, baik untuk kebutuhan
          internal maupun kolaborasi, mulai dari website hingga solusi aplikasi
          berbasis kebutuhan bisnis.
        </p>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        <!-- Item 1 -->
        <div
          class="group border rounded-2xl overflow-hidden hover:shadow-sm transition"
        >
          <div
            class="h-48 bg-gray-100 flex items-center justify-center text-gray-400"
          >
            Project Preview
          </div>
          <div class="p-5">
            <h4 class="font-semibold mb-1">Company Profile Website</h4>
            <p class="text-sm text-gray-600">
              Website profesional untuk meningkatkan kredibilitas bisnis.
            </p>
          </div>
        </div>

        <!-- Item 2 -->
        <div
          class="group border rounded-2xl overflow-hidden hover:shadow-sm transition"
        >
          <div
            class="h-48 bg-gray-100 flex items-center justify-center text-gray-400"
          >
            Project Preview
          </div>
          <div class="p-5">
            <h4 class="font-semibold mb-1">Business Management App</h4>
            <p class="text-sm text-gray-600">
              Aplikasi internal untuk merapikan operasional dan workflow tim.
            </p>
          </div>
        </div>

        <!-- Item 3 -->
        <div
          class="group border rounded-2xl overflow-hidden hover:shadow-sm transition"
        >
          <div
            class="h-48 bg-gray-100 flex items-center justify-center text-gray-400"
          >
            Project Preview
          </div>
          <div class="p-5">
            <h4 class="font-semibold mb-1">Chatbot & Automation</h4>
            <p class="text-sm text-gray-600">
              Sistem auto-response untuk meningkatkan kecepatan layanan
              customer.
            </p>
          </div>
        </div>
      </div>

      <!-- Approach -->
      <div class="max-w-3xl mb-12">
        <p class="text-gray-700 text-lg">
          Setiap project kami kerjakan dengan pendekatan yang sama:
        </p>

        <p class="mt-2 font-medium">
          paham masalah →
          <span class="text-primary">cari solusi</span> → deliver dengan rapi
        </p>
      </div>

      <!-- CTA -->
      <div>
        <ButtonCTA href="/portfolio" :isPrimary="false">
          Lihat Portfolio Kami
        </ButtonCTA>
      </div>
    </div>
  </section>
</template>

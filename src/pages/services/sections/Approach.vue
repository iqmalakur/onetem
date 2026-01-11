<script setup lang="ts">
import ButtonCTA from "@/components/button/ButtonCTA.vue";
import { whatsapp } from "@/data/social";
</script>

<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-2xl font-semibold mb-6">Cara Kami Bekerja</h2>

      <p class="text-gray-600 mb-8 max-w-3xl">
        Kami percaya hasil terbaik lahir dari kolaborasi yang baik. Setiap
        layanan kami kerjakan dengan pendekatan:
      </p>

      <ul class="list-disc list-inside text-gray-600 space-y-2 mb-12">
        <li>Diskusi dan analisis kebutuhan</li>
        <li>Perencanaan solusi yang realistis</li>
        <li>Pengembangan yang terstruktur</li>
        <li>Testing dan evaluasi</li>
        <li>Support berkelanjutan</li>
      </ul>

      <div class="max-w-2xl">
        <p class="text-gray-700 mb-4">
          Bingung menentukan solusi digital yang paling cocok untuk bisnis Anda?
        </p>
        <p class="text-gray-600 mb-8">
          Tenang. Anda tidak harus langsung tahu semuanya. Kami siap membantu
          Anda memetakan kebutuhan dan menemukan solusi terbaik.
        </p>

        <ButtonCTA :href="whatsapp" :isPrimary="true">
          Konsultasi Gratis dengan Tim OneTem
        </ButtonCTA>
      </div>
    </div>
  </section>
</template>

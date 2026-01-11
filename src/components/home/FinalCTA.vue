<script setup lang="ts">
import ButtonCTA from "../button/ButtonCTA.vue";
</script>

<template>
  <section class="py-28 bg-blue-600 text-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h3 class="text-3xl md:text-4xl font-bold mb-6">
        Siap Naik Level Lewat Solusi Digital yang Tepat?
      </h3>

      <p class="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
        Saatnya punya partner IT yang satu visi dengan bisnis lo. Bangun solusi
        digital bareng <span class="font-semibold">OneTem</span>.
      </p>

      <ButtonCTA
        href="https://wa.me/628123456789"
        :external="true"
        :isPrimary="false"
      >
        Hubungi Tim OneTem Sekarang
      </ButtonCTA>
    </div>
  </section>
</template>

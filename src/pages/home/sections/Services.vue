<script setup lang="ts">
import ButtonCTA from "@/components/button/ButtonCTA.vue";
</script>

<template>
  <section id="services" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="max-w-3xl mb-14">
        <h3 class="text-3xl md:text-4xl font-bold mb-4">
          Apa yang Bisa <span class="text-primary">Kami Bantu?</span>
        </h3>
        <p class="text-gray-600 text-lg">
          Kami fokus ke solusi digital yang relevan, fungsional, dan benar-benar
          kepakai untuk kebutuhan bisnis lo.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 gap-8">
        <!-- Website Development -->
        <div class="p-8 border rounded-2xl hover:shadow-sm transition">
          <div class="text-3xl mb-4">🌐</div>
          <h4 class="text-xl font-semibold mb-3">Website Development</h4>
          <p class="text-gray-600">
            Bangun website profesional yang nggak cuma kelihatan keren, tapi
            juga ningkatin kredibilitas dan kepercayaan customer.
          </p>
        </div>

        <!-- Mobile App -->
        <div class="p-8 border rounded-2xl hover:shadow-sm transition">
          <div class="text-3xl mb-4">📱</div>
          <h4 class="text-xl font-semibold mb-3">
            Mobile App Development (Android)
          </h4>
          <p class="text-gray-600">
            Aplikasi yang dirancang sesuai alur bisnis lo, bikin operasional
            jadi lebih rapi dan efisien.
          </p>
        </div>

        <!-- Chatbot -->
        <div class="p-8 border rounded-2xl hover:shadow-sm transition">
          <div class="text-3xl mb-4">🤖</div>
          <h4 class="text-xl font-semibold mb-3">Chatbot & Automation</h4>
          <p class="text-gray-600">
            Bantu bisnis lo tetap responsif 24/7 tanpa harus nambah tenaga
            manual.
          </p>
        </div>

        <!-- Custom Solution -->
        <div class="p-8 border rounded-2xl hover:shadow-sm transition">
          <div class="text-3xl mb-4">🧩</div>
          <h4 class="text-xl font-semibold mb-3">Custom Digital Solution</h4>
          <p class="text-gray-600">
            Setiap bisnis beda. Kami siap bantu bikin solusi digital yang sesuai
            kebutuhan dan tahap pertumbuhan lo.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16">
        <ButtonCTA href="/services" :isPrimary="false">
          Lihat Semua Layanan
        </ButtonCTA>
      </div>
    </div>
  </section>
</template>

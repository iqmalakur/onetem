<script setup lang="ts">
import { portfolios } from "@/data/portfolios";
</script>

<template>
  <div class="grid gap-10 md:grid-cols-2">
    <div
      v-for="(item, index) in portfolios"
      :key="index"
      class="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
    >
      <!-- Image / Blank Box -->
      <div
        class="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm"
      >
        Project Preview
      </div>

      <!-- Content -->
      <div class="p-6">
        <span class="text-sm text-blue-600 font-medium">
          {{ item.category }}
        </span>

        <h3 class="text-xl font-semibold mt-2 mb-3">
          {{ item.title }}
        </h3>

        <p class="text-gray-600 text-sm leading-relaxed mb-5">
          {{ item.description }}
        </p>

        <!-- Link -->
        <a
          :href="item.link"
          target="_blank"
          class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
        >
          Lihat Detail Project →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from "@/data/services";
</script>

<template>
  <section
    v-for="(service, index) in services"
    :id="service.id"
    :key="index"
    class="max-w-6xl mx-auto px-6 mb-24"
  >
    <h2 class="text-2xl font-semibold mb-4">
      {{ service.title }}
    </h2>

    <p class="text-gray-700 font-medium mb-6">
      {{ service.subtitle }}
    </p>

    <div class="grid md:grid-cols-2 gap-10">
      <!-- Left -->
      <div>
        <p class="text-gray-600 mb-4">
          {{ service.description }}
        </p>

        <ul
          v-if="service.leftItems?.length"
          class="list-disc list-inside text-gray-600 space-y-2"
        >
          <li v-for="(item, i) in service.leftItems" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Right -->
      <div :class="!service.rightItems ? 'flex items-center' : ''">
        <p v-if="service.rightTitle" class="font-medium mb-3">
          {{ service.rightTitle }}
        </p>

        <ul
          v-if="service.rightItems?.length"
          class="list-disc list-inside text-gray-600 space-y-2"
        >
          <li v-for="(item, i) in service.rightItems" :key="i">
            {{ item }}
          </li>
        </ul>

        <p v-if="service.rightContent" class="text-gray-600">
          {{ service.rightContent }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from "@/data/services";
import ServiceItem from "./ServiceItem.vue";
</script>

<template>
  <div class="space-y-32 mb-32 overflow-hidden">
    <ServiceItem
      v-for="(service, index) in services"
      :key="service.id"
      :service="service"
      :index="index"
    />
  </div>
</template>

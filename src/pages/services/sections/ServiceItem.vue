<script setup lang="ts">
import { useElementObserver } from "@/composables/useElementObserver";
import ServiceList from "./ServiceList.vue";

defineProps<{
  service: any;
  index: number;
}>();

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section
    ref="_target"
    :id="service.id"
    class="max-w-6xl mx-auto px-6 group transition-all duration-700 ease-in-out"
    :class="[
      isVisible
        ? 'opacity-100 translate-y-0 scale-100 blur-0'
        : 'opacity-0 translate-y-12 scale-95 blur-sm',
    ]"
  >
    <div
      class="mb-12 transition-all duration-700 delay-100"
      :class="isVisible ? 'translate-x-0' : '-translate-x-10'"
    >
      <h2
        class="text-3xl font-bold mb-4 text-text-main group-hover:text-primary transition-colors duration-500"
      >
        {{ service.title }}
      </h2>
      <p class="text-lg font-medium text-text-main/60 italic">
        {{ service.subtitle }}
      </p>
    </div>

    <div
      class="grid md:grid-cols-2 gap-12 p-8 rounded-2xl border border-secondary bg-bg-main shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 transform"
    >
      <div class="space-y-6">
        <p class="leading-relaxed text-text-main/80 text-lg">
          {{ service.description }}
        </p>
        <ServiceList v-if="service.leftItems" :items="service.leftItems" />
      </div>

      <div class="space-y-6 flex flex-col justify-center">
        <ServiceList
          v-if="service.rightItems"
          :title="service.rightTitle"
          :items="service.rightItems"
        />

        <p
          v-if="service.rightContent"
          class="p-4 rounded-lg bg-secondary/50 text-text-main/80 border-l-4 border-primary transition-all duration-700 delay-200 transform"
          :class="
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          "
        >
          {{ service.rightContent }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolios } from "@/data/portfolios";
import { useElementObserver } from "@/composables/useElementObserver";
import ProjectCard from "./ProjectCard.vue";

const { target: _target, isVisible } = useElementObserver();
</script>

<template>
  <section ref="_target" class="py-24 bg-bg-main">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-8 md:grid-cols-2">
        <ProjectCard
          v-for="(item, index) in portfolios"
          :key="index"
          v-bind="item"
          :index="index"
          :is-visible="isVisible"
        />
      </div>

      <div
        v-if="!portfolios.length"
        class="text-center py-20 border-2 border-dashed border-secondary rounded-[3rem]"
      >
        <p class="text-text-main/40 font-medium">
          Belum ada proyek untuk ditampilkan.
        </p>
      </div>
    </div>
  </section>
</template>

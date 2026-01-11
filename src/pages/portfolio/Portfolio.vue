<script setup lang="ts">
import Closing from "./sections/Closing.vue";
import Opening from "./sections/Opening.vue";
import Projects from "./sections/Projects.vue";
</script>

<template>
  <main class="pt-28 pb-20">
    <section class="max-w-6xl mx-auto px-6">
      <Opening />
      <Projects />
      <Closing />
    </section>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  items: string[];
}>();
</script>

<template>
  <div>
    <h4 v-if="title" class="font-semibold mb-3 text-text-main">{{ title }}</h4>
    <ul class="space-y-3">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="flex items-start gap-3 text-text-main/80 group"
      >
        <span
          class="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0 transition-transform group-hover:scale-150"
        />
        <span class="leading-relaxed">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

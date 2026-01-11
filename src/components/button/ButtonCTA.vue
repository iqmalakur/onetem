<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href: string;
    isPrimary?: boolean;
    external?: boolean;
  }>(),
  {
    isPrimary: true,
    external: false,
  }
);
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center px-7 py-4 rounded-lg text-sm font-medium transition"
    :class="
      isPrimary
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'border bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100'
    "
  >
    <slot />
  </a>
</template>

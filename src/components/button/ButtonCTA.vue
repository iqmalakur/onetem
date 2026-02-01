<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = withDefaults(
  defineProps<{
    href: string;
    isPrimary?: boolean;
    external?: boolean;
    block?: boolean;
  }>(),
  {
    isPrimary: true,
    external: false,
    block: false,
  },
);

const isExternalLink = computed(() => {
  if (props.external) return true;
  return (props.href || "").startsWith("http");
});

const componentType = computed(() => {
  return isExternalLink.value ? "a" : RouterLink;
});
</script>

<template>
  <component
    :is="componentType"
    :to="!isExternalLink ? href : undefined"
    :href="isExternalLink ? href : undefined"
    :target="isExternalLink ? '_blank' : undefined"
    :rel="isExternalLink ? 'noopener noreferrer' : undefined"
    class="inline-flex cursor-pointer items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[
      block ? 'w-full' : '',
      'focus:ring-primary dark:focus:ring-offset-slate-900',

      isPrimary
        ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/30 hover:shadow-primary/50 border border-transparent'
        : 'bg-secondary text-main border border-main/10 hover:border-primary/50 hover:text-primary hover:bg-secondary-hover',
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { navigation } from "@/data/navigation";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Brand -->
      <h1 class="text-lg font-bold">OneTem</h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center space-x-6 text-sm">
        <li v-for="nav in navigation" :key="nav.title">
          <RouterLink
            :to="nav.href"
            class="text-gray-700 hover:text-primary-hover transition"
          >
            {{ nav.title }}
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile Button -->
      <button
        class="md:hidden cursor-pointer flex items-center justify-center"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-t shadow-sm">
      <ul class="flex flex-col px-6 py-4 space-y-4 text-sm">
        <li v-for="nav in navigation" :key="nav.title">
          <RouterLink
            :to="nav.href"
            class="text-gray-700 hover:text-primary-hover transition"
            @click="isOpen = false"
          >
            {{ nav.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

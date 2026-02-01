<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { navigation } from "@/data/navigation";
import { useThemeStore } from "@/stores/theme";
import onetem from "@/assets/onetem.png";

const themeStore = useThemeStore();
const isOpen = ref(false);
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 border-b border-secondary bg-main/80 backdrop-blur-md transition-colors duration-300"
  >
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
      <RouterLink to="/" class="flex items-center gap-2 group">
        <div class="relative w-10 h-10 overflow-hidden rounded-lg">
          <img
            :src="onetem"
            alt="OneTem Logo"
            class="w-full h-full object-contain"
          />
        </div>
        <h1
          class="text-xl font-bold tracking-tight text-main group-hover:text-primary transition-colors"
        >
          One<span class="text-primary">Tem</span>
        </h1>
      </RouterLink>

      <div class="hidden md:flex items-center gap-8">
        <ul class="flex items-center gap-6 text-sm font-medium">
          <li v-for="nav in navigation" :key="nav.title">
            <RouterLink
              :to="nav.href"
              class="text-main/70 hover:text-primary transition-colors py-2 relative group"
              active-class="!text-primary font-semibold"
            >
              {{ nav.title }}
              <span
                class="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              ></span>
            </RouterLink>
          </li>
        </ul>

        <div class="h-6 w-px bg-secondary"></div>

        <button
          @click="themeStore.toggleTheme()"
          class="p-2 rounded-full bg-secondary text-main hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Toggle Dark Mode"
        >
          <svg
            v-if="themeStore.isDark"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>

      <div class="flex items-center gap-4 md:hidden">
        <button
          @click="themeStore.toggleTheme()"
          class="p-2 rounded-full text-main hover:bg-secondary transition"
        >
          <svg
            v-if="themeStore.isDark"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>

        <button
          class="p-2 -mr-2 text-main hover:text-primary transition"
          @click="isOpen = !isOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div
        v-show="isOpen"
        class="md:hidden border-t border-secondary bg-main shadow-lg"
      >
        <ul class="flex flex-col py-4 px-6 space-y-2">
          <li v-for="nav in navigation" :key="nav.title">
            <RouterLink
              :to="nav.href"
              class="block py-2 text-base font-medium text-main/80 hover:text-primary hover:bg-secondary/50 rounded-lg px-2 -mx-2 transition"
              active-class="!text-primary bg-primary/5"
              @click="isOpen = false"
            >
              {{ nav.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

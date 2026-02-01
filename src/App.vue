<script setup lang="ts">
import Footer from "@/components/layout/Footer.vue";
import Navbar from "@/components/layout/Navbar.vue";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useThemeStore } from "@/stores/theme"; // Import store

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme(); // Cek tema saat aplikasi dimuat
});
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

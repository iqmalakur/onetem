<script setup lang="ts">
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/layout/Navbar.vue";
</script>

<template>
  <div class="font-sans text-gray-800">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

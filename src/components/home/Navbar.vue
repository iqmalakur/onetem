<script setup lang="ts">
const menu = [
  { title: "Home", href: "#home" },
  { title: "About Us", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Contact", href: "#contact" },
];
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
    <nav class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <h1 class="text-lg font-bold">OneTem</h1>
      <ul class="flex space-x-6 text-sm">
        <li v-for="m in menu">
          <a :href="m.href" class="hover:text-blue-600">{{ m.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

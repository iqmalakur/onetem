<script setup lang="ts">
import FinalCTA from "./components/home/FinalCTA.vue";
import Footer from "./components/home/Footer.vue";
import Hero from "./components/home/Hero.vue";
import Navbar from "./components/home/Navbar.vue";
import Portfolio from "./components/home/Portfolio.vue";
import Problem from "./components/home/Problem.vue";
import Services from "./components/home/Services.vue";
import SoftCTA from "./components/home/SoftCTA.vue";
import Solution from "./components/home/Solution.vue";
import Why from "./components/home/Why.vue";
</script>

<template>
  <div class="font-sans text-gray-800">
    <Navbar />
    <Hero />
    <Problem />
    <Solution />
    <Services />
    <Why />
    <Portfolio />
    <SoftCTA />
    <FinalCTA />
    <Footer />
  </div>
</template>

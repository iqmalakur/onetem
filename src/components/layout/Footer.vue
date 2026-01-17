<script setup lang="ts">
import { RouterLink } from "vue-router";
import { navigation } from "@/data/navigation";
import { email, whatsapp } from "@/data/social";
</script>

<template>
  <footer
    class="bg-secondary pt-20 pb-10 transition-colors duration-300 font-sans"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid gap-12 md:grid-cols-4 mb-16">
        <div class="space-y-4">
          <RouterLink to="/" class="inline-block group">
            <h4
              class="text-2xl font-bold text-main group-hover:text-primary transition-colors"
            >
              One<span class="text-primary">Tem</span>
            </h4>
          </RouterLink>
          <p class="text-sm text-main/70 leading-relaxed max-w-xs">
            Partner digital untuk startup dan UMKM yang ingin tumbuh lewat
            solusi website, aplikasi, dan sistem digital yang relevan dan
            berdampak.
          </p>
        </div>

        <div>
          <h5 class="text-sm font-bold text-main uppercase tracking-wider mb-5">
            Layanan
          </h5>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                href="/services#website"
                class="text-main/70 hover:text-primary transition-colors block py-1"
              >
                Website Development
              </a>
            </li>
            <li>
              <a
                href="/services#mobile-app"
                class="text-main/70 hover:text-primary transition-colors block py-1"
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a
                href="/services#automation"
                class="text-main/70 hover:text-primary transition-colors block py-1"
              >
                Chatbot & Automation
              </a>
            </li>
            <li>
              <a
                href="/services#custom"
                class="text-main/70 hover:text-primary transition-colors block py-1"
              >
                Custom Digital Solution
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="text-sm font-bold text-main uppercase tracking-wider mb-5">
            Perusahaan
          </h5>
          <ul class="space-y-3 text-sm">
            <li v-for="nav in navigation" :key="nav.title">
              <RouterLink
                :to="nav.href"
                class="text-main/70 hover:text-primary transition-colors block py-1"
              >
                {{ nav.title }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h5 class="text-sm font-bold text-main uppercase tracking-wider mb-5">
            Hubungi Kami
          </h5>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <svg
                class="w-5 h-5 text-primary mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <a
                :href="`mailto:${email}`"
                class="text-main/70 hover:text-primary transition-colors"
              >
                {{ email }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <svg
                class="w-5 h-5 text-primary mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <a
                :href="`https://wa.me/${whatsapp}`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-main/70 hover:text-primary transition-colors"
              >
                Chat WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-main/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-main/50"
      >
        <p>© {{ new Date().getFullYear() }} OneTem. All rights reserved.</p>
        <p class="flex items-center gap-1">
          Built with <span class="text-red-500 animate-pulse">❤</span> for
          growing businesses.
        </p>
      </div>
    </div>
  </footer>
</template>

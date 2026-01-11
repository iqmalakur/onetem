<script setup lang="ts">
import { navigation } from "@/data/navigation";
import { email, whatsapp } from "@/data/social";
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <div class="grid gap-12 md:grid-cols-4">
        <!-- Brand -->
        <div>
          <h4 class="text-xl font-bold text-white mb-4">OneTem</h4>
          <p class="text-sm text-gray-400 leading-relaxed">
            Partner digital untuk startup dan UMKM yang ingin tumbuh lewat
            solusi website, aplikasi, dan sistem digital yang relevan dan
            berdampak.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h5 class="text-sm font-semibold text-white mb-4">Layanan</h5>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="/services#website" class="hover:text-white transition">
                Website Development
              </a>
            </li>
            <li>
              <a
                href="/services#mobile-app"
                class="hover:text-white transition"
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a
                href="/services#automation"
                class="hover:text-white transition"
              >
                Chatbot & Automation
              </a>
            </li>
            <li>
              <a href="/services#custom" class="hover:text-white transition">
                Custom Digital Solution
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h5 class="text-sm font-semibold text-white mb-4">Company</h5>
          <ul class="space-y-3 text-sm">
            <li v-for="nav in navigation">
              <a :href="nav.href" class="hover:text-white transition">
                {{ nav.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h5 class="text-sm font-semibold text-white mb-4">Hubungi Kami</h5>
          <ul class="space-y-3 text-sm">
            <li>
              <a :href="`mailto:${email}`" class="hover:text-white transition">
                {{ email }}
              </a>
            </li>
            <li>
              <a
                :href="`https://wa.me/${whatsapp}`"
                target="_blank"
                class="hover:text-white transition"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-gray-800 mt-16 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-gray-500">
          © {{ new Date().getFullYear() }} OneTem. All rights reserved.
        </p>

        <p class="text-gray-500">Built with care for growing businesses.</p>
      </div>
    </div>
  </footer>
</template>

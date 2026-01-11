<script setup lang="ts">
const portfolios = [
  {
    category: "Website Development",
    title: "Nama Website / Aplikasi",
    description:
      "Website profesional yang dikembangkan untuk meningkatkan kredibilitas bisnis, menyampaikan informasi dengan jelas, serta mendukung kebutuhan pemasaran digital klien.",
    image: "",
    link: "#",
  },
  {
    category: "Mobile App Development (Android)",
    title: "Nama Aplikasi",
    description:
      "Aplikasi Android yang dirancang sesuai alur bisnis klien untuk membantu operasional menjadi lebih rapi, efisien, dan mudah digunakan.",
    image: "",
    link: "#",
  },
  {
    category: "Chatbot & Automation",
    title: "Nama Solusi / Aplikasi",
    description:
      "Solusi chatbot dan automasi untuk membantu bisnis merespons pelanggan 24/7, mengurangi pekerjaan manual, dan meningkatkan kualitas layanan.",
    image: "",
    link: "#",
  },
  {
    category: "Custom Digital Solution",
    title: "Nama Solusi Digital",
    description:
      "Solusi digital kustom yang dibangun berdasarkan kebutuhan spesifik bisnis, dengan pendekatan strategis agar teknologi benar-benar memberi dampak nyata.",
    image: "",
    link: "#",
  },
];
</script>

<template>
  <main class="pt-28 pb-20">
    <section class="max-w-6xl mx-auto px-6">
      <!-- Opening -->
      <div class="max-w-3xl mb-16">
        <h1 class="text-3xl md:text-4xl font-bold mb-5">
          Implementasi Nyata dari Solusi Digital Kami
        </h1>
        <p class="text-gray-600 leading-relaxed">
          Melalui setiap portofolio, kami menunjukkan bagaimana ide diolah
          melalui kolaborasi dan strategi yang matang sehingga menghasilkan
          solusi digital yang mampu memberikan nilai nyata serta mendukung
          pertumbuhan dan kebutuhan bisnis klien.
        </p>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid gap-10 md:grid-cols-2">
        <div
          v-for="(item, index) in portfolios"
          :key="index"
          class="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
        >
          <!-- Image / Blank Box -->
          <div
            class="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm"
          >
            Project Preview
          </div>

          <!-- Content -->
          <div class="p-6">
            <span class="text-sm text-blue-600 font-medium">
              {{ item.category }}
            </span>

            <h3 class="text-xl font-semibold mt-2 mb-3">
              {{ item.title }}
            </h3>

            <p class="text-gray-600 text-sm leading-relaxed mb-5">
              {{ item.description }}
            </p>

            <!-- Link -->
            <a
              :href="item.link"
              target="_blank"
              class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
            >
              Lihat Detail Project →
            </a>
          </div>
        </div>
      </div>

      <!-- Closing -->
      <div class="max-w-3xl mt-20">
        <p class="text-gray-600 leading-relaxed">
          Setiap project kami kerjakan dengan pendekatan yang sama:
          <strong>paham masalah → cari solusi → deliver dengan rapi</strong>.
          Kami percaya bahwa kolaborasi yang baik akan selalu menghasilkan
          solusi digital yang relevan dan berdampak jangka panjang.
        </p>
      </div>
    </section>
  </main>
</template>

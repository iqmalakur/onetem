import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  // --- STATE ---
  const isDark = ref(false);

  // --- ACTIONS ---

  // 1. Fungsi untuk update DOM (HTML class) & LocalStorage
  const applyTheme = () => {
    const html = document.documentElement;

    if (isDark.value) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // 2. Fungsi Toggle (Dipanggil oleh Tombol)
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    applyTheme();
  };

  // 3. Fungsi Inisialisasi (Dipanggil saat App start)
  const initTheme = () => {
    const userTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Prioritas: LocalStorage user > System Preference > Default Light
    if (userTheme === "dark" || (!userTheme && systemDark)) {
      isDark.value = true;
    } else {
      isDark.value = false;
    }

    // Terapkan langsung saat init
    applyTheme();
  };

  return {
    isDark,
    toggleTheme,
    initTheme,
  };
});

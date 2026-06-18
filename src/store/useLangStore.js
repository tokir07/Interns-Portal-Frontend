import { create } from "zustand";

export const useLangStore = create((set) => ({
  language: localStorage.getItem("lang") || "en",
  setLanguage: (language) => {
    localStorage.setItem("lang", language);
    set({ language });
  },
}));

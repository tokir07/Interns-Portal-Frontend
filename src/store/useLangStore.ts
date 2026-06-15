import { create } from 'zustand';

type Language = 'en' | 'hi' | 'de' | 'fr' | 'es';

interface LangState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLangStore = create<LangState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));

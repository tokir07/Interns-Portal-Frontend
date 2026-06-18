import { create } from "zustand";

const defaultUser = {
  name: "Sophia Müller",
  role: "intern",
  country: "Germany",
  university: "Technical University of Munich (TUM)",
  duration: "12 Weeks",
  startDate: "2026-06-01",
  endDate: "2026-08-24",
  projectTitle: "Smart Water Quality Monitoring using IoT and Machine Learning",
  department: "Computer Science & Engineering",
  supervisor: "Dr. Alok Kumar",
  avatarUrl: "",
  email: "sophia.mueller@tum.de",
  skills: ["React", "Python", "IoT", "Machine Learning", "Data Analysis"],
  languages: ["German (Native)", "English (Fluent)", "Hindi (Basic)"]
};

export const useAuthStore = create((set) => ({
  user: defaultUser,
  isAuthenticated: true, // Auto-authenticate for immediate access
  login: (user) => set({ user: user || defaultUser, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

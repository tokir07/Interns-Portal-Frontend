import { useAuthStore } from '../store/useAuthStore';

export const apiFetch = async (url, options) => {
  if (url === '/api/auth/login') {
    const { email, password } = options.body;
    
    if (email && password) {
      return {
        token: "mock-jwt-token-12345",
        user: {
          id: "1",
          name: email === "admin@iaeste.in" ? "Admin User" : "Sophia Müller",
          email: email,
          role: "intern", // Force intern role to match frontend-only features
          country: "Germany",
          university: "Technical University of Munich (TUM)",
          duration: "12 Weeks",
          startDate: "2026-06-01",
          endDate: "2026-08-24",
          projectTitle: "Smart Water Quality Monitoring using IoT and Machine Learning",
          department: "Computer Science & Engineering",
          supervisor: "Dr. Alok Kumar",
          skills: ["React", "Python", "IoT", "Machine Learning"],
          languages: ["German (Native)", "English (Fluent)", "Hindi (Basic)"],
          stats: {
            eventsAttended: 4,
            tripsJoined: 2,
            tasksCompleted: 12,
          }
        }
      };
    }
    throw new Error("Invalid credentials");
  }
  return {};
};

export const setAuthSession = ({ token, user }) => {
  localStorage.setItem("token", token);
  useAuthStore.getState().login(user);
};

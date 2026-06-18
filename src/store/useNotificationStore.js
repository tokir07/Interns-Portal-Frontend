import { create } from "zustand";

const initialNotifications = [
  {
    id: "1",
    title: "Welcome to India!",
    message: "Namaste! JECRC University welcomes you. Check the Buddy section to connect with Aarav.",
    time: "2 hours ago",
    read: false,
    type: "info"
  },
  {
    id: "2",
    title: "Trip Registration Open",
    message: "Signups for the Jaisalmer Desert Excursion are now open. Only 5 seats remaining!",
    time: "1 day ago",
    read: false,
    type: "event"
  },
  {
    id: "3",
    title: "Logbook Due Soon",
    message: "Please submit your Weekly Logbook for Week 2 by Sunday night.",
    time: "2 days ago",
    read: true,
    type: "alert"
  }
];

export const useNotificationStore = create((set) => ({
  notifications: initialNotifications,
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        { ...notification, id: Date.now().toString(), read: false, time: "Just now" },
        ...state.notifications
      ]
    })),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    })),
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true }))
    })),
  clearNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id)
    }))
}));

import { defineStore } from 'pinia';

// Define the main store
export const useMainStore = defineStore('main', {
  // State: Reactive data
  state: () => ({
    appName: 'CAD and Codes',
    darkMode: false, // Toggle for dark mode
    user: {
      name: '',
      email: '',
      isAuthenticated: false,
    },
    notifications: [] as { id: number; message: string; type: 'success' | 'error' | 'info' }[], // Notification system
  }),

  // Getters: Computed properties
  getters: {
    welcomeMessage: (state) => `Welcome to ${state.appName}!`,
    isUserLoggedIn: (state) => state.user.isAuthenticated,
    unreadNotifications: (state) => state.notifications.length,
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    async loginUser(userData: { name: string; email: string }) {
      this.user = { ...userData, isAuthenticated: true };
    },
    async logoutUser() {
      this.user = { name: '', email: '', isAuthenticated: false };
    },
    async addNotification(message: string, type: 'success' | 'error' | 'info') {
      const id = Date.now(); // Unique ID for notifications
      this.notifications.push({ id, message, type });
    },
    async removeNotification(id: number) {
      this.notifications = this.notifications.filter((notification) => notification.id !== id);
    },
  },
});


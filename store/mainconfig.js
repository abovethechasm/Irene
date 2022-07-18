import { defineStore } from "pinia";

export const useMainConfig = defineStore("main", {
  state() {
    const isDark = localStorage.getItem("dark_mode") === "true" ? true : false;
    const email = localStorage.getItem("user_email")
    return {
      isDark,
      loginModalIsOpen: false,
      signupModalIsOpen: false,
      user_email: email || false,
    };
  },
  actions: {
    switch() {
      this.isDark = !this.isDark;
      localStorage.setItem("dark_mode", this.isDark);
    },
    login(email) {
      localStorage.setItem("user_email", email)
    },
    logout() {
      localStorage.removeItem("user_email")
    },
    openLogin() {
      this.loginModalIsOpen = true;
    },
    openSignup() {
      this.signupModalIsOpen = true;
    },
    closeLogin() {
      this.loginModalIsOpen = false;
    },
    closeSignup() {
      this.signupModalIsOpen = false;
    },
  },
  getters: {
    darkMode: (state) => state.isDark,
  },
});

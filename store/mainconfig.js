import { defineStore } from "pinia";

export const useMainConfig = defineStore("main", {
  state() {
    const isDark = localStorage.getItem("dark_mode") === "true" ? true : false;
    return {
      isDark,
      loginModalIsOpen: false,
      signupModalIsOpen: false,
    };
  },
  actions: {
    switch() {
      this.isDark = !this.isDark;
      localStorage.setItem("dark_mode", this.isDark);
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

import { defineNuxtConfig } from "nuxt";
import * as Constants from "./data/Constants.js"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        titleTemplate: `%s - ${Constants.Name}`,
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'theme-color', hid: 'theme-color', content: '#ff00c3'},
          { name: 'description', hid: 'description', content: Constants.Description},
          { name: 'og:image', hid: 'og-image', content: Constants.Banners.jpg},
          { name: 'og:thumbnail', hid: 'og-thumbnail', content: Constants.Icons[256].png},
        ],
        link: [
          { rel: 'shortcut icon', href: Constants.Icons[96].png },
          { rel: 'apple-touch-icon', href: Constants.Icons[256].png }
        ],
       },
  css: ["@/assets/transition.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  ssr: false,
});

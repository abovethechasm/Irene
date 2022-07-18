<script setup>
import Navigation from "@/data/Navigation";
import * as Constants from "@/data/Constants";
import { useMainConfig } from "@/store/mainconfig.js";

const mainConfig = useMainConfig();

const nuxtApp = useNuxtApp()

const router = useRouter()


defineProps(["title"]);
const toggleNav = ref(false);

function toggleOff() {
  toggleNav.value = false;
}
function toggleBoth() {
  toggleNav.value = !toggleNav.value;
}
function toggleOn() {
  toggleNav.value = true;
}
</script>
<template>
  <div
    class="
      bg-gray-800
      transition
      duration-500
      ease-in-out
      dark:md:bg-transparent
      shadow-md
      md:shadow-none
      max-w-full
      block
      w-full
      fixed
      md:static
      top-0
      z-50
    "
  >
    <div class="max-w-9xl mx-auto px-2 md:px-6 lg:px-8 md:mt-4">
      <div class="relative flex items-center justify-between h-16">
        <div class="relative inset-y-0 left-0 flex items-center md:hidden">
          <button
            :class="`
              inline-flex
              items-center
              ${toggleNav ? 'hidden' : 'block'}
              justify-center
              p-2
              rounded-md
              text-white dark:text-white
              hover:text-gray-300 dark:hover:text-maid
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            `"
            @click="toggleOn"
          >
            <span class="sr-only">Open menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex fixed md:static items-center md:items-stretch">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/">
              <img
                class="h-8 w-auto hidden lg:block"
                :src="`/256x256.png`"
                alt="Placeholder"
              />
            </NuxtLink>
          </div>
          <div
            :class="`overflow-y-scroll md:overflow-y-hidden z-40 block h-full top-0 left-0 bg-white dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent fixed md:static transform transition duration-500 ease-in-out md:translate-x-0 p-8 md:p-0 md:block ${
              toggleNav ? 'translate-x-0' : '-translate-x-110 md:ml-6'
            }`"
          >
            <NuxtLink to="/">
              <img
                class="h-8 w-auto block lg:hidden"
                :src="`/256x256.webp`"
                alt="Placeholder"
              />
            </NuxtLink>

            <div
              class="flex flex-col md:flex-row justify-between space-x-1 w-full"
            >
              <div
                class="
                  flex
                  md:space-x-4
                  flex-col
                  md:flex-row md:justify-between md:w-full md:pt-0
                  pt-10
                "
              >
                <div v-for="{ name, route, key } in Navigation" :key="key">
                  <NuxtLink
                    v-if="typeof route === 'string' && route.startsWith('/')"
                    :to="typeof route == 'string' ? route : '#'"
                    :class="
                      (title === key
                        ? 'text-maid '
                        : 'text-white border-transparent ') +
                      (Array.isArray(route) ? 'group ' : '') +
                      'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 text-xs md:text-md font-bold hover:text-maid block'
                    "
                  >
                    <span class="py-1">{{ name }}</span>
                  </NuxtLink>
                  <a
                    v-else-if="Array.isArray(route)"
                    :href="'javascript:void(0)'"
                    @click="(x) => setState(key)"
                    :class="
                      (title === key ? 'text-maid ' : 'text-white') +
                      (Array.isArray(route) ? 'group ' : '') +
                      'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 text-xs md:text-md font-bold hover:text-maid block'
                    "
                  >
                    <span class="py-1">{{ name }}</span>
                    <span>
                      <SVGDown />
                    </span>

                    <div
                      :class="`
                        absolute
                        flex
                        bg-white
                        border-t
                        w-48
                        border-gray-400
                        shadow-md
                        text-xs
                        p-2
                        flex-col
                        ${toggled[key] ? 'visible translate-y-9' : 'invisible'}
                        md:top-10
                        transform
                        transition
                        duration-300
                        ease-in-out
`"
                    >
                      <NuxtLink
                        v-for="{ name2, route2, key2 } in route"
                        :key="key2"
                        class="
                          p-2
                          flex flex-nowrap
                          text-gray-800
                          hover:bg-gray-100 hover:text-black
                        "
                        :to="route2"
                        >{{ name2 }}</NuxtLink
                      >
                    </div>
                  </a>
                  <a
                    v-else
                    :href="typeof route == 'string' ? route : '#'"
                    target="_blank"
                    :class="
                      (title === key
                        ? 'text-maid '
                        : 'dark:text-white text-black ') +
                      (Array.isArray(route) ? 'group ' : '') +
                      'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 text-xs md:text-md font-bold hover:dark:text-maid hover:text-gray-800 block'
                    "
                  >
                    <span class="py-1">{{ name }}</span>
                  </a>
                </div>
                <span v-if = "!mainConfig.user_email"
                  class="
                    text-white
                    transition
                    duration-500
                    ease-in-out
                    tracking-wide
                    px-3
                    flex flex-row
                    space-x-4
                    md:uppercase
                    py-4
                    text-xs
                    md:text-md
                    font-bold
                    hover:text-maid
                    block
                    cursor-pointer
                  " @click = "mainConfig.openLogin"
                  ><span class="py-1">Login</span></span
                >
                <span class = "text-white
                    transition
                    duration-500
                    ease-in-out
                    tracking-wide
                    px-3
                    flex flex-row
                    space-x-4
                    md:uppercase
                    py-4
                    text-xs
                    md:text-md
                    font-bold
                    hover:text-maid
                    block
                    cursor-pointer" v-else @click="mainConfig.logout(); router.go()">
                  <span class="py-1">{{mainConfig.user_email}} Logout?</span>
                </span>
              </div>
            </div>
          </div>
          <div
            :class="`inset-0 w-full fixed h-full z-30 block ${
              toggleNav ? 'visible' : 'invisible'
            }`"
            @click="
              (x) => {
                toggleOff();
              }
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
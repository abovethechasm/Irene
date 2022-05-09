<template>
  <div
    class="
      bg-gray-600 transition duration-500 ease-in-out
      dark:bg-transparent
      text-white
      md:h-48
      p-8
      flex flex-col
      space-y-8
      items-center
    "
  >
    <hr class="border border-maid w-full" />
    <div
      class="
        max-w-6xl
        flex flex-col
        md:flex-row
        text-center
        md:text-left
        justify-between
        space-y-4
        md:space-y-0
        items-start
        w-full
      "
    >
      <div class="p-2 flex flex-col space-y-4 items-start">
        <div class="text-2xl font-black">
          <img
            :src="Banners.webp"
            alt="Above The Chasm"
            class="w-full md:w-72"
          />
        </div>
      </div>
      <div
        class="
          p-2
          flex flex-col
          space-y-6
          items-start
          stroke-maid stroke-1
          fill-transparent
        "
      >
        <div class="flex flex-col text-sm">
          <div
            class="
              font-bold
              flex flex-row
              items-center
              cursor-pointer
              space-x-4
            "
            @click="mainConfig.switch()"
          >
            <span>Make It {{ isDark ? "Bright" : "Dark" }}</span>
            <SVGSun v-if="isDark" />
            <SVGMoon v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Name, Banners } from "@/data/Constants.js";
import { useMainConfig } from "@/store/mainconfig.js";

const mainConfig = useMainConfig();

let isDark = computed(() => mainConfig.darkMode);
</script>
<template>
  <div :class="`${isDark ? 'dark' : ''}`">
    <NuxtLayout>
      <NuxtPage />
      <div
        :class="`fixed z-50 inset-0 w-full flex flex-col items-center justify-center pointer-events-none ${
          openLogin ? 'visible' : 'invisible'
        }`"
      >
        <div class="pointer-events-auto">
          <AccountLogin @noAccount="hasNoAccount" @okay="closeAll" />
        </div>
      </div>
      <div
        :class="`fixed z-50 inset-0 w-full flex flex-col items-center justify-center pointer-events-none ${
          openSignup ? 'visible' : 'invisible'
        }`"
      >
        <div class="pointer-events-auto">
          <AccountSignup @hasAccount="hasAccount" />
        </div>
      </div>
    </NuxtLayout>
    <div
      :class="`inset-0 z-40 w-full fixed bg-black/30 ${
        openSignup || openLogin ? 'block' : 'hidden'
      }`"
      @click="closeAll"
    />
  </div>
</template>
<script setup>
import { useMainConfig } from "@/store/mainconfig.js";

const mainConfig = useMainConfig();

let isDark = computed(() => mainConfig.darkMode);

let openLogin = computed(() => mainConfig.loginModalIsOpen);
let openSignup = computed(() => mainConfig.signupModalIsOpen);

function hasNoAccount() {
  mainConfig.closeLogin();
  mainConfig.openSignup();
}

function hasAccount() {
  mainConfig.closeSignup();
  mainConfig.openLogin();
}

function closeAll() {
  mainConfig.closeSignup();
  mainConfig.closeLogin();
}
</script>
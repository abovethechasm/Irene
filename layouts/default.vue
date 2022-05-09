
<template>
  <div
    class="
      flex flex-col transition duration-500 ease-in-out
      min-h-screen
      font-montserrat
      text-lg
      tracking-wide
      text-gray-900
      bg-white
      text-black
      dark:bg-gray-800
      dark:text-white
      font-semibold
    "
  >
  <div class = "fixed -z-10 coolbg inset-0 w-full"/>
    <LayoutHeader
      :title="nuxtApp._route.path.split('/').reverse()[0] || 'home'"
    />
    <main
      class="
        flex-1
        w-full
        max-w-7xl
        p-4
        mx-auto
        md:px-8
        py-4
        mt-24
      "
    >
      <slot />
    </main>
    <LayoutPreFooter />
    <LayoutFooter />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

</style> 
<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute();
useHead({ title: route.meta.title, description: route.meta.description });
</script>
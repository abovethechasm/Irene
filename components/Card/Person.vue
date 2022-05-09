<template>
  <div class="p-4">
    <div class="max-w-md rounded-xl w-full p-4">
      <div class="flex flex-col items-stretch space-y-8">
        <div class="shrink-0 flex justify-center">
          <img
            :src="image"
            class="object-cover rounded-full w-48 h-48"
          />
        </div>
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="text-3xl font-bold">{{name}}</div>
          <div class="text-2xl text-nett-maid">{{title}}</div>
          <div class="text-lg dark:text-gray-100 text-gray-900">{{description}}</div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
  },
};
</script>
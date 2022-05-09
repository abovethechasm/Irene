
<template>
  <div class="p-4">
    <div class="max-w-2xl rounded-xl w-full p-4">
      <div class="flex flex-col items-stretch space-y-4 text-center">
          <div class="text-3xl font-bold">{{title}}</div>
          <div v-for = '(desc, i) in description' :key = "`desc${i}`" class="text-base dark:text-gray-100 text-gray-900">{{desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: Array,
      default: null,
    },
  },
};
</script>
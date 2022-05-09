<template>
  <div
    class="
      bg-white
      dark:bg-gray-900
      shadow-xl rounded-xl
      max-w-lg
      flex flex-col
      items-center
      space-y-8
      p-4
    "
  >
    <FormTextEmail
      some-placeholder="yourname@example.com"
      friendly-name="User Email"
    />
    <FormTextPassword
      some-placeholder="Password"
      friendly-name="User Password"
    />
    <div class="max-w-sm font-bold"><FormButtonSuccess caption="Login" /></div>
    <a
      href="javascript:void(0)"
      @click="noAccount"
      class="font-normal text-maid underline"
      >Create a new account?</a
    >
  </div>
</template>
<script setup>
const emit = defineEmits(["okay", "noAccount"]);

function noAccount() {
  emit("noAccount");
}
</script>
<template>
  <p>
    <span v-if="!helpOnly">
      This {{ type }} is either not documented or has not been through full parity review. Please
      use with caution and refer to the code to find differences in behavior. We are working to
      bring the migration guide and documenation up-to-date with the code.
    </span>
    If you would like to help, please refer to the
    <a
      href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#improving-the-documentation"
    >
      improving the documentation</a
    >
    and
    <a
      href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#help-verify-bootstrapvue-and-bootstrap-v5-parity"
      >help verify parity</a
    >
    sections of our
    <a
      href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#developing"
      >contribution guide.<slot
    /></a>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  type?: string
  helpOnly?: boolean
}>()
</script>

<!-- eslint-disable vue/no-unused-vars -->
<template>
  <BFormTags :value="modelValue">
    <template #default="{tags, addTag, removeTag, inputAttrs, inputHandlers}">
      <!-- Place your custom rendering here -->
    </template>
  </BFormTags>
</template>

<script setup lang="ts">
const modelValue = defineModel<string[]>({
  default: () => [],
})
</script>

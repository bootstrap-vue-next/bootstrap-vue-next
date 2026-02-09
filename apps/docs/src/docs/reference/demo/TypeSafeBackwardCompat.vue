<template>
  <!-- #region template -->
  <!-- No types needed — works exactly as before -->
  <BFormSelect
    v-model="selected"
    :options="items"
  />
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const items = ['Apple', 'Banana', 'Cherry']
const selected = ref<string>()
</script>

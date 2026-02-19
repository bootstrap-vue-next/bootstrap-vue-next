<template>
  <!-- #region template -->
  <BButton
    v-b-popover.manual="{
      modelValue: popoverVisible,
      title: 'Manual Popover',
      body: 'Click the button to toggle',
    }"
    variant="primary"
    @click="popoverVisible = !popoverVisible"
  >
    {{ popoverVisible ? 'Hide' : 'Show' }} popover
  </BButton>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const popoverVisible = ref(false)
</script>

<template>
  <!-- #region snippet -->
  <!-- Boolean for show/hide -->
  <BToast v-model="show" />

  <!-- Number for auto-dismiss duration in milliseconds -->
  <BToast
    :model-value="5000"
    no-hover-pause
  />
  <!-- #endregion snippet -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>

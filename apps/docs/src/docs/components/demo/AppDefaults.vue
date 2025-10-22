<template>
  <BApp :defaults="appDefaults">
    <!-- Your application content -->
    <router-view />
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'

const appDefaults = {
  BButton: {
    variant: 'info' as const,
    size: 'lg' as const,
  },
  BModal: {
    centered: true,
    noCloseOnBackdrop: true,
  },
  BToast: {
    variant: 'success' as const,
    solid: true,
  },
}
</script>

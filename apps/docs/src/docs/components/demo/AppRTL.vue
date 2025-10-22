<template>
  <BApp :rtl="rtlConfig">
    <!-- Your application content -->
    <router-view />
  </BApp>
</template>

<script setup lang="ts">
import {BApp} from 'bootstrap-vue-next'

const rtlConfig = {
  rtlInitial: true,
  localeInitial: 'ar',
}
</script>

<template>
  <BBreadcrumb :items="breadcrumbStringArray" />
</template>

<script setup lang="ts">
import {BBreadcrumb} from 'bootstrap-vue-next'

const breadcrumbStringArray = ['Admin', 'Manage', 'Library']
</script>

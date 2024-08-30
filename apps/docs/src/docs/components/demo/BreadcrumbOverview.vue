<template>
  <BBreadcrumb :items="breadcrumbItems" />
</template>

<script setup lang="ts">
import {type BreadcrumbItem} from 'bootstrap-vue-next'
import {ref} from 'vue'

const breadcrumbItems = ref<BreadcrumbItem[]>([
  {text: 'Admin', href: 'https://getbootstrap.com/'},
  {text: 'Manage', href: '#'},
  {text: 'Library'},
])
</script>

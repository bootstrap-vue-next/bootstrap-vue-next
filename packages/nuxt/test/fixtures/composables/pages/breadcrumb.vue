<template>
  <div id="breadcrumb-page">
    <span
      v-for="item in breadcrumb.items.value"
      :key="item.text"
    >{{ item.text }}</span>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'BreadcrumbPage' })
const breadcrumb = useBreadcrumb()
breadcrumb.items.value = [{ text: 'Home' }, { text: 'About' }]
</script>

<template>
  <div class="my-2">
    <h2>Breadcrumb</h2>
    <b-breadcrumb />
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {useBreadcrumb} from 'bootstrap-vue-3'

const breadcrumb = useBreadcrumb()

onMounted(() => {
  breadcrumb.items.push({
    text: 'Home',
    href: '/home',
  })

  breadcrumb.items.push({
    text: 'Hello',
  })
})
</script>

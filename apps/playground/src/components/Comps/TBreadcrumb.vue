<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BBreadcrumb />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {useBreadcrumb} from 'bootstrap-vue-next'

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

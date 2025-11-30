<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BBreadcrumb />
        <BFormInput v-model="value" />
        <BButton @click="breadcrumb.items?.value.push(value)">Add</BButton>
        <BButton @click="breadcrumb.reset?.()">Clear</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useBreadcrumb} from 'bootstrap-vue-next'

const breadcrumb = useBreadcrumb()

const value = ref('')

onMounted(() => {
  breadcrumb.items?.value.push({
    text: 'Home',
    href: '/home',
  })

  breadcrumb.items?.value.push({
    text: 'Hello',
  })
})
</script>

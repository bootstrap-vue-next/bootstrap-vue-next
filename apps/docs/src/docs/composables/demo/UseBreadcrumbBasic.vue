<template>
  <BBreadcrumb />

  <BFormInput
    v-model="inputValue"
    class="my-3"
  />

  <BButton
    class="me-2"
    @click="addItem"
    >Add</BButton
  >
  <BButton
    variant="danger"
    @click="breadcrumb.reset"
    >Clear</BButton
  >
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BBreadcrumb, BButton, BFormInput, useBreadcrumb} from 'bootstrap-vue-next'

const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
  breadcrumb.items?.value.push(inputValue.value)
  inputValue.value = ''
}
</script>

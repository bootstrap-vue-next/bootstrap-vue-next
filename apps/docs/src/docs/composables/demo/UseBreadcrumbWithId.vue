<template>
  <BBreadcrumb id="foobar" />

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

// Input matches the id passed to the component
const breadcrumb = useBreadcrumb('foobar')

const inputValue = ref('')

const addItem = () => {
  breadcrumb.items.value.push(inputValue.value)
  inputValue.value = ''
}
</script>

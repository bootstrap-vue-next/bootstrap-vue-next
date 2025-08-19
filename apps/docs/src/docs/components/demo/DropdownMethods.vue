<template>
  <div class="d-flex gap-2 mb-2">
    <BButton
      variant="danger"
      @click="show"
      >Show</BButton
    >
    <BButton
      variant="success"
      @click="hide"
      >Hide</BButton
    >
    <BButton @click="toggle">Toggle</BButton>
  </div>

  <BDropdown
    ref="myDropdown"
    text="Dropdown Button"
    :auto-close="false"
    class="me-2"
  >
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
import {BDropdown} from 'bootstrap-vue-next/components/BDropdown'
import {useTemplateRef} from 'vue'

const myDropdown = useTemplateRef('myDropdown')

const show = () => myDropdown.value?.show()
const hide = () => myDropdown.value?.hide()
const toggle = () => myDropdown.value?.toggle()
</script>

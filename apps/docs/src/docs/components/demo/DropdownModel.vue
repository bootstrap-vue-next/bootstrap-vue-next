<template>
  <p>Open: {{ model }}</p>

  <div class="d-flex gap-2 mb-2">
    <BButton @click="model = true">Open Dropdown</BButton>
    <BButton @click="model = false">Close Dropdown</BButton>
  </div>

  <BDropdown v-model="model" text="Dropdown Button" class="me-2">
    <BDropdownItem>First Action</BDropdownItem>
    <BDropdownItem>Second Action</BDropdownItem>
    <BDropdownItem>Third Action</BDropdownItem>
    <BDropdownDivider />
    <BDropdownItem active>Active action</BDropdownItem>
    <BDropdownItem disabled>Disabled action</BDropdownItem>
  </BDropdown>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const model = ref<boolean>(false)
</script>

<template>
  <BNav pills class="mb-1">
    <BNavItem href="#1" active>Link 1</BNavItem>
    <BNavItem href="#2">Link 2</BNavItem>
    <BNavForm @submit.stop.prevent="submitted = true">
      <BFormInput aria-label="Input" class="mr-1" />
      <BButton class="ms-2" type="submit">Ok</BButton>
    </BNavForm>
  </BNav>
  <span v-if="submitted">Form Submitted</span>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const submitted = ref(false)
</script>

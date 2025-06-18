<template>
  <div>
    <b-form-input
      v-model="value"
      type="text"
      debounce="500"
    />
    <div class="mt-2">Value: "{{ value }}"</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const value = ref('')
</script>

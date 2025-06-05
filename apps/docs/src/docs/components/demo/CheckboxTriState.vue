<template>
  <BFormCheckbox
    v-model="checked"
    v-model:indeterminate="indeterminate"
    >Click me to see what happens</BFormCheckbox
  >
  <BButton
    class="mt-2"
    :disabled="indeterminate"
    @click="indeterminate = true"
    >Reset Indeterminate</BButton
  >
  <div class="mt-2">
    Checked: <strong>{{ checked }}</strong
    ><br />
    Indeterminate: <strong>{{ indeterminate }}</strong>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const checked = ref(true)
const indeterminate = ref(true)
</script>

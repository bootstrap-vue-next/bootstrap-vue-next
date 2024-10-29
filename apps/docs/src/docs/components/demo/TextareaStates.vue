<template>
  <BFormTextarea
    id="textarea-state"
    v-model="textStates"
    :state="textStates.length >= 10"
    placeholder="Enter at least 10 characters"
    rows="3"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const textStates = ref('')
</script>

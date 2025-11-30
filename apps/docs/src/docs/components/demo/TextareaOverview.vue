<template>
  <BFormTextarea v-model="textEx" placeholder="Enter something..." rows="3" />

  <pre class="mt-3 mb-0">{{ textEx }}</pre>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const textEx = ref()
</script>

<template>
  <BFormFloatingLabel label="type something" label-for="textarea-floatinglabel">
    <BFormTextarea
      id="textarea-floatinglabel"
      v-model="textFloatingLabel"
      placeholder="Enter something..."
      style="height: 6rem"
    />
  </BFormFloatingLabel>

  <pre class="mt-3 mb-0">{{ textFloatingLabel }}</pre>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const textFloatingLabel = ref()
</script>

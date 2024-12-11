<template>
  <BFormCheckbox v-model="switchChecked" switch>
    Switch Checkbox <strong>(Checked: {{ switchChecked }})</strong>
  </BFormCheckbox>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const switchChecked = ref(false)
</script>

<template>
  <div class="hstack gap-3">
    <BFormCheckbox
      v-model="button1Checked"
      button
    >
      Button Checkbox (Checked: {{ button1Checked }})
    </BFormCheckbox>

    <BFormCheckbox
      v-model="button2Checked"
      button
      button-variant="danger"
    >
      Button Checkbox (Checked: {{ button2Checked }})
    </BFormCheckbox>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const button1Checked = ref(false)
const button2Checked = ref(false)
</script>

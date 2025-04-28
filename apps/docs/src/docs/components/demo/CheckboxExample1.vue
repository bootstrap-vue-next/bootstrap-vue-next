<template>
  <div>
    <BFormCheckbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </BFormCheckbox>

    <div>
      State: <strong>{{ status }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const status = ref(false)
</script>

<template>
  <div class="d-flex gap-2">
    <BButton
      v-b-tooltip.manual.show="tooltipVisible"
      variant="primary"
      @click="tooltipVisible = !tooltipVisible"
    >
      {{ tooltipVisible ? 'Hide' : 'Show' }} tooltip
    </BButton>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tooltipVisible = ref(false)
</script>

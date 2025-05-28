<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <p>Popover is {{ model ? 'visible' : 'hidden' }}</p>
    </div>

    <div class="p-2">
      <BButton class="mx-2" @click="model = !model">Toggle Popover</BButton>

      <BPopover v-model="model" target="popover-button-sync" title="Popover">
        Hello <strong>World!</strong>
      </BPopover>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const model = ref(false)
</script>

<template>
  <div class="d-flex gap-2">
    <BTooltip interactive>
      <template #target>
        <BButton>Hover me</BButton>
      </template>
      <span class="me-2">{{ count }}</span>
      <BButton @click="count++">+</BButton>
    </BTooltip>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0)
</script>

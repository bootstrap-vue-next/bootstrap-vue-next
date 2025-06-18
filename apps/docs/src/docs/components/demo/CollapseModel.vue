<template>
  <BCard>
    <BButton
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Toggle Collapse
    </BButton>
    <BCollapse
      id="collapse-4"
      v-model="visible"
      class="mt-2"
    >
      <BCard>I should start open!</BCard>
    </BCollapse>
  </BCard>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const visible = ref(true)
</script>

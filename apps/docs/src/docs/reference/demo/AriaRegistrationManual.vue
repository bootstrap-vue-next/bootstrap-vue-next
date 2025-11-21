<template>
  <BButton
    aria-controls="aria-demo-manual"
    :aria-expanded="visible ? 'true' : 'false'"
    :class="visible ? 'not-collapsed' : 'collapsed'"
    @click="toggle"
  >
    Toggle Collapse
  </BButton>

  <BCollapse
    id="aria-demo-manual"
    v-model="visible"
  >
    <BCard>Collapsible content</BCard>
  </BCollapse>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(false)

const toggle = () => {
  visible.value = !visible.value
}
</script>

<template>
  <div id="toggle-page">
    <BButton
      id="toggle-trigger"
      @click="toggle()"
    >
      Toggle
    </BButton>
    <BCollapse id="fixture-toggle">
      <span>fixture content</span>
    </BCollapse>
    <span id="toggle-value">{{ toggleLabel }}</span>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'TogglePage' })

const { toggle, value } = useToggle('fixture-toggle')
const toggleLabel = computed(() => (value.value ? 'shown' : 'hidden'))
</script>

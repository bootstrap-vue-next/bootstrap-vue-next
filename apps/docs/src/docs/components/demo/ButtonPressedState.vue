<template>
  <h5>Pressed and un-pressed state</h5>
  <div class="d-flex gap-2">
    <BButton
      :pressed="true"
      variant="success"
      >Always Pressed</BButton
    >
    <BButton
      :pressed="false"
      variant="success"
      >Not Pressed</BButton
    >
  </div>
  <h5 class="mt-3">Toggleable Button</h5>
  <BButton
    v-model:pressed="buttonToggle"
    variant="primary"
    >Toggle Me</BButton
  >
  <p>
    Pressed State: <strong>{{ buttonToggle }}</strong>
  </p>
  <h5>In a button group</h5>
  <BButtonGroup size="sm">
    <BButton
      v-for="(btn, idx) in buttons"
      :key="idx"
      v-model:pressed="btn.state"
      variant="primary"
    >
      {{ btn.caption }}
    </BButton>
  </BButtonGroup>
  <p>
    Pressed States: <strong>{{ btnStates }}</strong>
  </p>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const buttonToggle = ref(false)
const buttons = ref([
  {caption: 'Toggle 1', state: true},
  {caption: 'Toggle 2', state: false},
  {caption: 'Toggle 3', state: true},
  {caption: 'Toggle 4', state: false},
])

const btnStates = computed(() => buttons.value.map((b) => b.state))
</script>

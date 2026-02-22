<template>
  <div>
    <h5>Using v-b-toggle Directive</h5>
    <BButton
      v-b-toggle.collapse-directive
      variant="primary"
      class="mb-3"
    >
      Toggle with Directive
    </BButton>
    <BCollapse
      id="collapse-directive"
      class="mb-4"
    >
      <BCard>
        <p class="card-text">Simple, declarative approach for basic toggle functionality.</p>
      </BCard>
    </BCollapse>

    <h5>Using useToggle Composable</h5>
    <BButton
      variant="success"
      class="mb-3"
      @click="() => toggleComposable()"
    >
      Toggle with Composable
    </BButton>
    <BCollapse
      id="collapse-composable"
      class="mb-4"
    >
      <BCard>
        <p class="card-text">Programmatic control with full access to visibility state.</p>
        <p class="mb-0">Current state: {{ composableValue ? 'Visible' : 'Hidden' }}</p>
      </BCard>
    </BCollapse>

    <h5>Using v-model</h5>
    <BButton
      variant="info"
      class="mb-3"
      @click="isManual = !isManual"
    >
      Toggle with v-model
    </BButton>
    <BCollapse
      id="collapse-manual"
      v-model="isManual"
    >
      <BCard>
        <p class="card-text">Direct control via reactive state binding.</p>
        <p class="mb-0">Current state: {{ isManual ? 'Visible' : 'Hidden' }}</p>
      </BCard>
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useToggle} from 'bootstrap-vue-next/composables/useToggle'

// Using useToggle composable
const {toggle: toggleComposable, value: composableValue} = useToggle('collapse-composable')

// Using v-model
const isManual = ref(false)
</script>

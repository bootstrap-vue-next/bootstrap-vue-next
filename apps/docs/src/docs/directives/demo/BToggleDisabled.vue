<template>
  <div>
    <BButton
      v-b-toggle.collapse-disabled
      :disabled="isDisabled"
      variant="primary"
      class="mb-2"
    >
      Toggle (Currently {{ isDisabled ? 'Disabled' : 'Enabled' }})
    </BButton>

    <BButton
      variant="secondary"
      class="mb-2 ms-2"
      @click="isDisabled = !isDisabled"
    >
      {{ isDisabled ? 'Enable' : 'Disable' }} Toggle Button
    </BButton>

    <BCollapse
      id="collapse-disabled"
      class="mt-2"
    >
      <BCard>
        <p class="card-text">
          When the toggle button is disabled, clicking it will not affect this collapse.
        </p>
      </BCard>
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const isDisabled = ref(false)
</script>

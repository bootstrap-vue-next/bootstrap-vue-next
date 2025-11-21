<template>
  <div>
    <BButton
      v-b-toggle.aria-demo-programmatic
      class="mb-2"
    >
      Toggle using v-b-toggle
    </BButton>

    <BCollapse
      id="aria-demo-programmatic"
      v-model="visible"
    >
      <template #default="{hide}">
        <BCard>
          <p>This demonstrates combining v-model with v-b-toggle.</p>
          <p>The v-b-toggle button above has automatic ARIA management.</p>
          <p>You can close this from inside using the slot's hide function:</p>
          <div class="d-flex gap-2">
            <BButton
              variant="danger"
              size="sm"
              @click="() => hide()"
            >
              Close (slot function)
            </BButton>
            <BButton
              variant="secondary"
              size="sm"
              @click="closeFromCode"
            >
              Close (v-model)
            </BButton>
          </div>
        </BCard>
      </template>
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(false)

// You can also control visibility programmatically
const closeFromCode = () => {
  visible.value = false
}
</script>

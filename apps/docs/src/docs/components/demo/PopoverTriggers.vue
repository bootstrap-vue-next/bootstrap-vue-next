<template>
  <div class="d-flex flex-wrap gap-2">
    <!-- Default: Hover + Focus -->
    <BPopover>
      <template #target>
        <BButton variant="secondary">Default (hover/focus)</BButton>
      </template>
      Default triggers: hover and focus
    </BPopover>

    <!-- Click only -->
    <BPopover click>
      <template #target>
        <BButton variant="primary">Click Only</BButton>
      </template>
      Click to toggle
    </BPopover>

    <!-- Hover only -->
    <BPopover hover>
      <template #target>
        <BButton variant="success">Hover Only</BButton>
      </template>
      Hover to show (no focus)
    </BPopover>

    <!-- Focus only -->
    <BPopover focus>
      <template #target>
        <BButton variant="info">Focus Only</BButton>
      </template>
      Focus to show (no hover)
    </BPopover>

    <!-- Multiple triggers -->
    <BPopover
      click
      hover
      focus
    >
      <template #target>
        <BButton variant="warning">All Triggers</BButton>
      </template>
      Click, hover, or focus
    </BPopover>

    <!-- Manual control -->
    <BPopover
      v-model="manualShow"
      manual
    >
      <template #target>
        <BButton
          variant="danger"
          @click="manualShow = !manualShow"
        >
          Manual ({{ manualShow ? 'hide' : 'show' }})
        </BButton>
      </template>
      Controlled manually via v-model
    </BPopover>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const manualShow = ref(false)
</script>

<template>
  <!-- #region template -->
  <div class="d-flex flex-column gap-3">
    <BPopover title="String ID Target">
      <template #target>
        <BButton
          id="target-string"
          variant="primary"
          >Target by ID String</BButton
        >
      </template>
      This popover targets an element by its ID string
    </BPopover>

    <BPopover
      :target="buttonRef"
      title="Template Ref Target"
    >
      <template #target>
        <BButton
          ref="buttonRef"
          variant="success"
          >Target by Ref</BButton
        >
      </template>
      This popover targets an element via a template ref
    </BPopover>

    <BPopover
      target="#toolbar > button:first-child"
      title="querySelector Target"
    >
      <div
        id="toolbar"
        class="d-flex gap-2"
      >
        <BButton variant="info">Target by querySelector</BButton>
        <BButton variant="secondary">Not targeted</BButton>
      </div>
      This popover targets an element using a querySelector string
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

const buttonRef = ref<HTMLElement | null>(null)
</script>

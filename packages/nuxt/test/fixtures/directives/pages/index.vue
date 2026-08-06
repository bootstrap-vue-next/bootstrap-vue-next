<template>
  <div id="directives-page">
    <span
      id="tooltip-el"
      v-b-tooltip.hover
      title="A tooltip"
    >Tooltip target</span>
    <BButton
      id="modal-trigger"
      v-b-modal.my-modal
    >
      Open modal
    </BButton>
    <BModal
      id="my-modal"
      title="Directive modal"
    >
      Directive modal body
    </BModal>
    <span
      id="popover-el"
      v-b-popover.hover
      title="A popover"
    >Popover target</span>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'DirectivesIndex' })
</script>

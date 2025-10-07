<template>
  <div>
    <BButton v-b-modal.modal-popover>Show Modal</BButton>

    <BModal
      id="modal-popover"
      title="Modal with Popover"
      ok-only
    >
      <p>
        This
        <BButton
          v-b-popover="'Popover inside a modal!'"
          title="Popover"
          >Button</BButton
        >
        triggers a popover on click.
      </p>
      <p>
        This
        <a
          v-b-tooltip
          href="#modal-popover"
          title="Tooltip in a modal!"
          >Link</a
        >
        will show a tooltip on hover.
      </p>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {vBModal} from 'bootstrap-vue-next/directives/BModal'
import {vBPopover} from 'bootstrap-vue-next/directives/BPopover'
import {vBTooltip} from 'bootstrap-vue-next/directives/BTooltip'
</script>

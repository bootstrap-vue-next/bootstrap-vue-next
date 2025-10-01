<template>
  <div>
    <BButton v-b-modal.modal-no-backdrop>Open modal</BButton>

    <BModal
      id="modal-no-backdrop"
      no-backdrop
      content-class="shadow"
      title="BootstrapVue"
    >
      <p class="my-2">
        We've added the utility class <code>'shadow'</code>
        to the modal content for added effect.
      </p>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {vBModal} from 'bootstrap-vue-next/directives/BModal'
</script>

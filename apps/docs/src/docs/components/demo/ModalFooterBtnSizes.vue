<template>
  <div>
    <div class="d-flex gap-2">
      <BButton v-b-modal.modal-footer-sm>Small Footer Buttons</BButton>
      <BButton v-b-modal.modal-footer-lg>Large Footer Buttons</BButton>
    </div>

    <BModal
      id="modal-footer-sm"
      title="BootstrapVue"
      button-size="sm"
    >
      <p class="my-2">This modal has small footer buttons</p>
    </BModal>

    <BModal
      id="modal-footer-lg"
      title="BootstrapVue"
      button-size="lg"
    >
      <p class="my-2">This modal has large footer buttons</p>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {vBModal} from 'bootstrap-vue-next/directives/BModal'
</script>

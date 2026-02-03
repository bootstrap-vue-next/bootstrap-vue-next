<template>
  <div>
    <BButton v-b-modal.modal-center>Launch centered modal</BButton>

    <BModal
      id="modal-center"
      centered
      title="BootstrapVue"
    >
      <p class="my-4">Vertically centered modal!</p>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {vBModal} from 'bootstrap-vue-next/directives/BModal'
</script>

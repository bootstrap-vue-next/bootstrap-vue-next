<template>
  <div>
    <div class="d-flex gap-2 mb-3">
      <BButton
        v-b-modal.modal-xl
        variant="primary"
        >xl modal</BButton
      >
      <BButton
        v-b-modal.modal-lg
        variant="primary"
        >lg modal</BButton
      >
      <BButton
        v-b-modal.modal-sm
        variant="primary"
        >sm modal</BButton
      >
    </div>

    <BModal
      id="modal-xl"
      size="xl"
      title="Extra Large Modal"
      >Hello Extra Large Modal!</BModal
    >
    <BModal
      id="modal-lg"
      size="lg"
      title="Large Modal"
      >Hello Large Modal!</BModal
    >
    <BModal
      id="modal-sm"
      size="sm"
      title="Small Modal"
      >Hello Small Modal!</BModal
    >
  </div>
</template>

<script setup lang="ts">
import {vBModal} from 'bootstrap-vue-next/directives/BModal'
</script>

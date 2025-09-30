<template>
  <div>
    <BButton v-b-modal.modal-scrollable>Launch scrolling modal</BButton>

    <BModal
      id="modal-scrollable"
      scrollable
      title="Scrollable Content"
    >
      <p
        v-for="i in 20"
        :key="i"
        class="my-4"
      >
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {vBModal} from 'bootstrap-vue-next/directives/BModal'
</script>

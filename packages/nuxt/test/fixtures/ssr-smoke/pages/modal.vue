<template>
  <div id="modal-page">
    <BModal
      id="test-modal"
      title="Test Modal"
    >
      Modal content
    </BModal>
    <BButton>
      Open modal
    </BButton>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ModalPage' })
</script>

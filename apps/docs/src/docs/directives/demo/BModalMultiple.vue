<template>
  <!-- #region template -->
  <div>
    <div class="d-flex gap-2 mb-3">
      <BButton
        v-b-modal.modal-1.modal-2
        variant="primary"
        >Using Modifiers</BButton
      >
      <BButton
        v-b-modal="'modal-1 modal-2'"
        variant="success"
        >Space-separated String</BButton
      >
      <BButton
        v-b-modal="['modal-1', 'modal-2']"
        variant="info"
        >Array Value</BButton
      >
    </div>
    <BModal
      id="modal-1"
      title="First Modal"
    >
      <p>This is the first modal.</p>
    </BModal>
    <BModal
      id="modal-2"
      title="Second Modal"
    >
      <p>This is the second modal.</p>
    </BModal>
  </div>
  <!-- #endregion template -->
</template>

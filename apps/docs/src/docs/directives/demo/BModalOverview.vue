<template>
  <!-- #region template -->
  <div>
    <BButton
      v-b-modal.modal-overview
      variant="primary"
      >Show Modal</BButton
    >
    <BModal
      id="modal-overview"
      title="Hello Modal!"
    >
      <p>This modal can be triggered with the v-b-modal directive.</p>
    </BModal>
  </div>
  <!-- #endregion template -->
</template>

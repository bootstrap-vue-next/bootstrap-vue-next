<template>
  <!-- #region template -->
  <div>
    <div class="d-flex gap-2 mb-3">
      <BButton
        v-b-modal="'modal-value'"
        variant="primary"
        >String Value</BButton
      >
      <BButton
        v-b-modal="['modal-value']"
        variant="success"
        >Array Value</BButton
      >
    </div>
    <BModal
      id="modal-value"
      title="Using Directive Value"
    >
      <p>The modal ID can be specified as a string or array value.</p>
    </BModal>
  </div>
  <!-- #endregion template -->
</template>

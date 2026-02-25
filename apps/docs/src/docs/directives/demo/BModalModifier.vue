<template>
  <!-- #region template -->
  <div>
    <BButton
      v-b-modal.my-modal
      variant="primary"
      >Open Modal</BButton
    >
    <BModal
      id="my-modal"
      title="Using Modifiers"
    >
      <p>The modal ID is specified as a modifier: <code>.my-modal</code></p>
    </BModal>
  </div>
  <!-- #endregion template -->
</template>

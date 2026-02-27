<template>
  <!-- #region template -->
  <div>
    <div class="d-flex gap-2 mb-3">
      <BLink
        v-b-modal
        href="#modal-link"
        @click.prevent
        >BLink with href</BLink
      >
      <a
        v-b-modal
        href="#modal-link"
        @click.prevent
        >Anchor with href</a
      >
    </div>
    <BModal
      id="modal-link"
      title="Triggered from Link"
    >
      <p>The modal ID can be extracted from the <code>href</code> attribute.</p>
    </BModal>
  </div>
  <!-- #endregion template -->
</template>

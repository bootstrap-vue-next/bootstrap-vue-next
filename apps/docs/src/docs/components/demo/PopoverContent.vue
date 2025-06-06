<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BPopover title="Prop Examples" body="Embedding content using properties is easy">
      <template #target>
        <BButton variant="primary">Using properties</BButton>
      </template>
    </BPopover>
    <BPopover>
      <template #target>
        <BButton variant="primary">Using slots</BButton>
      </template>
      <template #title>Content via Slots</template>
      Embedding content <span class="text-danger">using slots</span> affords you
      <em>greater <strong>control.</strong></em> and HTML support.
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

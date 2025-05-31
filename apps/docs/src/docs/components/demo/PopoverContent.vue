<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BButton id="popover-props" variant="primary">Using properties</BButton>
    <BPopover
      target="popover-props"
      title="Prop Examples"
      body="Embedding content using properties is easy"
    />
    <BButton id="popover-slots" variant="primary">Using slots</BButton>
    <BPopover target="popover-slots">
      <template #title>Content via Slots</template>
      Embedding content <span class="text-danger">using slots</span> affords you
      <em>greater <strong>control.</strong></em> and HTML support.
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BButton id="popover-target-default-trigger"> Default Trigger </BButton>
    <BPopover target="popover-target-default-trigger" placement="top" body="Default Trigger" />
    <BButton id="popover-target-click-trigger"> Click Trigger </BButton>
    <BPopover target="popover-target-click-trigger" click placement="top" body="Click Trigger" />
  </div>
  <!-- #endregion template -->
</template>

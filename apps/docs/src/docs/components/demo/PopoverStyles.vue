<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BButton id="popover-style">Button</BButton>

    <BPopover
      :model-value="true"
      target="popover-style"
      title="Danger!"
      style="
        --bs-popover-header-bg: var(--bs-danger);
        --bs-popover-bg: var(--bs-danger-bg-subtle);
        --bs-popover-border-color: var(--bs-emphasis-color);
      "
    >
      This is <strong>important</strong>
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

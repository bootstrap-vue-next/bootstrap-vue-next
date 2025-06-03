<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BPopover
      show
      title="Danger!"
      style="
        --bs-popover-header-bg: var(--bs-danger);
        --bs-popover-bg: var(--bs-danger-bg-subtle);
        --bs-popover-border-color: var(--bs-emphasis-color);
      "
    >
      <template #target>
        <BButton>Button</BButton>
      </template>
      This is <strong>important</strong>
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

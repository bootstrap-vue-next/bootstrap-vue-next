<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BTooltip
      style="--bs-tooltip-color: var(--bs-body-color); --bs-tooltip-bg: var(--bs-danger-bg-subtle)"
    >
      <template #target>
        <BButton>Button</BButton>
      </template>
      This is <strong>important</strong>
    </BTooltip>
  </div>
  <!-- #endregion template -->
</template>

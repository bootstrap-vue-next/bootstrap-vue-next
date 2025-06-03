<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BPopover placement="top" body="Default Trigger">
      <template #target>
        <BButton> Default Trigger </BButton>
      </template>
    </BPopover>
    <BPopover click placement="top" body="Click Trigger">
      <template #target>
        <BButton> Click Trigger </BButton>
      </template>
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

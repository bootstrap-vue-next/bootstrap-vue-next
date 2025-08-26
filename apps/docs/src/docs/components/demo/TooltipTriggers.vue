<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BTooltip
      placement="top"
      body="Default Trigger"
    >
      <template #target>
        <BButton> Default Trigger </BButton>
      </template>
    </BTooltip>
    <BTooltip
      click
      placement="top"
      body="Click Trigger"
    >
      <template #target>
        <BButton> Click Trigger </BButton>
      </template>
    </BTooltip>
  </div>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BPopover
      title-class="text-bg-danger"
      class="text-bg-danger"
      title="Danger!"
      body="Danger variant popover"
    >
      <template #target>
        <BButton>Button</BButton>
      </template>
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

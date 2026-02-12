<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BPopover
      hover
      :delay="{show: 500, hide: 100}"
      title="Delayed Popover"
    >
      <template #target>
        <BButton variant="primary">Hover with delay</BButton>
      </template>
      This popover has a 500ms show delay and 100ms hide delay
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

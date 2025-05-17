<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BButton id="popover-custom-class" href="#" tabindex="0">Button</BButton>
    <BPopover
      target="popover-custom-class"
      title-class="my-popover-title-class"
      body-class="my-popover-body-class"
    >
      <template #title>Popover Title</template>
      Popover content
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

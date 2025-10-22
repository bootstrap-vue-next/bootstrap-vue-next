<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BPopover
      title-class="my-popover-title-class"
      body-class="my-popover-body-class"
    >
      <template #target>
        <BButton
          href="#popover-custom-class"
          tabindex="0"
          >Button</BButton
        >
      </template>
      <template #title>Popover Title</template>
      Popover content
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

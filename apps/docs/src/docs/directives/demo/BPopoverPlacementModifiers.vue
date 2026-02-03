<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap justify-content-center">
    <BButton
      v-b-popover.hover.top="'Popover on top'"
      title="Top"
    >
      Top
    </BButton>
    <BButton
      v-b-popover.hover.bottom="'Popover on bottom'"
      title="Bottom"
    >
      Bottom
    </BButton>
    <BButton
      v-b-popover.hover.left="'Popover on left'"
      title="Left"
    >
      Left
    </BButton>
    <BButton
      v-b-popover.hover.right="'Popover on right'"
      title="Right"
    >
      Right
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

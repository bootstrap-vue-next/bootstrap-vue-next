<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap justify-content-center">
    <BButton
      v-b-tooltip.top="'Tooltip on top'"
      variant="primary"
    >
      Top
    </BButton>
    <BButton
      v-b-tooltip.bottom="'Tooltip on bottom'"
      variant="secondary"
    >
      Bottom
    </BButton>
    <BButton
      v-b-tooltip.left="'Tooltip on left'"
      variant="success"
    >
      Left
    </BButton>
    <BButton
      v-b-tooltip.right="'Tooltip on right'"
      variant="danger"
    >
      Right
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

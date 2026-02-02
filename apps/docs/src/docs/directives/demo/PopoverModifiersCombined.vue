<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <BButton v-b-popover.body.top="'Appended to body, placed at top'"> Body + Top </BButton>
    <BButton v-b-popover.child.bottom="'Appended as child element'"> Child + Bottom </BButton>
    <BButton v-b-popover.inline.hover.right="'Inline positioning with hover'">
      Inline + Hover + Right
    </BButton>
    <BButton v-b-popover.lazy.click="'Lazy rendering on first click'"> Lazy + Click </BButton>
  </div>
  <!-- #endregion template -->
</template>

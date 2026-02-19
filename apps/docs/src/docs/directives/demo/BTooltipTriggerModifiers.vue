<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <BButton
      v-b-tooltip.click="'Click to toggle'"
      variant="primary"
    >
      Click me
    </BButton>
    <BButton
      v-b-tooltip.hover="'Hover to show'"
      variant="secondary"
    >
      Hover me
    </BButton>
    <BButton
      v-b-tooltip.focus="'Focus to show'"
      variant="success"
    >
      Focus me
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

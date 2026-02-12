<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <BButton
      v-b-popover.click="'Click to toggle popover'"
      title="Click Trigger"
    >
      Click
    </BButton>
    <BButton
      v-b-popover.hover="'Hover to show popover'"
      title="Hover Trigger"
    >
      Hover
    </BButton>
    <BButton
      v-b-popover.focus="'Focus to show popover'"
      title="Focus Trigger"
    >
      Focus
    </BButton>
    <BButton
      v-b-popover.manual.show="'Always visible (manual + show)'"
      title="Manual"
    >
      Manual (shown)
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

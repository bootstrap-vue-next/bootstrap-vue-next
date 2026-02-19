<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <BButton
      v-b-tooltip.hover.top="{
        title: 'Appears after 500ms',
        delay: {show: 500, hide: 100},
      }"
      variant="primary"
    >
      Delayed show
    </BButton>

    <BButton
      v-b-tooltip.hover.top="{
        title: 'No delay',
        delay: 0,
      }"
      variant="secondary"
    >
      Instant
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

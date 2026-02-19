<template>
  <!-- #region template -->
  <BButton
    v-b-tooltip.hover.focus.top.body.lazy="{
      title: 'Advanced tooltip',
      delay: {show: 300, hide: 150},
    }"
    variant="primary"
  >
    Combined modifiers
  </BButton>
  <!-- #endregion template -->
</template>

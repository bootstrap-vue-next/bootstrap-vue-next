<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <BButton v-b-popover.hover="{body: 'Default delay', delay: 0}"> No Delay </BButton>
    <BButton v-b-popover.hover="{body: '300ms delay', delay: 300}"> 300ms Delay </BButton>
    <BButton
      v-b-popover.hover="{
        body: 'Custom show/hide delays',
        delay: {show: 500, hide: 100},
      }"
    >
      Custom Delays
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

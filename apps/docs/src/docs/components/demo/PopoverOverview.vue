<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BButton v-b-popover.focus.top="'I am popover directive content!'" title="Popover Title">
      Hover Me
    </BButton>

    <BPopover>
      <template #target> <BButton> Hover Me </BButton></template>
      <template #title>Popover Title</template>
      I am popover <b>component</b> content!
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

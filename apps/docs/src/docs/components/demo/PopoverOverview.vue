<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BButton v-b-popover.focus.top="'I am popover directive content!'" title="Popover Title">
      Hover Me
    </BButton>

    <BButton id="popover-target-1"> Hover Me </BButton>
    <BPopover target="popover-target-1" placement="top">
      <template #title>Popover Title</template>
      I am popover <b>component</b> content!
    </BPopover>
  </div>
  <!-- #endregion template -->
</template>

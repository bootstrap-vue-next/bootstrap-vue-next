<template>
  <!-- #region template -->
  <BButton
    v-b-toggle.collapse-horizontal
    class="m-1"
    >Toggle Horizontal Collapse</BButton
  >

  <div style="min-height: 120px">
    <BCollapse
      id="collapse-horizontal"
      horizontal
    >
      <BCard style="width: 300px">
        I collapse horizontally instead of vertically.
      </BCard>
    </BCollapse>
  </div>
  <!-- #endregion template -->
</template>

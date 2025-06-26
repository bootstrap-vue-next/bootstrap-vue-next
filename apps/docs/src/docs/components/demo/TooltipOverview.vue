<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BTooltip>
      <template #target> <BButton> Hover Me </BButton></template>
      I am tootip <b>component</b> content using the <b>#target</b> slot!
    </BTooltip>

    <BButton id="overview-tooltip"> Hover Me </BButton>
    <BTooltip target="overview-tooltip">
      I am tootlip <b>component</b> content using the <b>target</b> prop!
    </BTooltip>

    <BButton v-b-tooltip.focus.top="'I am tooltip directive content!'"> Hover Me </BButton>
  </div>
  <!-- #endregion template -->
</template>

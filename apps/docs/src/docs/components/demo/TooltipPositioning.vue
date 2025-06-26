<template>
  <!-- #region template -->
  <BContainer>
    <BRow class="my-2">
      <BCol class="d-grid gap-2">
        <BTooltip placement="top">
          <template #target><BButton>Top</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="top-start">
          <template #target><BButton>Top Start</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="top-end">
          <template #target><BButton>Top End</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
      <BCol class="d-grid gap-2">
        <BTooltip placement="bottom">
          <template #target><BButton>Bottom</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="bottom-start">
          <template #target><BButton>Bottom Start</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="bottom-end">
          <template #target><BButton>Bottom End</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
      <BCol class="d-grid gap-2">
        <BTooltip placement="left">
          <template #target><BButton>Left</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="left-start">
          <template #target><BButton>Left Start</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="left-end">
          <template #target><BButton>Left End</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
      <BCol class="d-grid gap-2">
        <BTooltip placement="right">
          <template #target><BButton>Right</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="right-start">
          <template #target><BButton>Right Start</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
        <BTooltip placement="right-end">
          <template #target><BButton>Right End</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
    </BRow>
  </BContainer>
  <BContainer>
    <BRow class="my-2">
      <BCol class="d-grid gap-2">
        <BTooltip placement="auto">
          <template #target><BButton>Auto</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
      <BCol class="d-grid gap-2">
        <BTooltip placement="auto-start">
          <template #target><BButton>Auto Start</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
      <BCol class="d-grid gap-2">
        <BTooltip placement="auto-end">
          <template #target><BButton>Auto End</BButton></template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
    </BRow>
  </BContainer>
  <!-- #endregion template -->
</template>

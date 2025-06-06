<template>
  <!-- #region template -->
  <BContainer>
    <BRow class="my-2">
      <BCol class="d-grid gap-2">
        <BPopover placement="top">
          <template #target><BButton>Top</BButton></template>
          <template #title>Popover Top</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="top-start">
          <template #target><BButton>Top Start</BButton></template>
          <template #title>Popover Top Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="top-end">
          <template #target><BButton>Top End</BButton></template>
          <template #title>Popover Top End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BPopover placement="bottom">
          <template #target><BButton>Bottom</BButton></template>
          <template #title>Popover Bottom</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="bottom-start">
          <template #target><BButton>Bottom Start</BButton></template>
          <template #title>Popover Bottom Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="bottom-end">
          <template #target><BButton>Bottom End</BButton></template>
          <template #title>Popover Bottom End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BPopover placement="left">
          <template #target><BButton>Left</BButton></template>
          <template #title>Popover Left</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="left-start">
          <template #target><BButton>Left Start</BButton></template>
          <template #title>Popover Left Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="left-end">
          <template #target><BButton>Left End</BButton></template>
          <template #title>Popover Left End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BPopover placement="right">
          <template #target><BButton>Right</BButton></template>
          <template #title>Popover Right</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="right-start">
          <template #target><BButton>Right Start</BButton></template>
          <template #title>Popover Right Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BPopover placement="right-end">
          <template #target><BButton>Right End</BButton></template>
          <template #title>Popover Right End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
    </BRow>
  </BContainer>
  <BContainer>
    <BRow class="my-2">
      <BCol class="d-grid gap-2">
        <BPopover placement="auto">
          <template #target><BButton>Auto</BButton></template>
          <template #title>Popover Auto</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BPopover placement="auto-start">
          <template #target><BButton>Auto Start</BButton></template>
          <template #title>Popover Auto Start</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BPopover placement="auto-end">
          <template #target><BButton>Auto End</BButton></template>
          <template #title>Popover Auto End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol></BRow
    ></BContainer
  >
  <!-- #endregion template -->
</template>

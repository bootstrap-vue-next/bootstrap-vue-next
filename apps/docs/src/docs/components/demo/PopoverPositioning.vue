<template>
  <!-- #region template -->
  <BContainer>
    <BRow class="my-2">
      <BCol class="d-grid gap-2">
        <BButton id="popover-target-top"> Top </BButton>
        <BPopover target="popover-target-top" triggers="hover" placement="top">
          <template #title>Popover Top</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-topstart"> Top Start </BButton>
        <BPopover target="popover-target-topstart" triggers="hover" placement="top-start">
          <template #title>Popover Top Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-topend"> Top End </BButton>
        <BPopover target="popover-target-topend" triggers="hover" placement="top-end">
          <template #title>Popover Top End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BButton id="popover-target-bottom"> Bottom </BButton>
        <BPopover target="popover-target-bottom" triggers="hover" placement="bottom">
          <template #title>Popover Bottom</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-bottomstart"> Bottom Start </BButton>
        <BPopover target="popover-target-bottomstart" triggers="hover" placement="bottom-start">
          <template #title>Popover Bottom Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-bottomend"> Bottom End </BButton>
        <BPopover target="popover-target-bottomend" triggers="hover" placement="bottom-end">
          <template #title>Popover Bottom End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BButton id="popover-target-left"> Left </BButton>
        <BPopover target="popover-target-left" triggers="hover" placement="left">
          <template #title>Popover Left</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-leftstart"> Left Start </BButton>
        <BPopover target="popover-target-leftstart" triggers="hover" placement="left-start">
          <template #title>Popover Bottom Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-leftend"> Left End </BButton>
        <BPopover target="popover-target-leftend" triggers="hover" placement="left-end">
          <template #title>Popover Bottom End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BButton id="popover-target-right"> Right </BButton>
        <BPopover target="popover-target-right" triggers="hover" placement="right">
          <template #title>Popover Right</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-rightstart"> Right Start </BButton>
        <BPopover target="popover-target-rightstart" triggers="hover" placement="right-start">
          <template #title>Popover Right Start</template>
          I am popover <b>component</b> content!
        </BPopover>
        <BButton id="popover-target-rightend"> Right End </BButton>
        <BPopover target="popover-target-rightend" triggers="hover" placement="right-end">
          <template #title>Popover Right End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
    </BRow>
  </BContainer>
  <BContainer>
    <BRow class="my-2">
      <BCol class="d-grid gap-2">
        <BButton id="popover-target-auto"> Auto </BButton>
        <BPopover target="popover-target-auto" triggers="hover" placement="auto">
          <template #title>Popover Auto</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BButton id="popover-target-autostart"> Auto Start</BButton>
        <BPopover target="popover-target-autostart" triggers="hover" placement="auto-start">
          <template #title>Popover Auto Start</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
      <BCol class="d-grid gap-2">
        <BButton id="popover-target-autoend"> Auto End </BButton>
        <BPopover target="popover-target-autoend" triggers="hover" placement="auto-end">
          <template #title>Popover Auto End</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol></BRow
    ></BContainer
  >
  <!-- #endregion template -->
</template>

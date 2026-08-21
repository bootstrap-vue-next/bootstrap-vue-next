<template>
  <!-- #region template -->
  <BContainer>
    <BRow class="my-2">
      <BCol
        v-for="group in [['top', 'top-start', 'top-end'], ['bottom', 'bottom-start', 'bottom-end'], ['left', 'left-start', 'left-end'], ['right', 'right-start', 'right-end']]"
        :key="group[0]"
        class="d-grid gap-2"
      >
        <BPopover
          v-for="placement in group"
          :key="placement"
          :placement="placement"
        >
          <template #target>
            <BButton>{{ placement }}</BButton>
          </template>
          <template #title>Popover {{ placement }}</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
    </BRow>
  </BContainer>
  <BContainer>
    <BRow class="my-2">
      <BCol
        v-for="placement in ['auto', 'auto-start', 'auto-end']"
        :key="placement"
        class="d-grid gap-2"
      >
        <BPopover :placement="placement">
          <template #target>
            <BButton>{{ placement }}</BButton>
          </template>
          <template #title>Popover {{ placement }}</template>
          I am popover <b>component</b> content!
        </BPopover>
      </BCol>
    </BRow>
  </BContainer>
  <!-- #endregion template -->
</template>

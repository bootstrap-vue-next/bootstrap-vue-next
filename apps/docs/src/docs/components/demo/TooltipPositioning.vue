<template>
  <!-- #region template -->
  <BContainer>
    <BRow class="my-2">
      <BCol
        v-for="group in [['top', 'top-start', 'top-end'], ['bottom', 'bottom-start', 'bottom-end'], ['left', 'left-start', 'left-end'], ['right', 'right-start', 'right-end']]"
        :key="group[0]"
        class="d-grid gap-2"
      >
        <BTooltip
          v-for="placement in group"
          :key="placement"
          :placement="placement"
        >
          <template #target>
            <BButton>{{ placement }}</BButton>
          </template>
          I am tooltip <b>component</b> content!
        </BTooltip>
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
        <BTooltip :placement="placement">
          <template #target>
            <BButton>{{ placement }}</BButton>
          </template>
          I am tooltip <b>component</b> content!
        </BTooltip>
      </BCol>
    </BRow>
  </BContainer>
  <!-- #endregion template -->
</template>

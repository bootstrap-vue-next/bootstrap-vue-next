<template>
  <!-- #region template -->
  <BContainer>
    <BRow class="my-2">
      <BCol
        v-for="group in [['top', 'top-start', 'top-end'], ['bottom', 'bottom-start', 'bottom-end'], ['left', 'left-start', 'left-end'], ['right', 'right-start', 'right-end']]"
        :key="group[0]"
        class="d-grid gap-2"
      >
        <BDropdown
          v-for="placement in group"
          :key="placement"
          :placement="placement"
          :text="placement"
          variant="primary"
        >
          <BDropdownItem>Action</BDropdownItem>
          <BDropdownItem>Another action</BDropdownItem>
          <BDropdownItem>Something else here</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
  </BContainer>
  <!-- #endregion template -->
</template>

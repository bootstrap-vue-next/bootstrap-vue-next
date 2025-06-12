<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <BDropdown
      text="Button text via Prop"
      class="me-2"
    >
      <BDropdownItem href="#">An item</BDropdownItem>
      <BDropdownItem href="#">Another item</BDropdownItem>
    </BDropdown>
    <BDropdown class="me-2">
      <template #button-content>
        Custom <strong>Content</strong> with <em>HTML</em> via Slot
      </template>
      <BDropdownItem href="#">An item</BDropdownItem>
      <BDropdownItem href="#">Another item</BDropdownItem>
    </BDropdown>
  </div>
  <!-- #endregion template -->
</template>

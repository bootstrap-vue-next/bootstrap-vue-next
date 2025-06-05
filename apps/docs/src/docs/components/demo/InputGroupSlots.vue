<template>
  <!-- #region template -->
  <BInputGroup>
    <template #prepend>
      <BInputGroupText>Username</BInputGroupText>
    </template>
    <BFormInput />
    <template #append>
      <BDropdown
        text="Dropdown"
        variant="success"
      >
        <BDropdownItem>Action A</BDropdownItem>
        <BDropdownItem>Action B</BDropdownItem>
      </BDropdown>
    </template>
  </BInputGroup>
  <!-- #endregion template -->
</template>

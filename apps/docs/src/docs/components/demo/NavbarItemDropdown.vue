<template>
  <!-- #region template -->
  <BNavbar
    v-b-color-mode="'dark'"
    variant="dark"
  >
    <BNavbarNav>
      <BNavItem href="#bnavitemdropdown">Home</BNavItem>
      <BNavItemDropdown
        text="Lang"
        right
      >
        <BDropdownItem href="#bnavitemdropdown">EN</BDropdownItem>
        <BDropdownItem href="#bnavitemdropdown">ES</BDropdownItem>
        <BDropdownItem href="#bnavitemdropdown">RU</BDropdownItem>
        <BDropdownItem href="#bnavitemdropdown">FA</BDropdownItem>
      </BNavItemDropdown>
      <BNavItemDropdown
        text="User"
        right
      >
        <BDropdownItem href="#bnavitemdropdown">Account</BDropdownItem>
        <BDropdownItem href="#bnavitemdropdown">Settings</BDropdownItem>
      </BNavItemDropdown>
    </BNavbarNav>
  </BNavbar>
  <!-- #endregion template -->
</template>

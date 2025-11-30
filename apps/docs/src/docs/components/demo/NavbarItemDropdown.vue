<template>
  <!-- #region template -->
  <BNavbar v-b-color-mode="'dark'" variant="dark">
    <BNavbarNav>
      <BNavItem href="#">Home</BNavItem>
      <BNavItemDropdown text="Lang" right>
        <BDropdownItem href="#">EN</BDropdownItem>
        <BDropdownItem href="#">ES</BDropdownItem>
        <BDropdownItem href="#">RU</BDropdownItem>
        <BDropdownItem href="#">FA</BDropdownItem>
      </BNavItemDropdown>
      <BNavItemDropdown text="User" right>
        <BDropdownItem href="#">Account</BDropdownItem>
        <BDropdownItem href="#">Settings</BDropdownItem>
      </BNavItemDropdown>
    </BNavbarNav>
  </BNavbar>
  <!-- #endregion template -->
</template>

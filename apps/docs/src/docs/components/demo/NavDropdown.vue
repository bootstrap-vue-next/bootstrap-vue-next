<template>
  <!-- #region template -->
  <BNav pills>
    <BNavItem
      active
      href="#nav-dropdown"
      >Active</BNavItem
    >
    <BNavItem href="#nav-dropdown">Link</BNavItem>
    <BNavItemDropdown
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      right
    >
      <BDropdownItem>One</BDropdownItem>
      <BDropdownItem>Two</BDropdownItem>
      <BDropdownDivider />
      <BDropdownItem>Three</BDropdownItem>
    </BNavItemDropdown>
  </BNav>
  <!-- #endregion template -->
</template>

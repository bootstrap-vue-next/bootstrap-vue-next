<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4 class="my-3">Nav with a dropdown</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BNav pills>
          <BNavItem active>Active</BNavItem>
          <BNavItem>Link</BNavItem>
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
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Nav with a dropdown and a custom Button Icon</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BNav pills>
          <BNavItem active>Active</BNavItem>
          <BNavItem>Link</BNavItem>
          <BNavItemDropdown text="Custom Button Icon" no-caret variant="link">
            <template #button-content>
              <img src="../../assets/logo.png" style="height: 1em" />
            </template>
            <BDropdownItem href="#">Action</BDropdownItem>
          </BNavItemDropdown>
        </BNav>
      </BCol>
    </BRow>
  </BContainer>
</template>

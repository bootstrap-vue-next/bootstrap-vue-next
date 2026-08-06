<template>
  <div>
    <BLink
      id="direct-link"
      to="/direct"
    >
      Direct
    </BLink>

    <BButton
      id="button-link"
      to="/button"
    >
      Button
    </BButton>

    <BNavItem
      to="/nav-item"
      :link-attrs="{id: 'nav-item-link'}"
    >
      NavItem
    </BNavItem>

    <BDropdownItem
      id="dropdown-item-link"
      to="/dropdown-item"
    >
      DropdownItem
    </BDropdownItem>
  </div>
</template>

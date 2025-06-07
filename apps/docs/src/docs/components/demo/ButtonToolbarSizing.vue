<template>
  <!-- #region template -->
  <div>
    <BButtonToolbar aria-label="Toolbar with size sm">
      <BButtonGroup
        size="sm"
        class="mx-1"
      >
        <BButton>New</BButton>
        <BButton>Edit</BButton>
        <BButton>Undo</BButton>
      </BButtonGroup>
    </BButtonToolbar>
  </div>
  <div class="mt-2">
    <BButtonToolbar aria-label="Toolbar with dropdown size sm">
      <BDropdown
        size="sm"
        class="mx-1"
        placement="right"
        text="menu"
      >
        <BDropdownItem>Item 1</BDropdownItem>
        <BDropdownItem>Item 2</BDropdownItem>
        <BDropdownItem>Item 3</BDropdownItem>
      </BDropdown>
    </BButtonToolbar>
  </div>
  <div class="mt-2">
    <BButtonToolbar aria-label="Toolbar with size lg">
      <BButtonGroup
        size="lg"
        class="mx-1"
      >
        <BButton>New</BButton>
        <BButton>Edit</BButton>
        <BButton>Undo</BButton>
      </BButtonGroup>
    </BButtonToolbar>
  </div>
  <div class="mt-2">
    <BButtonToolbar aria-label="Toolbar with dropdown size lg">
      <BDropdown
        size="lg"
        class="mx-1"
        placement="right"
        text="menu"
      >
        <BDropdownItem>Item 1</BDropdownItem>
        <BDropdownItem>Item 2</BDropdownItem>
        <BDropdownItem>Item 3</BDropdownItem>
      </BDropdown>
    </BButtonToolbar>
  </div>
  <!-- #endregion template -->
</template>

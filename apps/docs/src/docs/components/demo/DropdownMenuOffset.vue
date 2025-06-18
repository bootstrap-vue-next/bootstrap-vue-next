<template>
  <div class="d-flex flex-wrap gap-2">
    <!-- #region template -->
    <BDropdown
      offset="25"
      text="Offset Dropdown"
      class="me-2"
    >
      <BDropdownItem href="#">Action</BDropdownItem>
      <BDropdownItem href="#">Another action</BDropdownItem>
      <BDropdownItem href="#">Something else here</BDropdownItem>
    </BDropdown>
    <BDropdown
      :offset="{alignmentAxis: 50, crossAxis: 60, mainAxis: 70}"
      text="Offset Dropdown 2 dimensions"
      class="me-2"
    >
      <BDropdownItem href="#">Action</BDropdownItem>
      <BDropdownItem href="#">Another action</BDropdownItem>
      <BDropdownItem href="#">Something else here</BDropdownItem>
    </BDropdown>
    <!-- #endregion template -->
  </div>
</template>

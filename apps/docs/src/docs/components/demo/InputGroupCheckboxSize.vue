<template>
  <!-- #region template -->
  <BInputGroup
    size="sm"
    prepend="Small"
    class="mb-2"
  >
    <BFormInput aria-label="Small text input with custom switch" />
    <BInputGroupText>
      <BFormCheckbox
        switch
        class="me-n2 mb-n1"
      >
        <span class="visually-hidden">Checkbox for previous text input</span>
      </BFormCheckbox>
    </BInputGroupText>
  </BInputGroup>
  <BInputGroup
    size="lg"
    prepend="Large"
    class="mb-2"
  >
    <BFormInput aria-label="Large text input with switch" />
    <BInputGroupText>
      <BFormCheckbox
        switch
        class="me-n2"
      >
        <span class="visually-hidden">Switch for previous text input</span>
      </BFormCheckbox>
    </BInputGroupText>
  </BInputGroup>
  <!-- #endregion template -->
</template>

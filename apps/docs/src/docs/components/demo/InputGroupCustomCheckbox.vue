<template>
  <!-- #region template -->
  <BInputGroup class="mb-2">
    <BInputGroupText>
      <BFormCheckbox class="me-n2">
        <span class="visually-hidden">Checkbox for following text input</span>
      </BFormCheckbox>
    </BInputGroupText>
    <BFormInput aria-label="Text input with checkbox" />
  </BInputGroup>
  <BInputGroup class="mb-2">
    <BInputGroupText>
      <BFormRadio class="me-n2">
        <span class="visually-hidden">Radio for following text input</span>
      </BFormRadio>
    </BInputGroupText>
    <BFormInput aria-label="Text input with radio input" />
  </BInputGroup>
  <BInputGroup>
    <BInputGroupText>
      <BFormCheckbox switch class="me-n2">
        <span class="visually-hidden">Switch for following text input</span>
      </BFormCheckbox>
    </BInputGroupText>
    <BFormInput aria-label="Text input with switch" />
  </BInputGroup>
  <!-- #endregion template -->
</template>

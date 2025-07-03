<template>
  <!-- #region template -->
  <BInputGroup
    prepend="$"
    append=".00"
  >
    <BFormInput />
  </BInputGroup>
  <BInputGroup
    prepend="0"
    append="100"
    class="mt-3"
  >
    <BFormInput
      type="range"
      min="0"
      max="100"
      class="form-control"
    />
  </BInputGroup>
  <!-- #endregion template -->
</template>

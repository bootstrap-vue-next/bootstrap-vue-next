<template>
  <!-- #region template -->
  <BRow>
    <BCol sm="2">
      <label for="textarea-small">Small:</label>
    </BCol>
    <BCol sm="10">
      <BFormTextarea
        id="textarea-small"
        size="sm"
        placeholder="Small textarea"
      />
    </BCol>
  </BRow>
  <BRow class="mt-2">
    <BCol sm="2">
      <label for="textarea-default">Default:</label>
    </BCol>
    <BCol sm="10">
      <BFormTextarea
        id="textarea-default"
        placeholder="Default textarea"
      />
    </BCol>
  </BRow>
  <BRow class="mt-2">
    <BCol sm="2">
      <label for="textarea-large">Large:</label>
    </BCol>
    <BCol sm="10">
      <BFormTextarea
        id="textarea-large"
        size="lg"
        placeholder="Large textarea"
      />
    </BCol>
  </BRow>
  <!-- #endregion template -->
</template>

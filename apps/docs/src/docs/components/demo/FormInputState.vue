<template>
  <!-- #region template -->
  <BRow class="my-1">
    <BCol sm="3">
      <label for="input-none">No State:</label>
    </BCol>
    <BCol sm="9">
      <BFormInput
        id="input-none"
        :state="null"
        placeholder="No validation"
      />
    </BCol>
  </BRow>
  <BRow class="my-1">
    <BCol sm="3">
      <label for="input-valid">Valid State:</label>
    </BCol>
    <BCol sm="9">
      <BFormInput
        id="input-valid"
        :state="true"
        placeholder="Valid input"
      />
    </BCol>
  </BRow>
  <BRow class="my-1">
    <BCol sm="3">
      <label for="input-invalid">Invalid State:</label>
    </BCol>
    <BCol sm="9">
      <BFormInput
        id="input-invalid"
        :state="false"
        placeholder="Invalid input"
      />
    </BCol>
  </BRow>
  <!-- #endregion template -->
</template>

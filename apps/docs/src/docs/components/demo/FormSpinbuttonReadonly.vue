<template>
  <!-- #region template -->
  <BRow>
    <BCol
      md="6"
      class="mb-2"
    >
      <label for="sb-disabled">Disabled spin button</label>
      <BFormSpinbutton
        id="sb-disabled"
        disabled
        placeholder="--"
      />
    </BCol>
    <BCol
      md="6"
      class="mb-2"
    >
      <label
        for="sb-readonly"
        class=""
        >Readonly spin button</label
      >
      <BFormSpinbutton
        id="sb-readonly"
        readonly
        placeholder="--"
      />
    </BCol>
  </BRow>
  <!-- #endregion template -->
</template>

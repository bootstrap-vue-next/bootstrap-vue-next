<template>
  <!-- #region template -->
  <BContainer class="bv-example-row">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <BRow>
      <BCol
        cols="12"
        md="8"
        >cols="12" md="8"</BCol
      >
      <BCol
        cols="6"
        md="4"
        >cols="6" md="4"</BCol
      >
    </BRow>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <BRow>
      <BCol
        cols="6"
        md="4"
        >cols="6" md="4"</BCol
      >
      <BCol
        cols="6"
        md="4"
        >cols="6" md="4"</BCol
      >
      <BCol
        cols="6"
        md="4"
        >cols="6" md="4"</BCol
      >
    </BRow>

    <!-- Columns are always 50% wide, on mobile and desktop -->
    <BRow>
      <BCol cols="6">cols="6"</BCol>
      <BCol cols="6">cols="6"</BCol>
    </BRow>
  </BContainer>
  <!-- #endregion template -->
</template>

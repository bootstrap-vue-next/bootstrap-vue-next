<template>
  <!-- #region template -->
  <BContainer fluid class="bv-example-row">
    <BRow class="mb-3">
      <BCol>First in DOM, no order applied</BCol>
      <BCol order="5">Second in DOM, with a larger order</BCol>
      <BCol order="1">Third in DOM, with an order of 1</BCol>
    </BRow>

    <BRow class="mb-3">
      <BCol order="5">First in DOM, with order of 65</BCol>
      <BCol order="1">Second in DOM, with an order of 1</BCol>
      <BCol>Third in DOM, no order applied</BCol>
    </BRow>
  </BContainer>
  <!-- #endregion template -->
</template>

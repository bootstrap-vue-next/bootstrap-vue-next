<template>
  <!-- #region template -->
  <h5>No label</h5>
  <BProgress :value="33.3333" :max="50" />
  <h5>Value label</h5>
  <BProgress :value="33.3333" :max="50" show-value />
  <h5>Progress label</h5>
  <BProgress :value="33.3333" :max="50" show-progress />
  <h5>Value label with precision</h5>
  <BProgress :value="33.3333" :max="50" :precision="2" show-value />
  <h5>Progress label with precision</h5>
  <BProgress :value="33.3333" :max="50" :precision="2" show-progress />
  <!-- #endregion template -->
</template>

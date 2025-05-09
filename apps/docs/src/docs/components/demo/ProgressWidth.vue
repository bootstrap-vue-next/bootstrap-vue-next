<template>
  <!-- #region template -->
  <h5>Default width</h5>
  <BProgress :value="75" class="mb-3" />

  <h5>Custom widths</h5>
  <BProgress :value="75" class="w-75 mb-2" />
  <BProgress :value="75" class="w-50 mb-2" />
  <BProgress :value="75" class="w-25" />
  <!-- #endregion template -->
</template>

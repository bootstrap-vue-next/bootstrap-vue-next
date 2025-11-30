<template>
  <div class="d-flex gap-2">
    <!-- #region template -->
    <BButton :loading="true">Button</BButton>
    <BButton :loading="true" loading-fill>Button</BButton>
    <BButton :loading="true" loading-text="Please Wait...">Button</BButton>
    <BButton :loading="false" loading-text="Please Wait...">Button</BButton>
    <!-- #endregion template -->
  </div>
</template>

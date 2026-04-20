<template>
  <!-- #region template -->
  <BAlert :model-value="true" variant="warning" dismissible>
    <template #title>
      <span class="fw-bold">⚠️ Heads up!</span>
    </template>
    <p class="mb-0">
      The <code>title</code> slot lets you render custom markup in the alert heading — icons,
      badges, or any components you like.
    </p>
  </BAlert>
  <!-- #endregion template -->
</template>

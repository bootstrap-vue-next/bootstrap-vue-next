<template>
  <!-- #region template -->
  <BButton
    v-b-toggle.collapse-1
    variant="primary"
    >Toggle Collapse</BButton
  >

  <BCollapse id="collapse-1">
    <BCard class="mt-4">
      <p class="card-text">Collapse contents Here</p>
      <BButton
        v-b-toggle.collapse-1-inner
        size="sm"
        >Toggle Inner Collapse</BButton
      >
      <BCollapse id="collapse-1-inner">
        <BCard class="mt-4">Hello!</BCard>
      </BCollapse>
    </BCard>
  </BCollapse>
  <!-- #endregion template -->
</template>

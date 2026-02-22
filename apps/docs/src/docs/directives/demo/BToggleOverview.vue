<template>
  <!-- #region template -->
  <div>
    <BButton
      v-b-toggle.collapse-overview
      variant="primary"
      >Toggle Collapse</BButton
    >
    <BCollapse
      id="collapse-overview"
      class="mt-3"
    >
      <BCard>
        <p class="card-text">This content can be toggled visible or hidden.</p>
      </BCard>
    </BCollapse>
  </div>
  <!-- #endregion template -->
</template>

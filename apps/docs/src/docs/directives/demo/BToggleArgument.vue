<template>
  <!-- #region template -->
  <div>
    <BButton
      v-b-toggle:collapse-argument
      variant="primary"
      >Toggle with Argument</BButton
    >
    <BCollapse
      id="collapse-argument"
      class="mt-3"
    >
      <BCard>
        <p class="card-text">Toggled using <code>v-b-toggle:collapse-argument</code></p>
      </BCard>
    </BCollapse>
  </div>
  <!-- #endregion template -->
</template>

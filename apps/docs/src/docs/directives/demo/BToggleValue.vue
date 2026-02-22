<template>
  <!-- #region template -->
  <div>
    <BButton
      v-b-toggle="'collapse-value'"
      variant="primary"
      >Toggle with Value</BButton
    >
    <BCollapse
      id="collapse-value"
      class="mt-3"
    >
      <BCard>
        <p class="card-text">Toggled using <code>v-b-toggle="'collapse-value'"</code></p>
      </BCard>
    </BCollapse>
  </div>
  <!-- #endregion template -->
</template>

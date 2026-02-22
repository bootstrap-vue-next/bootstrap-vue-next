<template>
  <!-- #region template -->
  <BButton
    v-b-toggle.collapse-modifier
    variant="primary"
  >
    Toggle with Modifier
  </BButton>

  <BCollapse
    id="collapse-modifier"
    class="mt-3"
  >
    <BCard>
      <p class="card-text">Toggled using <code>v-b-toggle.collapse-modifier</code></p>
    </BCard>
  </BCollapse>
  <!-- #endregion template -->
</template>

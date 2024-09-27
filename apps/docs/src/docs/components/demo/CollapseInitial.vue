<template>
  <!-- #region template -->
  <!-- Using modifiers -->
  <BButton v-b-toggle.collapse-3 class="m-1">Toggle Collapse</BButton>

  <BCollapse id="collapse-3" visible>
    <BCard class="mt-4">I should start open!</BCard>
  </BCollapse>
  <!-- #endregion template -->
</template>

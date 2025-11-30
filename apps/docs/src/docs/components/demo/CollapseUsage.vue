<template>
  <!-- #region template -->
  <!-- Using modifiers -->
  <BButton v-b-toggle.collapse-2 class="m-1">Toggle Collapse</BButton>

  <!-- Using value -->
  <BButton v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</BButton>

  <!-- Element to collapse -->
  <BCollapse id="collapse-2">
    <BCard class="mt-4">I am collapsible content!</BCard>
  </BCollapse>
  <!-- #endregion template -->
</template>

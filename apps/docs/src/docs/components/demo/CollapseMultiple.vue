<template>
  <!-- #region template -->
  <div class="d-flex gap-2">
    <!-- Via multiple directive modifiers -->
    <BButton v-b-toggle.collapse-a.collapse-b>Toggle Collapse A and B</BButton>
    <!-- Via space separated string of Ids passed to directive value -->
    <BButton v-b-toggle="'collapse-a collapse-b'">Toggle Collapse A and B</BButton>
    <!-- Via array of string Ids passed to directive value -->
    <BButton v-b-toggle="['collapse-a', 'collapse-b']">Toggle Collapse A and B</BButton>
  </div>
  <!-- Elements to collapse -->
  <BCollapse id="collapse-a">
    <BCard class="mt-4">I am collapsible content A!</BCard>
  </BCollapse>
  <BCollapse id="collapse-b">
    <BCard class="mt-4">I am collapsible content B!</BCard>
  </BCollapse>
  <!-- #endregion template -->
</template>

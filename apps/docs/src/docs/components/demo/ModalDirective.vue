<template>
  <div>
    <!-- #region template -->
    <div class="d-flex gap-2">
      <!-- Using modifiers -->
      <BButton v-b-modal.directive-modal>Show Modal</BButton>

      <!-- Using value -->
      <BButton v-b-modal="'directive-modal'">Show Modal</BButton>
    </div>
    <!-- The modal -->
    <BModal id="directive-modal">Hello From My Modal!</BModal>
    <!-- #endregion template -->
  </div>
</template>

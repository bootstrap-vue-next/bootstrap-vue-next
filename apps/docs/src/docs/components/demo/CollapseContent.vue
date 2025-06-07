<template>
  <!-- #region template -->
  <BCollapse id="my-collapse">
    <template #header="{visible, toggle, id}">
      <BButton
        variant="primary"
        :aria-expanded="visible"
        :aria-controls="id"
        @click="toggle"
      >
        <span>{{ visible ? 'Close' : 'Open' }}</span> My Collapse
      </BButton>
    </template>
    <!-- Content here -->
    <div class="mt-2">This is data that is being collapsed</div>
  </BCollapse>
  <!-- #endregion template -->
</template>

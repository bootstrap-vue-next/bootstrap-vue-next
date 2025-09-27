<template>
  <!-- #region template -->
  <BTabs>
    <!-- Add your b-tab components here -->
    <template #tabs-end>
      <BNavItem
        href="#tabs-empty"
        role="presentation"
        @click="() => {}"
        >Another tab</BNavItem
      >
      <li
        role="presentation"
        class="nav-item align-self-center"
      >
        Plain text
      </li>
    </template>
  </BTabs>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <div class="d-flex flex-column gap-3">
    <BFormOtp type="numeric" :length="4" />
    <BFormOtp type="alphanumeric" :length="4" />
    <BFormOtp type="alpha" :length="4" />
  </div>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <div class="d-flex flex-column gap-3">
    <BFormOtp size="sm" :length="4" />
    <BFormOtp :length="4" />
    <BFormOtp size="lg" :length="4" />
  </div>
  <!-- #endregion template -->
</template>

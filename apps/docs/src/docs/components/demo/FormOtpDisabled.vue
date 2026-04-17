<template>
  <!-- #region template -->
  <div class="d-flex flex-column gap-3">
    <BFormOtp disabled :length="4" />
    <BFormOtp readonly :length="4" />
  </div>
  <!-- #endregion template -->
</template>

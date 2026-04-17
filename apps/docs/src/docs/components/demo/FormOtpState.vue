<template>
  <!-- #region template -->
  <div class="d-flex flex-column gap-3">
    <BFormOtp :state="true" :length="4" />
    <BFormOtp :state="false" :length="4" />
  </div>
  <!-- #endregion template -->
</template>

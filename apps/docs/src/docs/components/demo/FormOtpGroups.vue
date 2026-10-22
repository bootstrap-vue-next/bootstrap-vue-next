<template>
  <!-- #region template -->
  <div class="d-flex flex-column gap-3">
    <BFormOtp :groups="[3, 3]" />
    <BFormOtp :groups="[2]" separator="-" connected />
  </div>
  <!-- #endregion template -->
</template>

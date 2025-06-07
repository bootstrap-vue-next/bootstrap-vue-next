<template>
  <!-- #region template -->
  <BCard>
    <BFormGroup
      :state="false"
      class="mb-2"
    >
      <BFormInput />
    </BFormGroup>
    <BFormGroup :state="false">
      <!-- Use the state prop to override this behavior -->
      <BFormInput :state="null" />
    </BFormGroup>
  </BCard>
  <!-- #endregion template -->
</template>

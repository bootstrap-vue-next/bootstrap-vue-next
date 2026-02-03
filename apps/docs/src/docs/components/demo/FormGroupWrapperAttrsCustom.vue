<template>
  <BFormGroup
    label="Active:"
    label-for="status"
    label-align-md="end"
    label-cols-md="3"
    :label-wrapper-attrs="{
      class: 'custom-label-field',
    }"
  >
    <BFormCheckbox
      id="status"
      switch
    />
  </BFormGroup>
</template>

<style scoped>
@media (min-width: 768px) {
  :deep(.custom-label-field) {
    flex: 0 0 120px !important;
    max-width: 120px !important;
  }
}
</style>

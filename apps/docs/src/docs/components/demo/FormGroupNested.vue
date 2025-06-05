<template>
  <!-- #region template -->
  <BCard bg-variant="light">
    <BFormGroup
      label-cols-lg="3"
      label="Shipping Address"
      label-size="lg"
      label-class="fw-bold pt-0"
      class="mb-0"
    >
      <BFormGroup
        label="Street:"
        label-for="nested-street"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-street" />
      </BFormGroup>
      <BFormGroup
        label="City:"
        label-for="nested-city"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-city" />
      </BFormGroup>
      <BFormGroup
        label="State:"
        label-for="nested-state"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-state" />
      </BFormGroup>
      <BFormGroup
        label="Country:"
        label-for="nested-country"
        label-cols-sm="3"
        label-align-sm="end"
      >
        <BFormInput id="nested-country" />
      </BFormGroup>
      <BFormGroup
        label="Ship via:"
        label-cols-sm="3"
        label-align-sm="end"
        class="mb-0"
      >
        <BFormRadioGroup
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
        />
      </BFormGroup>
    </BFormGroup>
  </BCard>
  <!-- #endregion template -->
</template>

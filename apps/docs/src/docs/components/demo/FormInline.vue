<template>
  <!-- #region template -->
  <BForm class="d-flex flex-row align-items-center flex-wrap">
    <label class="col-form-label visually-hidden" for="inline-form-input-name">Name</label>
    <div class="col-lg-3 me-2 my-2">
      <BFormInput id="inline-form-input-name" placeholder="Jane Doe" />
    </div>
    <label class="col-form-label visually-hidden" for="inline-form-input-username">Username</label>
    <div class="col-lg-3 me-2 my-2">
      <BInputGroup prepend="@" class="col-lg-4">
        <BFormInput id="inline-form-input-username" placeholder="Username" />
      </BInputGroup>
    </div>
    <div class="col-lg-3 me-2 my-2">
      <BFormCheckbox>Remember me</BFormCheckbox>
    </div>
    <div class="col-lg-1 my-2">
      <BButton variant="primary">Save</BButton>
    </div>
  </BForm>
  <!-- #endregion template -->
</template>

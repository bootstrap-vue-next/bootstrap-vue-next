<template>
  <!-- #region template -->
  <BDropdown
    text="Dropdown with inline form"
    auto-close="outside"
  >
    <BDropdownForm form-class="d-flex flex-row align-items-center flex-wrap">
      <BFormGroup
        label="Email:"
        label-for="email-inline"
        label-cols="3"
        label-align="end"
      >
        <BFormInput
          id="email-inline"
          type="email"
          placeholder="Enter email"
          required
        />
      </BFormGroup>
      <BFormGroup
        label="Password:"
        label-for="password-inline"
        label-cols="4"
        label-align="end"
      >
        <BFormInput
          id="password-inline"
          type="password"
          required
        />
      </BFormGroup>
    </BDropdownForm>
    <BDropdownDivider />
    <BDropdownItemButton>New around here? Sign up</BDropdownItemButton>
    <BDropdownItemButton>Forget Password</BDropdownItemButton>
  </BDropdown>
  <!-- #endregion template -->
</template>

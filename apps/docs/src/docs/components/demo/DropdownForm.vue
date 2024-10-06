<template>
  <!-- #region template -->
  <BDropdown text="Dropdown with form" auto-close="outside">
    <BDropdownForm>
      <BFormGroup
        label="Email address:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <BFormInput id="email" type="email" placeholder="Enter email" required />
      </BFormGroup>
      <BFormGroup
        label="Passoword:"
        label-for="password"
        description="We'll never share your email with anyone else."
      >
        <BFormInput id="password" type="password" required />
      </BFormGroup>
      <BFormCheckbox id="remember" name="remember" value="remember" checked>
        Remember me</BFormCheckbox
      >
      <BButton type="submit" variant="primary">Sign In</BButton>
    </BDropdownForm>
    <BDropdownDivider />
    <BDropdownItemButton>New around here? Sign up</BDropdownItemButton>
    <BDropdownItemButton>Forget Password</BDropdownItemButton>
  </BDropdown>
  <!-- #endregion template -->
</template>

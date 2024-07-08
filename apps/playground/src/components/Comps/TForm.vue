<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BForm @submit.stop.prevent>
          <label for="text-password">Password</label>
          <BFormInput
            id="text-password"
            type="password"
            aria-describedby="password-help-block"
            aria-invalid
          />
          <BFormText id="password-help-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.
          </BFormText>
        </BForm>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BForm floating>
          <BFormInput id="floatingFormInputValue" type="email" placeholder="name@example.com" />
          <label for="floatingFormInputValue">Input with value</label>
        </BForm>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <!-- floating counterexample - only the first control in the form shows the floating label -->
        <BForm floating>
          <BFormInput id="floatingFormInputValue" type="email" placeholder="name@example.com" />
          <label for="floatingFormInputValue">Input with value</label>
          <BFormInput id="floatingFormPasswordValue" type="password" />
          <label for="floatingFormPasswordValue">Input with value</label>
        </BForm>
      </BCol>
    </BRow>
  </BContainer>
</template>

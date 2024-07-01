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
    <BRow
      ><BCol>
        <BForm>
          <BFormFloatingLabel label="Email address" label-for="floatingEmail" class="my-2">
            <BFormInput id="floatingEmail" type="email" placeholder="Email address" />
          </BFormFloatingLabel>
          <BFormFloatingLabel label="Password" label-for="floatingPassword" class="my-2">
            <BFormInput id="floatingPassword" type="password" placeholder="Password" />
          </BFormFloatingLabel>
        </BForm> </BCol
    ></BRow>
  </BContainer>
</template>

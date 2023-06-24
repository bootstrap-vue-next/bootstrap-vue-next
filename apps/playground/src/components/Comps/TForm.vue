<template>
  <BContainer fluid>
    <!-- TODO doing @submit.stop.prevent alone is not allowed -->
    <!-- This is an issue for people that want to stop propogation -->
    <!-- A workaround is to do () => {} -->
    <!-- But that's not a great solution -->
    <BRow>
      <BCol>
        <BForm @submit.stop.prevent="() => {}">
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
  </BContainer>
</template>

<template>
  <b-container fluid>
    <!-- TODO doing @submit.stop.prevent alone is not allowed -->
    <!-- This is an issue for people that want to stop propogation -->
    <!-- A workaround is to do () => {} -->
    <!-- But that's not a great solution -->
    <b-row>
      <b-col>
        <b-form @submit.stop.prevent="() => {}">
          <label for="text-password">Password</label>
          <b-form-input
            id="text-password"
            type="password"
            aria-describedby="password-help-block"
            aria-invalid
          />
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

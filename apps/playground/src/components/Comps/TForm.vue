<template>
  <div class="my-2">
    <h2>Form</h2>
    <!-- TODO doing @submit.stop.prevent alone is not allowed -->
    <!-- This is an issue for people that want to stop propogation -->
    <!-- A workaround is to do () => {} -->
    <!-- But that's not a great solution -->
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
  </div>
</template>

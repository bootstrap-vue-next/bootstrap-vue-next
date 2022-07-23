<template>
  <div class="my-2">
    <div>
      <h2>Avatars</h2>
      <b-avatar button class="me-1" icon="person-fill" variant="secondary" />
      <b-avatar button class="me-1" text="BV" />
      <b-avatar button class="me-5" src="https://placekitten.com/300/300" />

      <b-avatar class="me-2" icon="person-fill" size="sm" square />
      <b-avatar class="me-2" icon="person-fill" variant="success" rounded />
      <b-avatar class="me-5" icon="person-fill" variant="warning" size="lg" />

      <b-avatar class="me-2" text="ED" size="sm" square text-variant="dark" />
      <b-avatar class="me-2" text="ED" variant="success" rounded />
      <b-avatar class="me-5" text="ED" variant="warning" text-variant="danger" size="lg" />

      <b-avatar class="me-2" src="https://placekitten.com/300/300" button size="sm" square />
      <b-avatar class="me-2" src="https://placekitten.com/300/300" button rounded />
      <b-avatar class="me-5" src="https://placekitten.com/300/300" button size="lg" />

      <b-avatar class="me-2" size="lg">
        <span class="fw-bold">custom</span>
      </b-avatar>
    </div>
  </div>
</template>

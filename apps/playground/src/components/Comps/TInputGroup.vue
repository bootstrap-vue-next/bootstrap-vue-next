<template>
  <div class="my-2">
    <h2>Input Group</h2>
    <div>
      <b-input-group prepend="@" class="mb-3">
        <b-form-input placeholder="Username" />
      </b-input-group>

      <b-input-group append="@example.com" class="mb-3">
        <b-form-input placeholder="Recipient's username" />
      </b-input-group>

      <label>Your vanity URL</label>
      <b-input-group prepend="https://example.com/users/" class="mb-3">
        <b-form-input />
      </b-input-group>

      <b-input-group prepend="$" append=".00" class="mb-3">
        <b-form-input />
      </b-input-group>

      <b-input-group class="mb-3">
        <b-form-input placeholder="Username" />
        <b-input-group-text>@</b-input-group-text>
        <b-form-input placeholder="Server" />
      </b-input-group>

      <b-input-group class="mb-3" prepend="With textarea">
        <textarea class="form-control" />
      </b-input-group>
    </div>

    <div class="mt-2">
      <h4>Input Group Sizes</h4>
      <b-input-group prepend="Small" size="sm" class="mb-3">
        <b-form-input />
      </b-input-group>

      <b-input-group prepend="Default" class="mb-3">
        <b-form-input />
      </b-input-group>

      <b-input-group prepend="Large" size="lg" class="mb-3">
        <b-form-input />
      </b-input-group>
    </div>
  </div>
</template>

<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h2>Form Floating Label</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span id="basic-addon1" class="input-group-text">@</span>
        <b-form-floating-label label="Email address">
          <b-form-input placeholder=" " />
        </b-form-floating-label>
        <span class="input-group-text">.00</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-floating-label label="Email address">
          <b-form-input placeholder=" " />
        </b-form-floating-label>
      </b-col>
    </b-row>
  </b-container>
</template>

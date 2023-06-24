<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h2>Form Floating Label</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <span id="basic-addon1" class="input-group-text">@</span>
        <BFormFloatingLabel label="Email address">
          <BFormInput placeholder=" " />
        </BFormFloatingLabel>
        <span class="input-group-text">.00</span>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormFloatingLabel label="Email address">
          <BFormInput placeholder=" " />
        </BFormFloatingLabel>
      </BCol>
    </BRow>
  </BContainer>
</template>

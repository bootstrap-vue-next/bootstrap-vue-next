<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BAlert :model-value="true" variant="primary">A simple primary alert—check it out!</BAlert>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BAlert :model-value="true" variant="warning" show fade dismissible>
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </BAlert>
      </BCol>
    </BRow>
  </BContainer>
</template>

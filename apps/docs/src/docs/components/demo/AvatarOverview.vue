<template>
  <!-- #region template -->
  <p>Using stand-alone:</p>
  <div class="d-flex mb-4" style="column-gap: 1%">
    <BAvatar />
    <BAvatar variant="primary" text="BV" />
    <BAvatar variant="info" src="https://placekitten.com/300/300" />
    <BAvatar variant="success" />
  </div>
  <p>Using in components (list group) example:</p>
  <BListGroup style="max-width: 300px">
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar class="mx-3" />
      <span class="me-auto">J. Circlehead</span>
      <BBadge>5</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar variant="primary" text="BV" class="mx-3" />
      <span class="me-auto">BootstrapVueNext</span>
      <BBadge>12</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar variant="info" src="https://placekitten.com/300/300" class="mx-3" />
      <span class="me-auto">Super Kitty</span>
      <BBadge>9</BBadge>
    </BListGroupItem>
    <BListGroupItem class="d-flex align-items-center">
      <BAvatar variant="success" class="mx-3" />
      <span class="me-auto">ACME group</span>
      <BBadge>7</BBadge>
    </BListGroupItem>
  </BListGroup>
  <!-- #endregion template -->
</template>

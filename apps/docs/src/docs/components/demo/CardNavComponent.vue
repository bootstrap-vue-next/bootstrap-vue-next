<template>
  <!-- #region template -->
  <BCard no-body>
    <BCardHeader header-tag="nav">
      <BNav
        card-header
        tabs
      >
        <BNavItem active>Active</BNavItem>
        <BNavItem>Inactive</BNavItem>
        <BNavItem disabled>Disabled</BNavItem>
      </BNav>
    </BCardHeader>
    <BCardBody class="text-center">
      <BCardTitle>Card Title</BCardTitle>
      <BCardText>
        With supporting text below as a natural lead-in to additional content.
      </BCardText>
      <BButton variant="primary">Go somewhere</BButton>
    </BCardBody>
  </BCard>
  <!-- #endregion template -->
</template>

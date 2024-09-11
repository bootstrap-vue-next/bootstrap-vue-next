<template>
  <!-- #region template -->
  <BCard title="Card Title" body-class="text-center" header-tag="nav">
    <template #header>
      <BNav card-header tabs>
        <BNavItem active>Active</BNavItem>
        <BNavItem>Inactive</BNavItem>
        <BNavItem disabled>Disabled</BNavItem>
      </BNav>
    </template>
    <BCardText> With supporting text below as a natural lead-in to additional content. </BCardText>
    <BButton variant="primary">Go somewhere</BButton>
  </BCard>
  <!-- #endregion template -->
</template>

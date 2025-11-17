<template>
  <!-- #region template -->
  <BCard
    title="Card Title"
    no-body
  >
    <BCardHeader header-tag="nav">
      <BNav
        card-header
        pills
      >
        <BNavItem
          active
          href="#nav-pill-card"
          >Active</BNavItem
        >
        <BNavItem href="#nav-pill-card">Inactive</BNavItem>
        <BNavItem
          disabled
          href="#nav-pill-card"
          >Disabled</BNavItem
        >
      </BNav>
    </BCardHeader>

    <BCardBody class="text-center">
      <BCardText>
        With supporting text below as a natural lead-in to additional content.
      </BCardText>

      <BButton variant="primary">Go somewhere</BButton>
    </BCardBody>
  </BCard>
  <!-- #endregion template -->
</template>

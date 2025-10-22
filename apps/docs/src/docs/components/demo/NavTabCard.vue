<template>
  <!-- #region template -->
  <BCard
    title="Card Title"
    no-body
  >
    <BCardHeader header-tag="nav">
      <BNav
        card-header
        tabs
      >
        <BNavItem
          active
          href="#nav-tab-card"
          >Active</BNavItem
        >
        <BNavItem href="#nav-tab-card">Inactive</BNavItem>
        <BNavItem
          disabled
          href="#nav-tab-card"
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

<template>
  <!-- #region template -->
  <BCard
    title="Card Title"
    no-body
  >
    <BCardHeader header-tag="nav">
      <BNav>
        <BNavItem
          active
          href="#nav-plain-card"
          >Active</BNavItem
        >
        <BNavItem href="#nav-plain-card">Inactive</BNavItem>
        <BNavItem
          disabled
          href="#nav-plain-card"
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

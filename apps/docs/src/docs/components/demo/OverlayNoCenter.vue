<template>
  <!-- #region template -->
  <BOverlay
    no-center
    show
    rounded="sm"
  >
    <template #overlay>
      <BAvatar
        class="position-absolute"
        style="top: 0; right: 0"
    /></template>
    <BCard
      title="Card with no-center overlay"
      aria-hidden="true"
    >
      <BCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </BCardText>
      <BButton
        disabled
        variant="primary"
        >Button</BButton
      >
    </BCard>
  </BOverlay>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <div>
    <BCardGroup deck>
      <BCard
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard
        border-variant="secondary"
        header="Secondary"
        header-border-variant="secondary"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard border-variant="success" header="Success" align="center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-3">
    <BCardGroup deck>
      <BCard border-variant="info" header="Info" align="center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard
        border-variant="warning"
        header="Warning"
        header-bg-variant="transparent"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard
        border-variant="danger"
        header="Danger"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
      >
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-3">
    <BCardGroup deck class="mb-3">
      <BCard border-variant="light" header="Light" class="text-center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
      <BCard border-variant="dark" header="Dark" align="center">
        <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <!-- #endregion template -->
</template>

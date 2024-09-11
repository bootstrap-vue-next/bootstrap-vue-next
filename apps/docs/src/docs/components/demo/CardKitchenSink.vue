<template>
  <!-- #region template -->
  <BCard
    no-body
    style="max-width: 20rem"
    img-src="https://picsum.photos/380/200"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">Hello World</h4>
    </template>
    <BCardBody>
      <BCardTitle>Card Title</BCardTitle>
      <BCardSubtitle class="mb-2">Card Sub Title</BCardSubtitle>
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BCardText>
    </BCardBody>
    <BListGroup flush>
      <BListGroupItem>Cras justo odio</BListGroupItem>
      <BListGroupItem>Dapibus ac facilisis in</BListGroupItem>
      <BListGroupItem>Vestibulum at eros</BListGroupItem>
    </BListGroup>
    <BCardBody>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </BCardBody>
    <BCardFooter>This is a footer</BCardFooter>
    <BCardImg src="https://picsum.photos/480/210" alt="Image" bottom />
  </BCard>
  <!-- #endregion template -->
</template>

<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BCard
          no-body
          style="max-width: 20rem"
          img-src="https://placekitten.com/380/200"
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

          <BCardImg src="https://placekitten.com/480/210" alt="Image" bottom />
        </BCard>
      </BCol>
      <BCol>
        <BCard
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <BCardText>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </BCardText>

          <BButton href="#" variant="primary">Go somewhere</BButton>
        </BCard>
      </BCol>
      <BCol cols="6">
        <BCard no-body class="overflow-hidden" style="max-width: 540px">
          <BRow class="g-0">
            <BCol md="6">
              <BCardImg
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              />
            </BCol>
            <BCol md="6">
              <BCardBody title="Horizontal Card">
                <BCardText>
                  This is a wider card with supporting text as a natural lead-in to additional
                  content. This content is a little bit longer.
                </BCardText>
              </BCardBody>
            </BCol>
          </BRow>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
</template>

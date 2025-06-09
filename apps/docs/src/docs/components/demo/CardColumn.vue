<template>
  <!-- #region template -->
  <BCardGroup columns>
    <BCard
      title="Card title that wraps to a new line"
      img-src="https://picsum.photos/g/400/450"
      img-alt="Image"
      img-top
    >
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </BCardText>
    </BCard>
    <BCard header="Quote">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </BCard>
    <BCard
      title="Title"
      img-src="https://picsum.photos/500/350"
      img-alt="Image"
      img-top
    >
      <BCardText>
        This card has supporting text below as a natural lead-in to additional content.
      </BCardText>
      <BCardText class="small text-body-secondary">Last updated 3 mins ago</BCardText>
    </BCard>
    <BCard
      bg-variant="primary"
      text-variant="white"
    >
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </BCard>
    <BCard>
      <BCardTitle>Title</BCardTitle>
      <BCardText>
        This card has supporting text below as a natural lead-in to additional content.
      </BCardText>
      <BCardText class="small text-body-secondary">Last updated 3 mins ago</BCardText>
    </BCard>
    <BCard
      img-src="https://picsum.photos/400/400/?image=41"
      img-alt="Image"
      overlay
    />
    <BCard
      img-src="https://picsum.photos/400/200/?image=41"
      img-alt="Image"
      img-top
    >
      <BCardText>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </BCardText>
      <template #footer>
        <small class="text-body-secondary">Footer Text</small>
      </template>
    </BCard>
  </BCardGroup>
  <!-- #endregion template -->
</template>

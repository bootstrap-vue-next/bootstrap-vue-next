<template>
  <!-- #region template -->
  <div>
    <h4>Top and Bottom</h4>
    <BCardGroup deck>
      <BCard img-src="https://picsum.photos/1000/300" img-alt="Card image" img-top>
        <BCardText>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </BCardText>
      </BCard>
      <BCard img-src="https://picsum.photos/1000/300" img-alt="Card image" img-bottom>
        <BCardText>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </BCardText>
      </BCard>
    </BCardGroup>
  </div>
  <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <BCard img-src="https://picsum.photos/300/300" img-alt="Card image" img-left class="mb-3">
      <BCardText>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </BCardText>
    </BCard>
    <BCard img-src="https://picsum.photos/300/300" img-alt="Card image" img-right>
      <BCardText>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </BCardText>
    </BCard>
  </div>
  <!-- #endregion template -->
</template>

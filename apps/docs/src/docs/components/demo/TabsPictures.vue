<template>
  <!-- #region template -->
  <BCard no-body>
    <BTabs card>
      <BTab
        no-body
        title="Picture 1"
      >
        <BCardImg
          bottom
          src="https://picsum.photos/600/200/?image=21"
          alt="Image 21"
        />
        <BCardFooter>Picture 1 footer</BCardFooter>
      </BTab>

      <BTab
        no-body
        title="Picture 2"
      >
        <BCardImg
          bottom
          src="https://picsum.photos/600/200/?image=25"
          alt="Image 25"
        />
        <BCardFooter>Picture 2 footer</BCardFooter>
      </BTab>

      <BTab
        no-body
        title="Picture 3"
      >
        <BCardImg
          bottom
          src="https://picsum.photos/600/200/?image=26"
          alt="Image 26"
        />
        <BCardFooter>Picture 3 footer</BCardFooter>
      </BTab>

      <BTab title="Text">
        <BCardTitle>This tab does not have the <code>no-body</code> prop set</BCardTitle>
        <BCardText>
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
          consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
          consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
          veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse
          irure.
        </BCardText>
      </BTab>
    </BTabs>
  </BCard>
  <!-- #endregion template -->
</template>

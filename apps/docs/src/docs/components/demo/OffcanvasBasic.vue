<template>
  <div>
    <BButton v-b-toggle.offcanvas-1>Toggle Offcanvas</BButton>
    <BOffcanvas
      id="offcanvas-1"
      title="Offcanvas"
      shadow
    >
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <BImg
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        />
      </div>
    </BOffcanvas>
  </div>
</template>

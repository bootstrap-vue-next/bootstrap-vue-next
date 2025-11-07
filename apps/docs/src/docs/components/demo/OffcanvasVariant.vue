<template>
  <div>
    <BButton v-b-toggle.offcanvas-variant>Toggle Offcanvas</BButton>
    <BOffcanvas
      id="offcanvas-variant"
      title="Offcanvas"
      shadow
    >
      <template #default>
        <div class="px-3 py-2 bg-dark text-light">
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
      </template>
    </BOffcanvas>
  </div>
</template>

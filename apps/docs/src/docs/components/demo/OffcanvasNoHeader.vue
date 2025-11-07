<template>
  <div>
    <BButton v-b-toggle.offcanvas-no-header>Toggle Offcanvas</BButton>
    <BOffcanvas
      id="offcanvas-no-header"
      aria-labelledby="offcanvas-no-header-title"
      no-header
      shadow
    >
      <template #default="{hide}">
        <div class="p-3">
          <h4 id="offcanvas-no-header-title">Custom header offcanvas</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <BImg
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          />
          <BButton
            variant="primary"
            block
            @click="($event) => hide()"
            >Close Offcanvas</BButton
          >
        </div>
      </template>
    </BOffcanvas>
  </div>
</template>

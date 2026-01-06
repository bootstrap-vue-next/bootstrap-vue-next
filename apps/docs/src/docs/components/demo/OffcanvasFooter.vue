<template>
  <div>
    <BButton v-b-toggle.offcanvas-footer>Toggle Offcanvas</BButton>
    <BOffcanvas
      id="offcanvas-footer"
      aria-label="Offcanvas with custom footer"
      no-header
      shadow
    >
      <template #footer="{hide = () => {}}">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="me-auto">Footer</strong>
          <BButton
            size="sm"
            @click="($event) => hide()"
            >Close</BButton
          >
        </div>
      </template>
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

<template>
  <!-- #region template -->
  <div>
    <BButton
      v-b-toggle.offcanvas-demo
      variant="primary"
      >Toggle Offcanvas</BButton
    >

    <BOffcanvas
      id="offcanvas-demo"
      title="Offcanvas Title"
    >
      <p>This offcanvas is controlled by the v-b-toggle directive.</p>
      <p>Click the close button or outside the offcanvas to hide it.</p>
    </BOffcanvas>
  </div>
  <!-- #endregion template -->
</template>

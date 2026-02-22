<template>
  <div>
    <BButton
      v-b-toggle.collapse-css
      variant="primary"
    >
      <span class="when-open">Hide</span>
      <span class="when-closed">Show</span>
      Content
    </BButton>

    <BCollapse
      id="collapse-css"
      class="mt-3"
    >
      <BCard>
        <p class="card-text">
          The button text changes based on the collapse state using CSS classes.
        </p>
      </BCard>
    </BCollapse>
  </div>
</template>

<style scoped>
/* Hide "Hide" text when collapsed, show "Show" text */
.collapsed > .when-open {
  display: none;
}

/* Hide "Show" text when not collapsed, show "Hide" text */
.not-collapsed > .when-closed {
  display: none;
}
</style>

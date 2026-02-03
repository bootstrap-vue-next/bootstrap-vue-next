<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <!-- Correct: div element with title attribute -->
    <div
      v-b-popover.hover.top
      title="Title from attribute"
      class="btn btn-primary"
    >
      Using title attribute
    </div>

    <!-- Correct: Explicit body in directive value -->
    <BButton v-b-popover.hover.top="'Explicit body text'"> Using directive value </BButton>

    <!-- Both title and body -->
    <BButton
      v-b-popover.hover.top="{title: 'Custom Title', body: 'Custom body'}"
      title="This will be overridden"
    >
      Title + Body
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

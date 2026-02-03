<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <BButton
      v-b-popover="'I am popover directive content!'"
      title="Popover Title"
    >
      Hover Me
    </BButton>
    <BButton v-b-popover="{title: 'Object Syntax', body: 'Using object notation'}">
      Object Syntax
    </BButton>
    <BButton v-b-popover.hover.top="'Top placement with hover trigger'"> Top Hover </BButton>
    <BButton v-b-popover.click.right="{title: 'Click me', body: 'Right side popover'}">
      Click Right
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

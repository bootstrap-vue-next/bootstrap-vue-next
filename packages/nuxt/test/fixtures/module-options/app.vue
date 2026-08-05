<template>
  <div>
    <BButton id="btn">
      Click me
    </BButton>
    <div
      id="tooltip-target"
      v-b-tooltip.hover
      title="A tooltip"
    >
      Hover me
    </div>
  </div>
</template>

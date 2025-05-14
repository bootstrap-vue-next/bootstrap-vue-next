<template>
  <div class="text-center">
    <BButton id="popover-button-open" variant="primary">Button</BButton>

    <BPopover :model-value="true" target="popover-button-open" title="Popover">
      I start <strong>open</strong>
    </BPopover>
  </div>
</template>

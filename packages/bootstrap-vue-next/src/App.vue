<template>
  <div class="text-center">
    <BButton id="popover-button-open" variant="primary">Button</BButton>

    <BPopover
      :model-value="true"
      target="popover-button-open"
      title="Danger!"
      style="
        --bs-popover-header-bg: var(--bs-danger);
        --bs-popover-bg: var(--bs-danger-bg-subtle);
        --bs-popover-border-color: var(--bs-emphasis-color);
      "
    >
      This is <strong>important</strong>
    </BPopover>
  </div>
</template>

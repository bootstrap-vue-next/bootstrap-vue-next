<template>
  <!-- #region template -->
  <div class="d-flex gap-2 flex-wrap">
    <BButton
      v-b-popover="{
        title: 'Advanced Configuration',
        body: 'With custom delay and placement',
        delay: {show: 500, hide: 100},
        placement: 'bottom',
      }"
    >
      Object Configuration
    </BButton>
    <BButton
      v-b-popover.click="{
        title: 'Click Trigger',
        body: 'This uses click trigger via object',
      }"
    >
      Object + Modifier
    </BButton>
  </div>
  <!-- #endregion template -->
</template>

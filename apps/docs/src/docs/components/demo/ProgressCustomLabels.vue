<template>
  <!-- #region template -->
  <h5>Custom label via default slot</h5>
  <BProgress
    :max="50"
    height="2rem"
  >
    <BProgressBar :value="33.333333">
      <span
        >Progress: <strong>{{ (33.333333).toFixed(2) }} / {{ 50 }}</strong></span
      >
    </BProgressBar>
  </BProgress>

  <h5 class="mt-3">Custom label via property</h5>
  <BProgress :max="50">
    <BProgressBar
      :value="33.333333"
      :label="`${((33.333333 / 50) * 100).toFixed(2)}%`"
    />
  </BProgress>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <BTabs fill class="mb-3" content-class="py-3">
    <template #before>
      <BAlert show class="mb-3">Additional Slot</BAlert>
    </template>

    <BTab title="Details" active>
      <h4>Project Details</h4>
    </BTab>
    <BTab title="Generator">
      <h4>Question Generator</h4>
    </BTab>
    <BTab title="Review">
      <h4>Review</h4>
    </BTab>
  </BTabs>
  <!-- #endregion template -->
</template>

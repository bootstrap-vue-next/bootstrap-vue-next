<template>
  <!-- #region template -->
  <BTabs>
    <BTab active>
      <template #title>
        <BSpinner type="grow" small /> I'm <i>custom</i> <strong>title</strong>
      </template>
      <p class="p-3">Tab contents 1</p>
    </BTab>

    <BTab>
      <template #title> <BSpinner type="border" small /> Tab 2 </template>
      <p class="p-3">Tab contents 2</p>
    </BTab>
  </BTabs>
  <!-- #endregion template -->
</template>

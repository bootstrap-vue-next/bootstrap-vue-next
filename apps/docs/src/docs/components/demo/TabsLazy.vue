<template>
  <!-- #region template -->
  <BTabs content-class="mt-3">
    <!-- This tabs content will always be mounted -->
    <BTab title="Regular tab"><BAlert show>I'm always mounted</BAlert></BTab>

    <!-- This tabs content will not be mounted until the tab is shown -->
    <BTab
      title="Lazy tab"
      lazy
      ><BAlert show>I'm lazy mounted!</BAlert></BTab
    >
  </BTabs>
  <!-- #endregion template -->
</template>

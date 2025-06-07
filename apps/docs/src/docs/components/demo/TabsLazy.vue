<template>
  <!-- #region template -->
  <BTabs content-class="mt-3">
    <!-- This tabs content will always be mounted -->
    <BTab title="Regular tab"><BAlert :model-value="true">I'm always mounted</BAlert></BTab>

    <!-- This tabs content will not be mounted until the tab is shown -->
    <!-- and will be un-mounted when hidden -->
    <BTab
      title="Lazy tab"
      lazy
      ><BAlert :model-value="true">I'm lazy mounted!</BAlert></BTab
    >
  </BTabs>
  <!-- #endregion template -->
</template>

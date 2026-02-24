<template>
  <!-- #region template -->
  <div class="col-auto col-md-2 m-2 d-md-block sidebar">
    <ul id="menu" class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start sidebar-left">
      <BNavItem to="/">To One</BNavItem>
      <BNavItem to="/test">To Two </BNavItem>
      <BNavItem href="https://github.com" target="_blank">Github</BNavItem>
      <BNavItem href="https://google.com">Google</BNavItem>
    </ul>
    <BButton to="/test" variant="primary">Test</BButton>
  </div>
  <hr />
  <main class="col col-md-9 ml-sm-auto col-lg-10 px-4">
    <router-view />
  </main>
  <!-- #endregion template -->
</template>

<template>
  <!-- #region template -->
  <!-- On page with route `/some/route` -->
  <BCard title="Card Title" no-body>
    <BCardHeader header-tag="nav">
      <BNav card-header tabs>
        <!-- <BNavItem>'s with child routes. Note the trailing slash on the first <BNavItem> -->
        <BNavItem to="/some/route/" exact exact-active-class="active">Active</BNavItem>
        <BNavItem to="/some/route/foo" exact exact-active-class="active">Foo</BNavItem>
        <BNavItem to="/some/route/bar" exact exact-active-class="active">Bar</BNavItem>
      </BNav>
    </BCardHeader>

    <BCardBody>
      <!-- Child route gets rendered in <RouterView> or <NuxtPage> -->
      <RouterView />
      <!-- Or if using Nuxt.js
      <NuxtPage />
      -->
    </BCardBody>
  </BCard>
  <!-- #endregion template -->
</template>

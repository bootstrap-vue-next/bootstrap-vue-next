<template>
  <!-- Navigation -->
  <div class="my-2">
    <h2 class="my-3">Navigation (Links)</h2>
    <div id="nav">
      <b-link :to="{name: 'Home', path: '/' /* path is used when vue-router is not present */}"
        >Home</b-link
      >
      <br />
      <b-link
        :to="{
          name: 'About',
          params: {id: '456'},
          query: {param: 'someVal'},
          path: '/about' /* path is used when vue-router is not present */,
        }"
        >About</b-link
      >
    </div>
    <p>NB: navigation behavior depends of the usage of "vue-router"</p>
    <!-- activate "vue-router" in "main.ts" to test the "router-view" component
      <router-view></router-view>
      -->
  </div>
</template>

<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-link :to="{name: 'index', path: '/' /* path is used when vue-router is not present */}"
          >Home</b-link
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-link
          :to="{
            name: 'about',
            params: {id: '456'},
            query: {param: 'someVal'},
            path: '/about' /* path is used when vue-router is not present */,
          }"
          >About</b-link
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>NB: navigation behavior depends of the usage of "vue-router"</p>
      </b-col>
    </b-row>
    <!-- activate "vue-router" in "main.ts" to test the "router-view" component
      <router-view></router-view>
      -->
  </b-container>
</template>

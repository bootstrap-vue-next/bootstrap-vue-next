<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BLink :to="home">Home</BLink>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BLink :to="about">About</BLink>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <p>NB: navigation behavior depends of the usage of "vue-router"</p>
      </BCol>
    </BRow>
    <!-- activate "vue-router" in "main.ts" to test the "router-view" component
      <RouterView />
      -->
  </BContainer>
</template>

<script setup lang="ts">
import type {RouteLocationRaw} from 'vue-router'

// TODO: We're using `RouteLocationRaw` here which is an internal class of vue-router
//  I believe we're using it incorrectly in that we're using path as a fallback
//  when vue-router isn't present. The typing for the class doesn't allow for that -
//  It can't resolve to RouteLocationNamedRaw, since path must be undefined and it
//  cant resolve to RouteLocationPathRaw since it has now name property.  I'm not sure
//  I understand the intent of the code, so I'm forcing the cast to get past the error for now.
const home = {
  name: 'index',
  path: '/' /* path is used when vue-router is not present */,
} as RouteLocationRaw

const about = {
  name: 'about',
  params: {id: '456'},
  query: {param: 'someVal'},
  path: '/about' /* path is used when vue-router is not present */,
} as RouteLocationRaw
</script>

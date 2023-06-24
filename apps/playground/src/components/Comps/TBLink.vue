<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BLink :to="{name: 'index', path: '/' /* path is used when vue-router is not present */}"
          >Home</BLink
        >
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BLink
          :to="{
            name: 'about',
            params: {id: '456'},
            query: {param: 'someVal'},
            path: '/about' /* path is used when vue-router is not present */,
          }"
          >About</BLink
        >
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <p>NB: navigation behavior depends of the usage of "vue-router"</p>
      </BCol>
    </BRow>
    <!-- activate "vue-router" in "main.ts" to test the "router-view" component
      <RouterView></RouterView>
      -->
  </BContainer>
</template>

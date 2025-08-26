<template>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BNav pills vertical ref="navTarget">
          <BNavItem href="#custom-intro" @click="scrollIntoView">Introduction</BNavItem>
          <BNavItem href="#custom-main" @click="scrollIntoView">Main Content</BNavItem>
          <BNavItem href="#custom-sidebar" @click="scrollIntoView">Sidebar</BNavItem>
        </BNav>
      </BCol>
      <BCol cols="8">
        <div
          ref="content"
          style="height: 300px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem;"
        >
          <div class="content-section" id="custom-intro">
            <h4>Introduction</h4>
            <p v-for="i in 3" :key="`intro-${i}`">{{ loremText }}</p>
          </div>
          <div class="content-section" id="custom-main">
            <h4>Main Content</h4>
            <p v-for="i in 3" :key="`main-${i}`">{{ loremText }}</p>
          </div>
          <div class="content-section" id="custom-sidebar">
            <h4>Sidebar Content</h4>
            <p v-for="i in 3" :key="`sidebar-${i}`">{{ loremText }}</p>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {useTemplateRef} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const content = useTemplateRef('content')
const navTarget = useTemplateRef('navTarget')

const {scrollIntoView} = useScrollspy(content, navTarget, {
  contentQuery: '.content-section[id]',
})
</script>
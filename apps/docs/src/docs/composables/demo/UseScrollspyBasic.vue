<template>
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BNav
          ref="navTarget"
          pills
          vertical
        >
          <BNavItem
            href="#section1"
            @click="scrollIntoView"
            >Section 1</BNavItem
          >
          <BNavItem
            href="#section2"
            @click="scrollIntoView"
            >Section 2</BNavItem
          >
          <BNavItem
            href="#section3"
            @click="scrollIntoView"
            >Section 3</BNavItem
          >
        </BNav>
      </BCol>
      <BCol cols="8">
        <div
          ref="scrollContent"
          style="height: 300px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem"
        >
          <h4 id="section1">Section 1</h4>
          <p
            v-for="i in 4"
            :key="`s1-${i}`"
          >
            {{ loremText }}
          </p>
          <h4 id="section2">Section 2</h4>
          <p
            v-for="i in 4"
            :key="`s2-${i}`"
          >
            {{ loremText }}
          </p>
          <h4 id="section3">Section 3</h4>
          <p
            v-for="i in 4"
            :key="`s3-${i}`"
          >
            {{ loremText }}
          </p>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {useTemplateRef} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'

const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const scrollContent = useTemplateRef('scrollContent')
const navTarget = useTemplateRef('navTarget')

const {scrollIntoView} = useScrollspy(scrollContent, navTarget)
</script>

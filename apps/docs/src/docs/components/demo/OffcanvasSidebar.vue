<template>
  <BContainer fluid="xxl">
    <BRow class="d-md-none"
      ><BCol>
        <BButton variant="link" underline-opacity="0" @click="showToc"
          >&lt; Table of Contents</BButton
        > </BCol
      ><BCol
        ><div class="text-end">
          <BButton variant="link" underline-opacity="0" @click="showOtp">On this page &gt;</BButton>
        </div></BCol
      ></BRow
    >
    <BRow>
      <BCol md="2" class="scrollable-column">
        <BOffcanvas v-model="tocVisible" placement="start" responsive="md">
          <ul>
            <ul>
              <li v-for="item in toc" :key="item">{{ item }}</li>
              <li>A very large entry in table of contents</li>
            </ul>
          </ul>
        </BOffcanvas>
      </BCol>
      <BCol md="8">
        <span
          >Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque imperdiet libero
          litora</span
        >
        ...
        <span>Dignissim molestie vulputate feugiat mollis sapien sit commodo.</span>.
      </BCol>
      <BCol md="2" class="scrollable-column">
        <BOffcanvas v-model="otpVisible" placement="end" responsive="md">
          <ul>
            <li v-for="item in otp" :key="item">{{ item }}</li>
            <li>A very large entry in on this page</li>
          </ul>
        </BOffcanvas>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const otpVisible = ref(false)
const tocVisible = ref(false)

// This example uses buttons to show the hidden sidebars, but you could also use a menu item or any other
//  UX element that can change the state of the model value for the BOffcanvas
const showOtp = () => {
  otpVisible.value = true
}
const showToc = () => {
  tocVisible.value = true
}

const tocGenerator = (s: string, c: number): string[] =>
  [...Array(c).keys()].map((i) => `${s} ${i}`)

const toc = tocGenerator('Chapter', 100) // Replace this with your own table of contents
const otp = tocGenerator('Section', 100) // Replace this with your own "on this page"
</script>

<style scoped lang="scss">
// The styling below makes a colum scroll independently of the rest of the page if
//  its content is too large to fit in the current viewport
.scrollable-column {
  max-height: 100vh;
  overflow-y: auto;
  position: sticky;
  top: 0;
}
</style>

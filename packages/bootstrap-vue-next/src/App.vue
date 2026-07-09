<template>
  <BContainer>
    <BRow>
      <BCol>
        <div>
          <BButton
            v-b-toggle.offcanvas
            class="d-md-none m-1 shadow-lg position-fixed top-0 left-0"
          >
            Open Canvas
          </BButton>
          <BOffcanvas id="offcanvas" responsive="md">
            This content is not visible on a viewport that is exactly 768px wide.
          </BOffcanvas>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BCol, BContainer, BRow} from './components'
</script>

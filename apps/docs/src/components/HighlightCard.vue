<template>
  <BCard no-body class="mb-5">
    <BCardBody>
      <slot />
    </BCardBody>
    <div class="html">HTML</div>
    <BCardBody class="bg-body-tertiary">
      <slot name="html" />
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import {BCard, BCardBody} from 'bootstrap-vue-next'
</script>

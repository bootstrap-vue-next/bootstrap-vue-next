<template>
  <BCard no-body class="mb-5">
    <BCardBody v-if="$slots.default">
      <slot />
    </BCardBody>
    <template v-if="$slots.html">
      <div v-if="$slots.default" class="html">HTML</div>
      <BCardBody class="bg-body-tertiary">
        <slot name="html" />
      </BCardBody>
    </template>
  </BCard>
</template>

<script setup lang="ts">
import {BCard, BCardBody} from 'bootstrap-vue-next'
</script>

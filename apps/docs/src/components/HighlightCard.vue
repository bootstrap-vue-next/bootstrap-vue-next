<template>
  <b-card no-body class="mb-5">
    <b-card-body>
      <slot />
    </b-card-body>
    <div class="html">HTML</div>
    <b-card-body class="bg-body-tertiary">
      <slot name="html" />
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import {BCard, BCardBody} from 'bootstrap-vue-next'
</script>

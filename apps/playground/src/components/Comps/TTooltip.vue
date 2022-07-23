<template>
  <div class="my-2">
    <h2>Tooltip</h2>
    <div class="d-flex gap-2">
      <b-button v-b-tooltip.top :title="tooltip">Tooltip on top</b-button>
      <b-button @click="setTooltip">Change tooltip</b-button>
      <b-button v-b-tooltip.left title="Tooltip on left">Tooltip on left</b-button>
      <b-button v-b-tooltip.right.click title="Tooltip on right">Tooltip on right</b-button>
      <b-button v-b-tooltip.bottom title="Tooltip on bottom">Tooltip on bottom</b-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tooltip = ref('Tooltip on <em>top</em>')
const setTooltip = () => (tooltip.value = `${new Date()} <strong>fechaaa</strong>`)
</script>

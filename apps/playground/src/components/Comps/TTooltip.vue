<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BButton v-b-tooltip.top :title="tooltip">Tooltip on top</BButton>
        <BButton @click="setTooltip">Change tooltip</BButton>
        <BButton v-b-tooltip.left title="Tooltip on left">Tooltip on left</BButton>
        <BButton v-b-tooltip.right.click title="Tooltip on right">Tooltip on right</BButton>
        <BButton v-b-tooltip.bottom title="Tooltip on bottom">Tooltip on bottom</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tooltip = ref('Tooltip on <em>top</em>')
const setTooltip = () => {tooltip.value = `${new Date()} <strong>fechaaa</strong>`}
</script>

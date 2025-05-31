<template>
  <BCard no-body>
    <BTabs v-model:index="tabIndex" card>
      <BTab title="Tab 1" :title-link-class="linkClass[0]">Tab contents 1</BTab>
      <BTab title="Tab 2" :title-link-class="linkClass[1]">Tab contents 2</BTab>
      <BTab title="Tab 3" :title-link-class="linkClass[2]">Tab contents 3</BTab>
    </BTabs>
  </BCard>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const tabIndex = ref(0)

const linkClass = computed(() =>
  Array.from(Array(3).keys()).map((idx) =>
    tabIndex.value === idx ? ['bg-primary', 'text-light'] : ['bg-light', 'text-info']
  )
)
</script>

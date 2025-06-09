<template>
  <BButtonGroup>
    <BButton @click="show">show</BButton>
    <BButton @click="hide">hide</BButton>
    <BButton @click="toggle">toggle</BButton>
  </BButtonGroup>
  <BCollapse
    ref="myCollapse"
    class="mt-2"
  >
    <BCard>I am controlled by exposed functions!</BCard>
  </BCollapse>
  <pre class="mt-2">
    isNav = {{ myCollapse?.isNav }}
    visible = {{ myCollapse?.visible }}
  </pre>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {BCollapse} from 'bootstrap-vue-next'
const myCollapse = ref<InstanceType<typeof BCollapse> | null>(null)
const show = () => myCollapse.value?.show()
const hide = () => myCollapse.value?.hide()
const toggle = () => myCollapse.value?.toggle()
</script>

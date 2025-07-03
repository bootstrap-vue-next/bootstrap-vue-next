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
import {useTemplateRef} from 'vue'
import {BCollapse} from 'bootstrap-vue-next/components/BCollapse'

const myCollapse = useTemplateRef('myCollapse')
const show = () => myCollapse.value?.show()
const hide = () => myCollapse.value?.hide()
const toggle = () => myCollapse.value?.toggle()
</script>

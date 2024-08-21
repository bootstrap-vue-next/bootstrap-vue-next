<template>
  <BContainer>
    <BRow>
      <BCol>
        {{ tooltip.tooltips?.value }}
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTooltipOrchestrator />
        <BButton v-if="cli" ref="myButton" @click="console.log('hyello world')">Click me</BButton>
        <!-- {{ tooltip.tooltips?.value }}
        <BButton @click="c">Toggle</BButton>
        {{ myButton }} -->
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {computed, h, ref, watch} from 'vue'
import {useTooltip} from './composables/useTooltip'
import BTooltip from './components/BTooltip/BTooltip.vue'

const myButton = ref<HTMLElement | null>(null)

const tooltip = useTooltip()

const bb = ref(1)
setInterval(() => {
  bb.value = bb.value + 1
}, 1500)

const myRef = ref({
  id: bb.value % 2 === 0 ? 'danger' : 'success',
})

watch(bb, (newValue) => {
  myRef.value = {id: newValue % 2 === 0 ? 'danger' : 'success'}
})

tooltip.show?.({
  ref: myButton,
  component: h(BTooltip, null, () => `${bb.value}`),
  props: myRef,
})
const cli = ref(true)

const c = () => {
  cli.value = !cli.value
}
</script>

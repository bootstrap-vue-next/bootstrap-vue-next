<template>
  <div class="d-flex">
    <div id="popover-x1" ref="refpop" class="m-1 p-1">Popover Here</div>
    <div id="popover-x2" class="m-1 p-1">Popover Here</div>
    <div id="popover-x3" class="m-1 p-1">Popover Here</div>
    <div id="popover-x4" class="m-1 p-1">Popover Here</div>
  </div>
  <BButton @click="popoverRef.modelValue = !popoverRef.modelValue">show</BButton>
  <p>{{ popoverRef }}</p>
</template>
<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
import {type PopoverPlacement, usePopoverController} from './index'

const {popover, tooltip} = usePopoverController()
const target = ref('popover-x1')
// const test = ref(false)
const refpop = ref(null)

const popoverRef = ref({
  id: 'popover-ref',
  // target: 'popover-x1',
  target,
  title: 'PopoverRef',
  content: 'PopoverRef',
  // placement: 'left-end' as PopoverPlacement,
  modelValue: true,
  onShown: () => {
    // eslint-disable-next-line no-console
    console.log('onShown')
  },
})

const tooltipRef = ref({
  target: 'popover-x1',
  title: 'tooltip!',
  content: 'tooltip!',
  placement: 'right-end' as PopoverPlacement,
  // modelValue: false,
})

setInterval(() => {
  target.value = `popover-x${Math.floor(Math.random() * 4) + 1}`
}, 1000)

// setInterval(() => {
//   test.value = !test.value
//   popoverRef.value.modelValue = test.value
// }, 4000)

onMounted(() => {
  popover?.(popoverRef)
  // popover?.(
  //   computed(() => ({
  //     id: 'popover-computed',
  //     target: target.value,
  //     title: 'Popover',
  //     content: 'Popover',
  //     placement: 'top-end',
  //     // modelValue: test.value,
  //   }))
  // )
  tooltip?.({
    target,
    props: tooltipRef,
  })
  // show?.({props: {title: 'Modal!', body: 'Modal!'}})

  // eslint-disable-next-line no-console
  console.log('popover-test mounted')
})

onUnmounted(() => {
  // eslint-disable-next-line no-console
  console.log('popover-test unmounted')
})
</script>

<template>
  <BButton ref="reactiveExample">Hover me</BButton>
</template>

<script setup lang="ts">
import {type ComponentPublicInstance, onMounted, onUnmounted, reactive, ref, useTemplateRef} from 'vue'
import {BButton, type TooltipOrchestratorCreateParam, usePopover} from 'bootstrap-vue-next'

const {tooltip} = usePopover()

const title = ref('Hello')
const reactiveExample = useTemplateRef('reactiveExample')
let intervalId: NodeJS.Timeout | undefined

const myTooltip: TooltipOrchestratorCreateParam = reactive({
  // The value passed in should have at least a writable modelValue. So you'll want to use reactive.
  // Any reactive struct should, but reactives are easiest to forward dynamic inputs, while also being writable
  title: title,
  target: reactiveExample as unknown as ComponentPublicInstance,
  modelValue: false,
})

onMounted(async () => {
  intervalId = setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 2500)

  await using _ = await tooltip(myTooltip).show()
})

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})
</script>

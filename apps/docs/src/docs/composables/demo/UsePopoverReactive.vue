<template>
  <BButton ref="reactiveExample">Hover me</BButton>
</template>

<script setup lang="ts">
import {
  type ComponentPublicInstance,
  computed,
  onMounted,
  onUnmounted,
  ref,
  useTemplateRef,
  watchEffect,
} from 'vue'
import {BButton, type TooltipOrchestratorCreateParam, usePopover} from 'bootstrap-vue-next'

const {tooltip} = usePopover()

const title = ref('Hello')
const reactiveExample = useTemplateRef('reactiveExample')
let intervalId: NodeJS.Timeout | undefined

// `tooltip()`/`popover()` need a writable ref/plain object (they need to control `modelValue`
// themselves), so `reactive()` is not used here. Instead, derive the reactive pieces with
// `computed()`, then sync them onto a plain ref via `watchEffect()`.
const derivedTitle = computed(() => title.value)
const myTooltip = ref<TooltipOrchestratorCreateParam>({
  title: derivedTitle.value,
  target: reactiveExample.value as unknown as ComponentPublicInstance,
  modelValue: false,
})
watchEffect(() => {
  myTooltip.value.title = derivedTitle.value
  myTooltip.value.target = reactiveExample.value as unknown as ComponentPublicInstance
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

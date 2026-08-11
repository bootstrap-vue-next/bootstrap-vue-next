<template>
  <BButton id="reactive-tooltip-target" @click="showTooltip"> Toggle tooltip </BButton>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import type { TooltipOrchestratorCreateParam } from 'bootstrap-vue-next'
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { usePopover } from 'bootstrap-vue-next/composables/usePopover'

const { tooltip } = usePopover()

const title = ref('foo')
let intervalId: ReturnType<typeof setInterval> | undefined

// `tooltip()`/`popover()` need a writable ref/plain object (they need to control `modelValue`
// themselves), so `reactive()` is not used here. Instead, derive the reactive pieces with
// `computed()`, then sync them onto a plain ref via `watchEffect()`.
const derivedTitle = computed(() => title.value)
const myTooltip = ref<TooltipOrchestratorCreateParam>({
  title: derivedTitle.value,
  target: 'reactive-tooltip-target',
  modelValue: false,
})
watchEffect(() => {
  myTooltip.value.title = derivedTitle.value
})

onMounted(() => {
  intervalId = setInterval(() => {
    title.value = title.value === 'foo' ? 'bar' : 'foo'
  }, 2500)
})

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})

const showTooltip = async () => {
  await using _ = await tooltip(myTooltip).show()
}
</script>

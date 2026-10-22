<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, provide, watch} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BAccordionProps, BAccordionSlots} from '../../types'
import {accordionInjectionKey} from '../../utils/keys'

const _props = withDefaults(defineProps<Omit<BAccordionProps, 'modelValue'>>(), {
  flush: false,
  independent: false,
  gap: false,
  id: undefined,
  name: undefined,
  size: undefined,
  theme: undefined,
})
const props = useDefaults(_props, 'BAccordion')
defineSlots<BAccordionSlots>()

const modelValue = defineModel<BAccordionProps['modelValue']>({
  default: undefined,
})

const computedId = useId(() => props.id, 'accordion')
const computedName = useId(() => props.name, 'accordion_group')

const computedClasses = computed(() => ({
  'accordion-flush': props.flush,
  'accordion-gap': props.gap,
  'accordion-sm': props.size === 'sm',
  [`theme-${props.theme}`]: Boolean(props.theme),
}))

const groupName = computed(() => (props.independent ? undefined : computedName.value))

const setItemOpen = (id: string, open: boolean) => {
  if (props.independent) {
    const current = Array.isArray(modelValue.value)
      ? [...modelValue.value]
      : modelValue.value
        ? [modelValue.value]
        : []
    const next = open ? [...new Set([...current, id])] : current.filter((item) => item !== id)
    modelValue.value = next.length ? next : undefined
    return
  }

  if (open) {
    modelValue.value = id
  } else if (
    modelValue.value === id ||
    (Array.isArray(modelValue.value) && modelValue.value.includes(id))
  ) {
    modelValue.value = undefined
  }
}

watch(
  [() => props.independent, modelValue],
  ([independent, value]) => {
    if (independent && Array.isArray(value) && value.length === 0) {
      modelValue.value = undefined
    } else if (independent && typeof value === 'string') {
      modelValue.value = [value]
    } else if (!independent && Array.isArray(value)) {
      modelValue.value = value[0]
    }
  },
  {immediate: true}
)

provide(accordionInjectionKey, {
  groupName,
  isOpen: (id: string) =>
    Array.isArray(modelValue.value) ? modelValue.value.includes(id) : modelValue.value === id,
  setItemOpen,
})
</script>

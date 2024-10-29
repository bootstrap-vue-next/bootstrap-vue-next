<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, provide, readonly, toRef} from 'vue'
import {accordionInjectionKey} from '../../utils/keys'
import {useId} from '../../composables/useId'
import {useDefaults} from '../../composables/useDefaults'
import type {BAccordionProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<Omit<BAccordionProps, 'modelValue'>>(), {
  flush: false,
  free: false,
  initialAnimation: false,
  id: undefined,
  lazy: false,
  unmountLazy: false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = useDefaults(_props, 'BAccordion')

const modelValue = defineModel<BAccordionProps['modelValue']>({
  default: undefined,
})

const computedId = useId(() => props.id, 'accordion')

const computedClasses = computed(() => ({
  'accordion-flush': props.flush,
}))

provide(accordionInjectionKey, {
  openItem: readonly(modelValue),
  free: toRef(() => props.free),
  initialAnimation: toRef(() => props.initialAnimation),
  lazy: toRef(() => props.lazy),
  unmountLazy: toRef(() => props.unmountLazy),
  setOpenItem: (id: string) => {
    modelValue.value = id
  },
})
</script>

<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts" generic="Free extends boolean = false">
import {computed, provide, readonly, type Ref, toRef, watch} from 'vue'
import {accordionInjectionKey} from '../../utils/keys'
import {useId} from '../../composables/useId'
import {useDefaults} from '../../composables/useDefaults'
import type {BAccordionProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<Omit<BAccordionProps<Free>, 'modelValue'>>(), {
  flush: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  free: false as any,
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

const modelValue = defineModel<BAccordionProps<Free>['modelValue']>({
  default: undefined,
})

const computedId = useId(() => props.id, 'accordion')

const computedClasses = computed(() => ({
  'accordion-flush': props.flush,
}))

watch(
  () => props.free,
  (newValue) => {
    if (newValue || newValue === '') {
      if (!Array.isArray(modelValue.value)) {
        modelValue.value = [modelValue.value]
      }
    }
  }
)

const toggleOpenItem = (id: string) => {
  if (props.free === false) {
    ;(modelValue.value as string | null) = modelValue.value === id ? null : id
    return
  }
  if (!Array.isArray(modelValue.value)) {
    ;(modelValue.value as string[] | string | null) = [id]
    return
  }
  const idx = (modelValue.value as unknown as string[]).indexOf(id)
  if (idx === -1) {
    modelValue.value.push(id)
    return
  }
  modelValue.value.splice(idx, 1)
}

provide(accordionInjectionKey, {
  openItem: readonly(modelValue) as Readonly<Ref<string[] | string | null>>,
  free: toRef(() => props.free),
  initialAnimation: toRef(() => props.initialAnimation),
  lazy: toRef(() => props.lazy),
  unmountLazy: toRef(() => props.unmountLazy),
  toggleOpenItem,
})
</script>

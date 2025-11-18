<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  provide,
  readonly,
  ref,
  type ShallowRef,
  shallowRef,
  toRef,
  unref,
  type VNode,
  watch,
} from 'vue'
import {accordionInjectionKey} from '../../utils/keys'
import {useId} from '../../composables/useId'
import {useDefaults} from '../../composables/useDefaults'
import type {BAccordionProps} from '../../types/ComponentProps'
import {flattenFragments} from '../../utils/flattenFragments'
import BAccordionItem from './BAccordionItem.vue'
import {sortSlotElementsByPosition} from '../../utils/dom'
import type {BAccordionSlots} from '../../types'
import {isReadOnlyArray} from '../../utils/object'

const _props = withDefaults(defineProps<Omit<BAccordionProps, 'modelValue' | 'index'>>(), {
  flush: false,
  free: false,
  initialAnimation: false,
  id: undefined,
  lazy: false,
  unmountLazy: false,
})
const props = useDefaults(_props, 'BAccordion')
const slots = defineSlots<BAccordionSlots>()

const modelValue = defineModel<BAccordionProps['modelValue']>({
  default: undefined,
})

const index = defineModel<BAccordionProps['index']>('index', {
  default: undefined,
})

const itemElementsArray = ref<VNode[]>([])

const updateItemElementsArray = () => {
  const itemElements = flattenFragments(slots.default?.({}) ?? [])
  itemElementsArray.value = (Array.isArray(itemElements) ? itemElements : [itemElements]).filter(
    (item) => item.type === BAccordionItem
  )
}
updateItemElementsArray()

watch(
  () => slots.default?.({}),
  () => {
    updateItemElementsArray()
    nextTick(() => {
      sortAccordionItems()
    })
  }
)

interface AccordionItem {
  id: string
  el: Readonly<ShallowRef<HTMLElement | null>>
}

const accordionItems = shallowRef<AccordionItem[]>([])

const sortAccordionItems = () => {
  accordionItems.value = accordionItems.value.sort((a, b) =>
    sortSlotElementsByPosition(unref(a.el), unref(b.el))
  )
  if (modelValue.value) {
    if (isReadOnlyArray(modelValue.value)) {
      const next = modelValue.value
        .map((id) => accordionItems.value.findIndex((item) => item.id === id))
        .filter((i) => i !== -1)

      if (next.length !== modelValue.value.length) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn('[BAccordion] Unknown item id in v-model:', modelValue.value)
        }
      }
      index.value = next
    } else {
      const idx = accordionItems.value.findIndex((item) => item.id === modelValue.value)
      if (idx !== -1) index.value = idx
    }
  } else if (index.value !== undefined) {
    modelValue.value = isReadOnlyArray(index.value)
      ? index.value.map((idx) => accordionItems.value[idx]?.id)
      : accordionItems.value[index.value]?.id
  }
}

const computedId = useId(() => props.id, 'accordion')

const computedClasses = computed(() => ({
  'accordion-flush': props.flush,
}))

const areEqual = (a: unknown, b: unknown) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((item, index) => item === b[index])
  }
  return a === b
}

watch(index, (newValue, oldValue) => {
  if (areEqual(newValue, oldValue)) return
  if (index.value === undefined) {
    modelValue.value = undefined
    return
  }

  if (!props.free) {
    const idx = !isReadOnlyArray(index.value) ? index.value : index.value?.[0]
    if (accordionItems.value[idx]?.id) {
      if (modelValue.value !== accordionItems.value[idx]?.id) {
        modelValue.value = accordionItems.value[idx]?.id
      }
    } else {
      nextTick(() => {
        index.value = undefined
      })
    }
  } else {
    // free mode
    if (isReadOnlyArray(index.value)) {
      const newValue = index.value.map((item) => accordionItems.value[item]?.id)
      if (!areEqual(newValue, modelValue.value)) {
        modelValue.value = newValue
      }
    } else {
      const newValue = accordionItems.value[index.value]?.id
      if (newValue === undefined) {
        nextTick(() => {
          index.value = undefined
        })
        return
      }
      if (!areEqual(newValue, modelValue.value)) {
        modelValue.value = newValue
      }
    }
  }
})

watch(
  modelValue,
  (newValue, oldValue) => {
    if (areEqual(newValue, oldValue)) return
    if (modelValue.value === undefined) {
      index.value = undefined
      return
    }

    if (!props.free) {
      const idx = accordionItems.value.findIndex(
        (item) =>
          item.id ===
          (!isReadOnlyArray(modelValue.value) ? modelValue.value : modelValue.value?.[0])
      )

      if (idx !== -1) {
        if (index.value !== idx) {
          index.value = idx
        }
      } else {
        nextTick(() => {
          modelValue.value = undefined
        })
      }
    } else if (props.free) {
      if (isReadOnlyArray(modelValue.value)) {
        const idxes = modelValue.value
          .map((value) => accordionItems.value.findIndex((item) => item.id === value))
          .filter((index) => index !== -1)
        if (idxes.length > 0) {
          if (!areEqual(idxes, index.value)) {
            index.value = idxes
          }
        } else {
          nextTick(() => {
            modelValue.value = undefined
          })
        }
      } else {
        const newValue = accordionItems.value.findIndex((item) => item.id === modelValue.value)
        if (!areEqual(newValue, index.value)) {
          index.value = newValue
        }
      }
    }
  },
  {deep: true}
)

watch(
  () => props.free,
  (free) => {
    if (modelValue.value) {
      if (!free && isReadOnlyArray(modelValue.value)) {
        // eslint-disable-next-line prefer-destructuring
        modelValue.value = modelValue.value[0]
      } else if (free && !isReadOnlyArray(modelValue.value)) {
        modelValue.value = [modelValue.value]
      }
    }
  }
)

provide(accordionInjectionKey, {
  openItem: readonly(modelValue),
  free: toRef(() => props.free),
  initialAnimation: toRef(() => props.initialAnimation),
  lazy: toRef(() => props.lazy),
  unmountLazy: toRef(() => props.unmountLazy),
  setOpenItem: (id: string) => {
    if (props.free && !isReadOnlyArray(modelValue.value)) {
      if (modelValue.value !== undefined) {
        modelValue.value = [modelValue.value, id]
      } else {
        modelValue.value = [id]
      }
      return
    }
    if (!props.free && isReadOnlyArray(modelValue.value)) {
      modelValue.value = id
      return
    }
    if (isReadOnlyArray(modelValue.value)) {
      if (!modelValue.value.includes(id)) {
        modelValue.value = [...modelValue.value, id]
      }
    } else {
      modelValue.value = id
    }
  },
  setCloseItem: (id: string) => {
    if (!props.free && isReadOnlyArray(modelValue.value)) {
      modelValue.value = undefined
      return
    }
    if (isReadOnlyArray(modelValue.value)) {
      const next = modelValue.value.filter((item) => item !== id)
      modelValue.value = next.length ? next : undefined
    } else {
      if (modelValue.value === id) {
        modelValue.value = undefined
      }
    }
  },
  registerAccordionItem: (id: string, el: Readonly<ShallowRef<HTMLElement | null>>) => {
    accordionItems.value = [...accordionItems.value, {id, el}]
    if (accordionItems.value.length === itemElementsArray.value.length) {
      sortAccordionItems()
    }
  },
  unregisterAccordionItem: (id: string) => {
    accordionItems.value = accordionItems.value.filter((item) => item.id !== id)
  },
})
</script>

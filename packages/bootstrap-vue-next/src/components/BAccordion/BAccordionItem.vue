<template>
  <div
    ref="_el"
    class="accordion-item"
    v-bind="props.wrapperAttrs"
    :class="processedAttrs.wrapperClass"
  >
    <BCollapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      :class="props.collapseClass"
      :aria-labelledby="`${computedId}-heading`"
      v-bind="processedAttrs.collapseAttrs"
      :tag="props.tag"
      :show="props.show"
      :horizontal="props.horizontal"
      :visible="props.visible"
      :is-nav="props.isNav"
      :lazy="props.lazy || parentData?.lazy.value"
      :unmount-lazy="props.unmountLazy || parentData?.unmountLazy.value"
      @show="emit('show', $event)"
      @shown="emit('shown', $event)"
      @hide="emit('hide', $event)"
      @hidden="emit('hidden', $event)"
      @hide-prevented="emit('hide-prevented', $event)"
      @show-prevented="emit('show-prevented', $event)"
      @toggle-prevented="emit('toggle-prevented', $event)"
      @toggle="emit('toggle', $event)"
    >
      <template #header="{visible: toggleVisible, toggle: slotToggle}">
        <component
          :is="props.headerTag"
          :id="`${computedId}-heading`"
          class="accordion-header"
          :class="props.headerClass"
          v-bind="props.headerAttrs"
        >
          <button
            class="accordion-button"
            v-bind="props.buttonAttrs"
            :class="[{collapsed: !toggleVisible}, props.buttonClass]"
            type="button"
            :aria-expanded="toggleVisible ? 'true' : 'false'"
            :aria-controls="computedId"
            @click="slotToggle"
          >
            <slot name="title"> {{ props.title }} </slot>
          </button>
        </component>
      </template>
      <div class="accordion-body" v-bind="props.bodyAttrs" :class="props.bodyClass">
        <slot />
      </div>
    </BCollapse>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  useAttrs,
  useTemplateRef,
  watch,
} from 'vue'
import BCollapse from '../BCollapse/BCollapse.vue'
import {accordionInjectionKey} from '../../utils/keys'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BAccordionItemProps} from '../../types/ComponentProps'
import type {BCollapseEmits} from '../../types/ComponentEmits'

defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
const processedAttrs = computed(() => {
  const {class: wrapperClass, ...collapseAttrs} = attrs
  return {wrapperClass, collapseAttrs}
})

const _props = withDefaults(defineProps<Omit<BAccordionItemProps, 'modelValue'>>(), {
  bodyAttrs: undefined,
  bodyClass: undefined,
  buttonAttrs: undefined,
  buttonClass: undefined,
  collapseClass: undefined,
  headerAttrs: undefined,
  headerClass: undefined,
  headerTag: 'h2',
  horizontal: undefined,
  id: undefined,
  isNav: undefined,
  lazy: false,
  unmountLazy: false,
  tag: undefined,
  title: undefined,
  show: undefined,
  visible: false,
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BAccordionItem')

const emit = defineEmits<BCollapseEmits>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
}>()

const parentData = inject(accordionInjectionKey, null)

const computedId = useId(() => props.id, 'accordion_item')

const modelValue = defineModel<Exclude<BAccordionItemProps['modelValue'], undefined>>({
  default: false,
})

if (modelValue.value) {
  parentData?.setOpenItem(computedId.value)
} else {
  modelValue.value =
    (Array.isArray(parentData?.openItem.value)
      ? parentData?.openItem.value.includes(computedId.value)
      : parentData?.openItem.value === computedId.value) && !parentData?.initialAnimation.value
}

const el = useTemplateRef<HTMLElement>('_el')
parentData?.registerAccordionItem(computedId.value, el)

onUnmounted(() => {
  parentData?.unregisterAccordionItem(computedId.value)
})

onMounted(() => {
  if (!modelValue.value && parentData?.openItem.value === computedId.value) {
    nextTick(() => {
      modelValue.value = true
    })
  }
})

const openInParent = computed(() =>
  Array.isArray(parentData?.openItem.value)
    ? parentData?.openItem.value.includes(computedId.value)
    : parentData?.openItem.value === computedId.value
)

watch(
  () => parentData?.openItem.value,
  () => (modelValue.value = openInParent.value)
)
watch(modelValue, () => {
  if (modelValue.value && !openInParent.value) {
    parentData?.setOpenItem(computedId.value)
  } else if (!modelValue.value && openInParent.value) {
    parentData?.setCloseItem(computedId.value)
  }
})
</script>

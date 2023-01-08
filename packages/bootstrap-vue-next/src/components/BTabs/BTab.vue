<template>
  <component
    :is="tag"
    :id="id"
    class="tab-pane"
    :class="computedClasses"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script setup lang="ts">
// import type {BTabProps} from '../../types/components'
import {computed, inject, ref, toRef, watch} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ClassValue} from '../../types'
import {injectionKey} from './BTabs.vue'

interface BTabProps {
  id?: string
  title?: string
  active?: Booleanish
  buttonId?: string
  disabled?: Booleanish
  lazy?: Booleanish
  lazyOnce?: Booleanish
  noBody?: boolean | string
  tag?: string
  titleItemClass?: ClassValue
  titleLinkAttributes?: Record<string, unknown>
  titleLinkClass?: ClassValue
}

const props = withDefaults(defineProps<BTabProps>(), {
  active: false,
  buttonId: undefined,
  disabled: false,
  lazy: undefined,
  lazyOnce: undefined,
  noBody: false,
  tag: 'div',
  titleLinkAttributes: undefined,
})

const parentData = inject(injectionKey, null)

const activeBoolean = useBooleanish(toRef(props, 'active'))
const disabledBoolean = useBooleanish(toRef(props, 'disabled'))
const lazyBoolean = useBooleanish(toRef(props, props.lazyOnce !== undefined ? 'lazyOnce' : 'lazy'))

const lazyRenderCompleted = ref(false)

const computedLazy = computed<boolean>(() => !!(parentData?.lazy || lazyBoolean.value))
const computedLazyOnce = computed<boolean>(() => props.lazyOnce !== undefined)

const computedActive = computed<boolean>(() => activeBoolean.value && !disabledBoolean.value)
const showSlot = computed<boolean>(() => {
  const hasLazyRenderedOnce =
    computedLazy.value && computedLazyOnce.value && lazyRenderCompleted.value
  return computedActive.value || !computedLazy.value || hasLazyRenderedOnce
})

const computedClasses = computed(() => ({
  'active': activeBoolean.value,
  'show': activeBoolean.value,
  'card-body': parentData?.card && props.noBody === false,
}))

watch(
  () => showSlot.value,
  (shown) => {
    if (shown && !lazyRenderCompleted.value) lazyRenderCompleted.value = true
  }
)
</script>

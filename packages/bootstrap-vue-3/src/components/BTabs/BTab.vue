<template>
  <component
    :is="tag"
    :id="id"
    class="tab-pane"
    :class="classes"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script setup lang="ts">
// import type {BTabProps} from '../../types/components'
import {computed, inject} from 'vue'
import {injectionKey} from './BTabs.vue'

interface BTabProps {
  id?: string
  title?: string
  active?: boolean
  buttonId?: string
  disabled?: boolean
  lazy?: boolean
  noBody?: boolean | string
  tag?: string
  titleItemClass?: Array<unknown> | Record<string, unknown> | string
  titleLinkAttributes?: Record<string, unknown>
  titleLinkClass?: Array<unknown> | Record<string, unknown> | string
}

const props = withDefaults(defineProps<BTabProps>(), {
  active: false,
  buttonId: undefined,
  disabled: false,
  lazy: false,
  noBody: false,
  tag: 'div',
  titleItemClass: undefined,
  titleLinkAttributes: undefined,
  titleLinkClass: undefined,
})

const parentData = inject(injectionKey, null)

const computedLazy = computed<boolean>(() => parentData?.lazy || props.lazy)
const computedActive = computed<boolean>(() => props.active && !props.disabled)
const showSlot = computed<boolean>(() => computedActive.value || !computedLazy.value)
const classes = computed(() => ({
  'active': props.active,
  'show': props.active,
  'card-body': parentData?.card && props.noBody === false,
}))
</script>

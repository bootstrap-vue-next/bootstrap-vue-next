<template>
  <component :is="tag" class="nav" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {AlignmentJustifyContent} from '../../types'
import {useAlignment} from '../../composables'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    align?: AlignmentJustifyContent
    cardHeader?: boolean
    fill?: boolean
    justified?: boolean
    pills?: boolean
    small?: boolean
    tabs?: boolean
    tag?: string
    underline?: boolean
    vertical?: boolean
  }>(),
  {
    align: undefined,
    cardHeader: false,
    fill: false,
    justified: false,
    pills: false,
    small: false,
    tabs: false,
    tag: 'ul',
    underline: false,
    vertical: false,
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const cardHeaderBoolean = computed(() => props.cardHeader)
const fillBoolean = computed(() => props.fill)
const justifiedBoolean = computed(() => props.justified)
const pillsBoolean = computed(() => props.pills)
const smallBoolean = computed(() => props.small)
const tabsBoolean = computed(() => props.tabs)
const verticalBoolean = computed(() => props.vertical)
const alignment = useAlignment(() => props.align)
const underlineBoolean = computed(() => props.underline)

const computedClasses = computed(() => ({
  'nav-tabs': tabsBoolean.value,
  'nav-pills': pillsBoolean.value && !tabsBoolean.value,
  'card-header-tabs': !verticalBoolean.value && cardHeaderBoolean.value && tabsBoolean.value,
  'card-header-pills':
    !verticalBoolean.value && cardHeaderBoolean.value && pillsBoolean.value && !tabsBoolean.value,
  'flex-column': verticalBoolean.value,
  'nav-fill': !verticalBoolean.value && fillBoolean.value,
  'nav-justified': !verticalBoolean.value && justifiedBoolean.value,
  [alignment.value]: !verticalBoolean.value && props.align !== undefined,
  'small': smallBoolean.value,
  'nav-underline': underlineBoolean.value,
}))
</script>

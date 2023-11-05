<template>
  <component :is="tag" class="nav" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {AlignmentJustifyContent, Booleanish} from '../../types'
import {useAlignment, useBooleanish} from '../../composables'
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    align?: AlignmentJustifyContent
    cardHeader?: Booleanish
    fill?: Booleanish
    justified?: Booleanish
    pills?: Booleanish
    small?: Booleanish
    tabs?: Booleanish
    tag?: string
    underline?: Booleanish
    vertical?: Booleanish
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

const cardHeaderBoolean = useBooleanish(() => props.cardHeader)
const fillBoolean = useBooleanish(() => props.fill)
const justifiedBoolean = useBooleanish(() => props.justified)
const pillsBoolean = useBooleanish(() => props.pills)
const smallBoolean = useBooleanish(() => props.small)
const tabsBoolean = useBooleanish(() => props.tabs)
const verticalBoolean = useBooleanish(() => props.vertical)
const alignment = useAlignment(() => props.align)
const underlineBoolean = useBooleanish(() => props.underline)

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

<template>
  <component :is="tag" class="nav" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BNavProps} from '../types/components'
import type {Alignment, Booleanish} from '../../types'
import {useAlignment, useBooleanish} from '../../composables'
import {computed, toRef} from 'vue'

interface BNavProps {
  align?: Alignment.JustifyContent
  cardHeader?: Booleanish
  fill?: Booleanish
  justified?: Booleanish
  pills?: Booleanish
  small?: Booleanish
  tabs?: Booleanish
  tag?: string
  vertical?: Booleanish
}

const props = withDefaults(defineProps<BNavProps>(), {
  cardHeader: false,
  fill: false,
  justified: false,
  pills: false,
  small: false,
  tabs: false,
  tag: 'ul',
  vertical: false,
})

const cardHeaderBoolean = useBooleanish(toRef(props, 'cardHeader'))
const fillBoolean = useBooleanish(toRef(props, 'fill'))
const justifiedBoolean = useBooleanish(toRef(props, 'justified'))
const pillsBoolean = useBooleanish(toRef(props, 'pills'))
const smallBoolean = useBooleanish(toRef(props, 'small'))
const tabsBoolean = useBooleanish(toRef(props, 'tabs'))
const verticalBoolean = useBooleanish(toRef(props, 'vertical'))
const alignment = useAlignment(toRef(props, 'align'))

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
}))
</script>

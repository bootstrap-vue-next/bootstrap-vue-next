<template>
  <component :is="tag" class="nav" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BNavProps} from '../types/components'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed} from 'vue'

interface BNavProps {
  align?: string
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

const cardHeaderBoolean = computed(() => resolveBooleanish(props.cardHeader))
const fillBoolean = computed(() => resolveBooleanish(props.fill))
const justifiedBoolean = computed(() => resolveBooleanish(props.justified))
const pillsBoolean = computed(() => resolveBooleanish(props.pills))
const smallBoolean = computed(() => resolveBooleanish(props.small))
const tabsBoolean = computed(() => resolveBooleanish(props.tabs))
const verticalBoolean = computed(() => resolveBooleanish(props.vertical))

const classes = computed(() => ({
  'nav-tabs': tabsBoolean.value,
  'nav-pills': pillsBoolean.value && !tabsBoolean.value,
  'card-header-tabs': !verticalBoolean.value && cardHeaderBoolean.value && tabsBoolean.value,
  'card-header-pills': !verticalBoolean.value && cardHeaderBoolean.value && !tabsBoolean.value,
  'flex-column': verticalBoolean.value,
  'nav-fill': fillBoolean.value,
  'nav-justified': justifiedBoolean.value,
  [`justify-content-${props.align}`]: props.align,
  'small': smallBoolean.value,
}))
</script>

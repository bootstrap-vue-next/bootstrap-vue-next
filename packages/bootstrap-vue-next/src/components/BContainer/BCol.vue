<template>
  <component :is="props.tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BColProps} from '../types'
import {getClasses} from '../utils'
import {useDefaults} from '../composables'

const _props = withDefaults(defineProps<BColProps>(), {
  alignSelf: undefined,
  col: false,
  cols: undefined,
  offset: undefined,
  order: undefined,
  tag: 'div',
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xxl: false,
  offsetLg: undefined,
  offsetMd: undefined,
  offsetSm: undefined,
  offsetXl: undefined,
  offsetXxl: undefined,
  orderLg: undefined,
  orderMd: undefined,
  orderSm: undefined,
  orderXl: undefined,
  orderXxl: undefined,
})

const props = useDefaults(_props, 'BCol')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const classList = computed(() => [
  ...getClasses(
    {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      xxl: props.xxl,
    },
    ['sm', 'md', 'lg', 'xl', 'xxl'],
    'col'
  ),
  ...getClasses(
    {
      order: props.order,
      orderLg: props.orderLg,
      orderMd: props.orderMd,
      orderSm: props.orderSm,
      orderXl: props.orderXl,
      orderXxl: props.orderXxl,
    },
    ['order', 'orderLg', 'orderMd', 'orderSm', 'orderXl', 'orderXxl'],
    'order'
  ),
  ...getClasses(
    {
      offset: props.offset,
      offsetLg: props.offsetLg,
      offsetMd: props.offsetMd,
      offsetSm: props.offsetSm,
      offsetXl: props.offsetXl,
      offsetXxl: props.offsetXxl,
    },
    ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXxl'],
    'offset'
  ),
])

const computedClasses = computed(() => [
  classList.value,
  {
    col: props.col || (!classList.value.some((v) => v.startsWith('col-')) && !props.cols),
    [`col-${props.cols}`]: props.cols !== undefined,
    [`offset-${props.offset}`]: props.offset !== undefined,
    [`order-${props.order}`]: props.order !== undefined,
    [`align-self-${props.alignSelf}`]: props.alignSelf !== undefined,
  },
])
</script>

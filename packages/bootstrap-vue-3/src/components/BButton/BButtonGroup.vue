<template>
  <component :is="tag" :class="classes" role="group" :aria-role="ariaRole">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BButtonGroupProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {computed} from 'vue'
import {resolveBooleanish} from '../../utils'

interface BButtonGroupProps {
  ariaRole?: string
  size?: string
  tag?: string
  vertical?: Booleanish
}

const props = withDefaults(defineProps<BButtonGroupProps>(), {
  ariaRole: 'group',
  tag: 'div',
  vertical: false,
})

const verticalBoolean = computed<boolean>(() => resolveBooleanish(props.vertical))

const classes = computed(() => ({
  'btn-group': !verticalBoolean.value,
  'btn-group-vertical': verticalBoolean.value,
  [`btn-group-${props.size}`]: props.size,
}))
</script>

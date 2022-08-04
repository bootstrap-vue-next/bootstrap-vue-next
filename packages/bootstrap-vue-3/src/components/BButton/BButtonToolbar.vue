<template>
  <div :class="classes" class="btn-toolbar" role="toolbar" :aria-label="ariaRole">
    <slot />
  </div>
</template>

<script setup lang="ts">
// import type {BButtonToolbarProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {computed} from 'vue'
import {resolveBooleanish} from '../../utils'

interface BButtonToolbarProps {
  ariaRole?: string
  justify?: Booleanish
  // keyNav?: boolean
}

const props = withDefaults(defineProps<BButtonToolbarProps>(), {
  ariaRole: 'group',
  justify: false,
})

const justifyBoolean = computed<boolean>(() => resolveBooleanish(props.justify))

const classes = computed(() => ({
  'justify-content-between': justifyBoolean.value,
}))
</script>

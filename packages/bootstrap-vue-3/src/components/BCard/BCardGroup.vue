<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BCardGroupProps} from '../../types/components'
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'

interface BCardGroupProps {
  columns?: Booleanish
  deck?: Booleanish
  tag?: string
}

const props = withDefaults(defineProps<BCardGroupProps>(), {
  columns: false,
  deck: false,
  tag: 'div',
})

const columnsBoolean = computed<boolean>(() => resolveBooleanish(props.columns))
const deckBoolean = computed<boolean>(() => resolveBooleanish(props.deck))

const classes = computed(() =>
  deckBoolean.value ? 'card-deck' : columnsBoolean.value ? 'card-columns' : 'card-group'
)
</script>

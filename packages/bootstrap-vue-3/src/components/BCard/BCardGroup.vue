<template>
  <component :is="tag" :class="computedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import type {BCardGroupProps} from '../../types/components'
import {computed, toRef} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

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

const columnsBoolean = useBooleanish(toRef(props, 'columns'))
const deckBoolean = useBooleanish(toRef(props, 'deck'))

const cardTypeClass = computed(() =>
  deckBoolean.value ? 'card-deck' : columnsBoolean.value ? 'card-columns' : 'card-group'
)

const computedClasses = computed(() => [cardTypeClass.value])
</script>

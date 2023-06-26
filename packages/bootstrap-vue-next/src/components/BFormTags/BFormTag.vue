<template>
  <component
    :is="tag"
    :id="computedId"
    :title="tagText"
    class="badge b-form-tag d-inline-flex align-items-center mw-100"
    :class="computedClasses"
    :aria-labelledby="taglabelId"
  >
    <span :id="taglabelId" class="b-form-tag-content flex-grow-1 text-truncate">
      <slot>{{ tagText }}</slot>
    </span>
    <BCloseButton
      v-if="!disabledBoolean && !noRemoveBoolean"
      aria-keyshortcuts="Delete"
      :aria-label="removeLabel"
      class="b-form-tag-remove"
      :white="variant !== null && !['warning', 'info', 'light'].includes(variant)"
      :aria-describedby="taglabelId"
      :aria-controls="id"
      @click="emit('remove', tagText)"
    />
  </component>
</template>

<script setup lang="ts">
import {computed, useSlots} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, ColorVariant} from '../../types'
import BCloseButton from '../BButton/BCloseButton.vue'

const props = withDefaults(
  defineProps<{
    id?: string
    title?: string
    disabled?: Booleanish
    noRemove?: Booleanish
    pill?: Booleanish
    removeLabel?: string
    tag?: string
    variant?: ColorVariant | null
  }>(),
  {
    id: undefined,
    title: undefined,
    disabled: false,
    noRemove: false,
    pill: false,
    removeLabel: 'Remove tag',
    tag: 'span',
    variant: 'secondary',
  }
)

const emit = defineEmits<{
  remove: [value: string]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const slots = useSlots()

const computedId = useId(() => props.id)

const disabledBoolean = useBooleanish(() => props.disabled)
const noRemoveBoolean = useBooleanish(() => props.noRemove)
const pillBoolean = useBooleanish(() => props.pill)

const tagText = computed<string>(
  () => ((slots.default?.()[0].children ?? '').toString() || props.title) ?? ''
)

const taglabelId = computed<string>(() => `${computedId.value}taglabel__`)

const computedClasses = computed(() => ({
  [`bg-${props.variant}`]: props.variant !== null,
  'text-dark': props.variant !== null && ['warning', 'info', 'light'].includes(props.variant),
  'rounded-pill': pillBoolean.value,
  'disabled': disabledBoolean.value,
}))
</script>

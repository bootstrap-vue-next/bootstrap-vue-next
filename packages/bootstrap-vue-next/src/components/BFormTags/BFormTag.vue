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
      :aria-describedby="taglabelId"
      :aria-controls="id"
      @click="emit('remove', tagText)"
    />
  </component>
</template>

<script setup lang="ts">
import {computed, toRef} from 'vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, ColorVariant} from '../../types'
import BCloseButton from '../BButton/BCloseButton.vue'

const props = withDefaults(
  defineProps<{
    disabled?: Booleanish
    id?: string
    noRemove?: Booleanish
    pill?: Booleanish
    removeLabel?: string
    tag?: string
    title?: string
    variant?: ColorVariant | null
  }>(),
  {
    disabled: false,
    id: undefined,
    noRemove: false,
    pill: false,
    removeLabel: 'Remove tag',
    tag: 'span',
    title: undefined,
    variant: 'secondary',
  }
)

const emit = defineEmits<{
  remove: [value: string]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id)

const disabledBoolean = useBooleanish(() => props.disabled)
const noRemoveBoolean = useBooleanish(() => props.noRemove)
const pillBoolean = useBooleanish(() => props.pill)

const tagText = computed(
  () => ((slots.default?.({})[0].children ?? '').toString() || props.title) ?? ''
)
const taglabelId = toRef(() => `${computedId.value}taglabel__`)

const computedClasses = computed(() => ({
  [`text-bg-${props.variant}`]: props.variant !== null,
  'rounded-pill': pillBoolean.value,
  'disabled': disabledBoolean.value,
}))
</script>

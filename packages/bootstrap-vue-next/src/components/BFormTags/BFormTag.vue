<template>
  <component
    :is="props.tag"
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
      v-if="!props.disabled && !props.noRemove"
      aria-keyshortcuts="Delete"
      :aria-label="props.removeLabel"
      class="b-form-tag-remove"
      :aria-describedby="taglabelId"
      :aria-controls="props.id"
      @click="emit('remove', tagText)"
    />
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BFormTagProps} from '../../types/ComponentProps'
import BCloseButton from '../BButton/BCloseButton.vue'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'

const _props = withDefaults(defineProps<BFormTagProps>(), {
  disabled: false,
  id: undefined,
  noRemove: false,
  pill: false,
  removeLabel: 'Remove tag',
  tag: 'span',
  title: undefined,
  variant: 'secondary',
})
const props = useDefaults(_props, 'BFormTag')

const emit = defineEmits<{
  remove: [value: string]
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id)

const tagText = computed(
  () => ((slots.default?.({})[0].children ?? '').toString() || props.title) ?? ''
)
const taglabelId = computed(() => `${computedId.value}taglabel__`)

const colorClasses = useColorVariantClasses(props)
const computedClasses = computed(() => [
  colorClasses.value,
  {
    'rounded-pill': props.pill,
    'disabled': props.disabled,
  },
])
</script>

<template>
  <div
    :id="computedId"
    :class="computedClasses"
    role="slider"
    :aria-valuemin="0"
    :aria-valuemax="clampedStars"
    :aria-valuenow="displayValue"
    :aria-valuetext="`${displayValue} of ${clampedStars}`"
    :aria-disabled="props.disabled || undefined"
    :tabindex="props.disabled ? -1 : 0"
    @keydown="onKeydown"
  >
    <span
      v-if="props.showClear && !props.readonly && !props.disabled"
      class="clear-button-spacing"
      @click="clearRating"
    >
      <slot name="icon-clear">
        <svg
          viewBox="0 0 16 16"
          role="img"
          aria-label="x"
          xmlns="http://www.w3.org/2000/svg"
          class="clear-icon"
        >
          <g>
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
            />
          </g>
        </svg>
      </slot>
    </span>
    <span
      v-for="(starIndex, index) in clampedStars"
      :key="starIndex"
      class="star"
      @click="selectRating(starIndex)"
    >
      <slot :star-index="starIndex" :is-filled="isIconFull(index)" :is-half="isIconHalf(index)">
        <span class="b-form-rating-star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="computedSize"
            :height="computedSize"
            fill="currentColor"
            :class="[iconColors[index].class]"
            :style="iconColors[index].style"
            class="star-spacing"
            viewBox="0 0 16 16"
          >
            <path
              v-if="isIconFull(index)"
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
            <path
              v-else-if="isIconHalf(index)"
              d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
            />
            <path
              v-else
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.522 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
            />
          </svg>
        </span>
      </slot>
    </span>

    <span
      v-if="props.showValue || props.showValueMax"
      :style="{fontSize: computedSize}"
      class="rating-value-text"
    >
      {{ displayValueText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BFormRatingProps} from '../../types/ComponentProps'
import {useId} from '../../composables/useId'
import type {BFormRatingSlots} from '../../types'

const _props = withDefaults(defineProps<Omit<BFormRatingProps, 'modelValue'>>(), {
  color: '',
  id: undefined,
  inline: false,
  noBorder: false,
  precision: 0,
  readonly: false,
  disabled: false,
  showClear: false,
  showValue: false,
  showValueMax: false,
  size: '1rem',
  stars: 5,
  variant: undefined,
})
const props = useDefaults(_props, 'BFormRating')
defineSlots<BFormRatingSlots>()

const modelValue = defineModel<Exclude<BFormRatingProps['modelValue'], undefined>>({default: 0})

const computedId = useId(() => props.id, 'form-rating')

const computedClasses = computed(() => ({
  'is-readonly': props.readonly,
  'is-disabled': props.disabled,
  'no-border': props.noBorder,
  'b-form-rating': true,
  'd-inline-block': props.inline,
  'w-100': !props.inline,
}))

function isIconFull(index: number): boolean {
  return displayValue.value - index >= 1
}

function isIconHalf(index: number): boolean {
  const diff = displayValue.value - index
  return diff >= 0.5 && diff < 1
}

const hoverValue = ref<number | null>(null)

const localValue = computed({
  get: () => modelValue.value,
  set: (value: number) => {
    modelValue.value = value
  },
})

const displayValue = computed(() =>
  hoverValue.value !== null ? hoverValue.value : localValue.value
)

// Set the minimum amount of star can be render to 3
const clampedStars = computed(() => Math.max(3, props.stars))

const computedSize = computed(() => {
  if (props.size === 'sm') return '.875rem'
  if (props.size === 'lg') return '1.25rem'
  return props.size
})

const displayValueText = computed(() => {
  const decimalValue = props.precision > 0 ? roundedValue.value : displayValue.value
  if (props.showValueMax) {
    return `${decimalValue}/${clampedStars.value}`
  }
  if (props.showValue) {
    return `${decimalValue}`
  }
  return ''
})

const roundedValue = computed(() => {
  const val = displayValue.value
  const factor = 10 ** props.precision
  return Math.round((val + Number.EPSILON) * factor) / factor
})

const iconColors = computed(() =>
  Array.from({length: clampedStars.value}, () => {
    if (props.disabled) {
      return {class: 'is-disabled', style: {}}
    }
    if (props.variant) {
      return {class: `text-${props.variant}`, style: {}}
    }
    if (props.color) {
      return {class: '', style: {color: props.color}}
    }
    return {class: '', style: {}}
  })
)

//add keyboard support
function onKeydown(e: KeyboardEvent) {
  if (props.readonly || props.disabled) return

  let newValue = localValue.value

  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowUp':
      newValue = Math.min(newValue + 1, clampedStars.value)
      break
    case 'ArrowLeft':
    case 'ArrowDown':
      newValue = Math.max(newValue - 1, 0)
      break
    default:
      return
  }

  e.preventDefault()
  localValue.value = newValue
}

function selectRating(starIndex: number) {
  if (props.readonly || props.disabled) return
  const selectedRating = hoverValue.value !== null ? hoverValue.value : starIndex
  localValue.value = selectedRating
}

// clear
function clearRating() {
  hoverValue.value = null
  localValue.value = 0
}

defineExpose({
  hoverValue,
})
</script>

<template>
  <div
    :class="{'is-readonly': readonly}"
    class="b-form-rating"
    role="slider"
    :aria-valuemin="0"
    :aria-valuemax="clampedStars"
    :aria-valuenow="displayValue"
    :aria-valuetext="`${displayValue} of ${clampedStars}`"
    @mouseleave="onMouseLeave"
  >
    <span
      v-for="(starIndex, index) in clampedStars"
      :key="starIndex"
      class="star"
      @mousemove="onMouseMove($event, starIndex)"
      @click="selectRating(starIndex)"
    >
      <span v-if="hasStarSlot" class="b-form-rating-custom">
        <slot
          :star-index="starIndex"
          :icon-class="iconClasses[index]"
          :is-filled="iconClasses[index] === props.iconFull"
          :is-half="iconClasses[index] === props.iconHalf"
        />
      </span>

      <span v-else class="b-form-rating-star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :width="computedSize"
          :height="computedSize"
          fill="currentColor"
          :class="[iconColors[index].class, iconClasses[index]]"
          :style="{...iconColors[index].style, margin: '0 0.75rem'}"
          viewBox="0 0 16 16"
        >
          <path
            v-if="iconClasses[index] === props.iconFull"
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
          <path
            v-else-if="iconClasses[index] === props.iconHalf"
            d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
          />

          <path
            v-else
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.522 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
          />
        </svg>
      </span>
    </span>
    <span
      v-if="props.showValue || props.showValueMax"
      class="rating-value"
      :style="{fontSize: computedSize, color: '#495057', marginLeft: '1rem'}"
    >
      {{ displayValueText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {computed, defineSlots, ref} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import {isEmptySlot} from '../../utils/dom'
import type {BFormRatingProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BFormRatingProps>(), {
  modelValue: undefined,
  readonly: false,
  variant: '',
  color: '',
  stars: 5,
  precision: 0,
  iconFull: 'x',
  iconHalf: '',
  iconEmpty: 'o',
  showValue: false,
  showValueMax: false,
  size: '1.25rem',
})
const props = useDefaults(_props, 'BFormRating')
const modelValue = defineModel<number>({default: 0})

const slots = defineSlots<{
  default?: (props: {
    starIndex: number
    iconClass: string
    isFilled: boolean
    isHalf: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
}>()

const hasStarSlot = computed(() => !isEmptySlot(slots.default))

// reflect the event of stars changed to the parent component to display
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const hoverValue = ref<number | null>(null)

// retrieves the current model value, sets it and updates it when clicked
const localValue = computed({
  get: () => modelValue.value,
  set: (value: number) => {
    modelValue.value = value
    emit('update:modelValue', value)
  },
})

// hover over value - changes the state and shows it. otherwise, it shows it's default state (whether it's been selected)
// Change to only hover the hover star when star is implement
const displayValue = computed(() =>
  hoverValue.value !== null ? hoverValue.value : localValue.value
)

// creates an array matching the length of the stars, where each element represents the class for a single star.
// Returns the full icon if the star is fully filled, or the empty icon if it is not.
const iconClasses = computed(() =>
  Array.from({length: clampedStars.value}, (_, i) => {
    const difference = displayValue.value - i
    if (difference >= 1) return props.iconFull
    if (difference >= 0.5) return props.iconHalf
    return props.iconEmpty
  })
)
// Set the minimum amount of star can be render to 3
const clampedStars = computed(() => Math.max(3, props.stars))

// Set sizing
const computedSize = computed(() => {
  if (props.size === 'sm') return '1rem'
  if (props.size === 'lg') return '1.75rem'
  return props.size
})

// Compute the numeric rating text to display.
// Check whether precision is more than 0
// If so it will rounded to the nearest number of precision 1 = .0, 2 = .00 etc.
// - If showValueMax is true, render "value/max || rounded value/max"
// - Else if showValue is true, render just "value || rounded value"
// - Otherwise render nothing
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

// Computes the displayed value rounded to the specified precision.
// Example: If precision = 1, rounds to 1 decimal place (e.g., 3.1).
// Uses Number.EPSILON to avoid floating-point rounding errors.
const roundedValue = computed(() => {
  const val = displayValue.value
  const factor = 10 ** props.precision
  return Math.round((val + Number.EPSILON) * factor) / factor
})

// Determine star class & style: variant → color → default
const iconColors = computed(() =>
  Array.from({length: clampedStars.value}, () => {
    if (props.variant) {
      return {class: `text-${props.variant}`, style: {}}
    }
    if (props.color) {
      return {class: '', style: {color: props.color}}
    }
    return {class: '', style: {}}
  })
)

// hover
function onMouseMove(event: MouseEvent, index: number) {
  if (props.readonly) return
  const target = event.currentTarget as HTMLElement
  const {left, width} = target.getBoundingClientRect()
  const relativeX = event.clientX - left

  // If cursor in left half, hoverValue = index - 0.5, else full star index
  hoverValue.value = relativeX < width / 2 ? index - 0.5 : index
}

// return to original state
function onMouseLeave() {
  if (props.readonly) return
  hoverValue.value = null
}

// selects rating
function selectRating(starIndex: number) {
  if (props.readonly) return
  // Use hoverValue if exists, otherwise full star index
  const selectedRating = hoverValue.value !== null ? hoverValue.value : starIndex
  localValue.value = selectedRating
}
</script>

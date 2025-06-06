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
      v-if="props.showClear && !props.readonly"
      class="clear-button"
      style="cursor: pointer; margin-left: 0.5rem"
      @click="clearRating"
    >
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
    </span>
    <span
      v-for="(starIndex, index) in clampedStars"
      :key="starIndex"
      class="star"
      @mousemove="onMouseMove($event, starIndex)"
      @click="selectRating(starIndex)"
    >
      <i
        :class="iconColors[index].class"
        :style="{...iconColors[index].style, fontSize: computedSize, margin: '0 0.75rem'}"
      >
        {{ iconClasses[index] }}
      </i>
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
import {computed, readonly, ref} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
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
  showClear: false,
  showValue: false,
  showValueMax: false,
  size: '1.25rem',
})
const props = useDefaults(_props, 'BFormRating')
const modelValue = defineModel<number>({default: 0})

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
  hoverValue.value = index
}

// return to original state
function onMouseLeave() {
  if (props.readonly) return
  hoverValue.value = null
}

// selects rating
function selectRating(starIndex: number) {
  if (props.readonly) return
  const selectedRating = hoverValue.value ?? starIndex
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

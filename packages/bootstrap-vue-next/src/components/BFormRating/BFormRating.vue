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
      <i
        :class="iconColors[index].class"
        :style="{...iconColors[index].style, fontSize: computedSize}"
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
import {computed, ref} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BFormRatingProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<BFormRatingProps>(), {
  modelValue: 0,
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
  size: '2rem',
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
  if (props.size === 'lg') return '3rem'
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

defineExpose({
  hoverValue,
})
</script>

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
      v-for="starIndex in clampedStars"
      :key="starIndex"
      class="star"
      @mousemove="onMouseMove($event, starIndex)"
      @click="selectRating(starIndex)"
    >
      <i :style="{color: iconColors[starIndex - 1], fontSize: size}">
        {{ iconClasses[starIndex - 1] }}
      </i>
    </span>
    <span
      v-if="props.showValue || props.ShowValueMax"
      class="rating-value"
      :style="{fontSize: size, color: '#333', marginLeft: '1rem'}"
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
  stars: 5,
  precision: 1,
  iconFull: 'x',
  iconHalf: '',
  iconEmpty: 'o',
  colorFull: '#f3a000',
  colorEmpty: '#c8c8c8',
  showValue: false,
  ShowValueMax: false,
  size: '5rem',
})
const props = useDefaults(_props, 'BFormRating')

const modelValue = defineModel<number>({default: 0})

// reflect the event of stars changed to the parent component to display
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const hoverValue = ref<number | null>(null)

// retrieves the current model value, sets it and updates it when clicked????
const localValue = computed({
  get: () => modelValue.value,
  set: (value: number) => {
    modelValue.value = value
    emit('update:modelValue', value)
  },
})

// hover over value - changes the state and shows it. otherwise, it shows it's default state (whether it's been selected)
const displayValue = computed(() =>
  hoverValue.value !== null ? hoverValue.value : localValue.value
)

// creates an array matching the length of the stars, where each element represents the class for a single star. Returns the full icon if the star is fully filled, or the empty icon if it is not.
const iconClasses = computed(() =>
  Array.from({length: clampedStars.value}, (_, i) => {
    const difference = displayValue.value - i
    if (difference >= 1) return props.iconFull
    return props.iconEmpty
  })
)
// Set the minimum amount of star can be render to 3
const clampedStars = computed(() => Math.max(3, props.stars))

const displayValueText = computed(() => {
  if (props.ShowValueMax) {
    return `${displayValue.value}/${clampedStars.value}`
  }
  return props.showValue ? `${displayValue.value}` : ''
})
// since arrays are zero based, -1 to match, adds the styling that connects to the above function
const iconColors = computed(() =>
  Array.from({length: clampedStars.value}, (_, i) => {
    const difference = displayValue.value - i
    return difference >= props.precision ? props.colorFull : props.colorEmpty
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
</script>

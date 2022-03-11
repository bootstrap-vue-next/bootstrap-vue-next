<template>
  <component
    :is="tag"
    :id="id"
    :title="_title"
    class="badge b-form-tag d-inline-flex align-items-center mw-100"
    :class="classes"
    aria-labelledby=""
  >
    <span :id="`${id}taglabel__`" class="b-form-tag-content flex-grow-1 text-truncate">
      <slot>{{ _title }}</slot>
    </span>
    <button
      v-if="!disabled && !noRemove"
      aria-keyshortcuts="Delete"
      type="button"
      :aria-label="removeLabel"
      class="btn-close b-form-tag-remove"
      :class="{
        'btn-close-white': !['warning', 'info', 'light'].includes(variant),
      }"
      :aria-controls="id"
      :aria-describedby="`${id}taglabel__`"
      @click="$emit('remove', _title)"
    ></button>
  </component>
</template>

<script setup lang="ts">
import {computed, useSlots} from 'vue'

const props = defineProps({
  disabled: {type: Boolean, default: false},
  id: {type: String},
  noRemove: {type: Boolean, default: false},
  pill: {type: Boolean, default: false},
  removeLabel: {type: String, default: 'span'},
  tag: {type: String, default: 'span'},
  title: {type: String},
  variant: {type: String, default: 'secondary'},
})

defineEmits(['remove'])

const slots = useSlots()

const _title = computed(() => slots.default?.()[0].children || props.title)

const classes = computed(() => [
  `bg-${props.variant}`,
  {
    'text-dark': ['warning', 'info', 'light'].includes(props.variant),
    'rounded-pill': props.pill,
    'disabled': props.disabled,
  },
])
</script>

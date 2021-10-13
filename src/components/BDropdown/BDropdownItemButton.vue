<template>
  <li role="presentation">
    <button
      class="dropdown-item"
      :class="[classes, buttonClass]"
      v-bind="attrs"
      @click="$emit('click', $event)"
    >
      <slot />
    </button>
  </li>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../../types'

export default defineComponent({
  name: 'BDropdownItemButton',
  inheritAttrs: false,
  props: {
    active: {type: Boolean, default: false},
    activeClass: {type: String, default: 'active'},
    buttonClass: {type: [String, Array, Object]},
    disabled: {type: Boolean, default: false},
    variant: {type: String as PropType<ColorVariant>, default: null},
  },
  emits: ['click'],
  setup(props) {
    const classes = computed(() => ({
      [props.activeClass]: props.active,
      disabled: props.disabled,
      [`text-${props.variant}`]: props.variant,
    }))

    const attrs = computed(() => ({
      role: 'menuitem',
      type: 'button',
      disabled: props.disabled,
    }))

    return {
      classes,
      attrs,
    }
  },
})
</script>

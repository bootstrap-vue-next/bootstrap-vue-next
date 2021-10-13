<template>
  <li role="presentation">
    <component
      :is="tag"
      class="dropdown-item"
      :class="[classes, linkClass]"
      v-bind="attrs"
      @click="$emit('click', $event)"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../../types'

export default defineComponent({
  name: 'BDropdownItem',
  inheritAttrs: false,
  props: {
    active: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    href: {type: String},
    linkClass: {type: [Array, Object, String]},
    rel: {type: String, default: null},
    target: {type: String, default: '_self'},
    variant: {type: String as PropType<ColorVariant>, default: null},
  },
  emits: ['click'],
  setup(props) {
    const classes = computed(() => ({
      active: props.active,
      disabled: props.disabled,
      [`text-${props.variant}`]: props.variant,
    }))

    const tag = computed(() => (props.href ? 'a' : 'button'))

    const attrs = computed(() => ({
      'aria-current': props.active ? 'true' : null,
      'href': tag.value === 'a' ? props.href : null,
      'rel': props.rel,
      'type': tag.value === 'button' ? 'button' : null,
      'target': props.target,
    }))

    return {
      classes,
      tag,
      attrs,
    }
  },
})
</script>

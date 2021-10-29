<template>
  <li class="breadcrumb-item" :class="liClasses">
    <component
      :is="computedTag"
      :aria-current="computedAriaCurrent"
      v-bind="$props"
      @click="clicked"
    >
      <slot></slot>
    </component>
  </li>
</template>

<script lang="ts">
import {omit} from '../../utils/object'
import {computed, defineComponent} from 'vue'
import {BLINK_PROPS} from '../BLink/BLink.vue'

export default defineComponent({
  name: 'BBreadcrumbItem',
  props: {
    ...omit(BLINK_PROPS, ['event', 'routerTag']),
    active: {type: Boolean, default: false},
    ariaCurrent: {type: String, default: 'location'},
    disabled: {type: Boolean, default: false},
    text: {type: String, required: false},
  },
  emits: ['click'],
  setup(props, {emit}) {
    const liClasses = computed(() => ({
      active: props.active,
    }))
    const computedTag = computed(() => (props.active ? 'span' : 'b-link'))
    const computedAriaCurrent = computed(() => ({
      'aria-current': props.active ? props.ariaCurrent : undefined,
    }))
    const clicked = function (e: MouseEvent) {
      if (props.disabled || props.active) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return
      }
      if (!props.disabled) emit('click', e)
    }
    return {
      liClasses,
      computedTag,
      computedAriaCurrent,
      clicked,
    }
  },
})
</script>

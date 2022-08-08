<template>
  <li class="breadcrumb-item" :class="liClasses">
    <component
      :is="computedTag"
      :aria-current="computedAriaCurrent"
      v-bind="$props"
      @click="clicked"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
import {omit} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed, defineComponent, PropType, toRef} from 'vue'
import {BLINK_PROPS} from '../BLink/BLink.vue'
import type {Booleanish} from '../../types'

export default defineComponent({
  props: {
    ...omit(BLINK_PROPS, ['event', 'routerTag']),
    active: {type: Boolean as PropType<Booleanish>, default: false},
    ariaCurrent: {type: String, default: 'location'},
    disabled: {type: Boolean as PropType<Booleanish>, default: false},
    text: {type: String, required: false},
  },
  emits: ['click'],
  setup(props, {emit}) {
    const activeBoolean = useBooleanish(toRef(props, 'active'))
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

    const liClasses = computed(() => ({
      active: props.active,
    }))

    const computedTag = computed<'span' | 'b-link'>(() => (activeBoolean.value ? 'span' : 'b-link'))

    const computedAriaCurrent = computed(() => ({
      'aria-current': activeBoolean.value ? props.ariaCurrent : undefined,
    }))

    const clicked = (e: MouseEvent): void => {
      if (disabledBoolean.value || activeBoolean.value) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return
      }
      if (!disabledBoolean.value) emit('click', e)
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

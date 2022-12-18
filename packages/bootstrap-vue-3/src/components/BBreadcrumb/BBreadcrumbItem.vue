<template>
  <li class="breadcrumb-item" :class="computedClasses">
    <component
      :is="computedTag"
      :aria-current="computedAriaCurrent"
      v-bind="computedLinkProps"
      @click="clicked"
    >
      <slot>
        {{ text }}
      </slot>
    </component>
  </li>
</template>

<script lang="ts">
import {omit, pluckProps} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed, defineComponent, type PropType, toRef} from 'vue'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'
import type {Booleanish} from '../../types'

const linkProps = omit(BLINK_PROPS, ['event', 'routerTag'] as const)

export default defineComponent({
  components: {BLink},
  props: {
    ...linkProps,
    active: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    ariaCurrent: {type: String, default: 'location'},
    disabled: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    text: {type: String, required: false},
  },
  emits: ['click'],
  setup(props, {emit}) {
    const activeBoolean = useBooleanish(toRef(props, 'active'))
    const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

    const computedClasses = computed(() => ({
      active: activeBoolean.value,
    }))

    const computedTag = computed<'span' | typeof BLink>(() =>
      activeBoolean.value ? 'span' : BLink
    )

    const computedAriaCurrent = computed(() =>
      activeBoolean.value ? props.ariaCurrent : undefined
    )

    const computedLinkProps = computed(() =>
      computedTag.value !== 'span' ? pluckProps(props, linkProps) : {}
    )

    const clicked = (e: MouseEvent): void => {
      if (disabledBoolean.value || activeBoolean.value) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return
      }
      if (!disabledBoolean.value) emit('click', e)
    }

    return {
      computedLinkProps,
      computedClasses,
      computedTag,
      computedAriaCurrent,
      clicked,
    }
  },
})
</script>

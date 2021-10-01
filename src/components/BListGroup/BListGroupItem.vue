<template>
  <component
    :is="tagComputed"
    class="list-group-item"
    :class="classes"
    :aria-current="active ? true : null"
    :aria-disabled="disabled ? true : null"
    :target="link ? target : null"
    :href="!button ? href : null"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, inject, PropType} from 'vue'
import {ColorVariant} from '../../types'
import {injectionKey} from './BListGroup.vue'

const ACTION_TAGS = ['a', 'router-link', 'button', 'b-link']

export default defineComponent({
  name: 'BListGroupItem',
  props: {
    action: {type: Boolean, default: false},
    active: {type: Boolean, default: false},
    // activeClass: {type: String},
    // append: {type: Boolean, default: false},
    button: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    // exact: {type: Boolean, default: false},
    // exactActiveClass: {type: String},
    href: {type: String},
    // noPrefetch: {type: Boolean, default: false},
    // prefetch: {type: Boolean, default: null},
    // rel: {type: String, default: null},
    // replace: {type: Boolean, default: false},
    // routerComponentName: {type: String, default: null},
    tag: {type: String, default: 'div'},
    target: {type: String, default: '_self'},
    //to: {type: [String, Object]},
    variant: {type: String as PropType<ColorVariant>},
  },
  setup(props, context) {
    const parentData = inject(injectionKey, null)

    const link = computed(() => !props.button && props.href)
    const tagComputed = computed(
      () =>
        parentData?.numbered
          ? 'li'
          : props.button
          ? 'button'
          : !link.value
          ? props.tag
          : 'a' /* BLink */
    )

    const classes = computed(() => {
      const {button, variant, active, disabled} = props
      const action = props.action || link.value || button || ACTION_TAGS.includes(props.tag)
      return {
        [`list-group-item-${variant}`]: variant,
        'list-group-item-action': action,
        active,
        disabled,
      }
    })

    const attrs = computed(() => {
      const attrs = {} as {type?: string; disabled?: boolean}
      if (props.button) {
        if (!context.attrs || !context.attrs.type) {
          // Add a type for button is one not provided in passed attributes
          attrs.type = 'button'
        }
        if (props.disabled) {
          // Set disabled attribute if button and disabled
          attrs.disabled = true
        }
      }
      return attrs
    })

    return {
      tagComputed,
      classes,
      attrs,
      link,
    }
  },
})
</script>

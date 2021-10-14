<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BFormInvalidFeedback',
  props: {
    ariaLive: {type: String, required: false},
    forceShow: {type: Boolean, default: false},
    id: {type: String, required: false},
    role: {type: String, required: false},
    state: {type: Boolean, default: undefined},
    tag: {type: String, default: 'div'},
    tooltip: {type: Boolean, default: false},
  },
  setup(props) {
    const computedShow = computed(() => props.forceShow === true || props.state === false)
    const classes = computed(() => ({
      'd-block': computedShow.value,
      'invalid-feedback': !props.tooltip,
      'invalid-tooltip': props.tooltip,
    }))
    const attrs = computed(() => ({
      'id': props.id || null,
      'role': props.role || null,
      'aria-live': props.ariaLive || null,
      'aria-atomic': props.ariaLive ? 'true' : null,
    }))

    return {
      attrs,
      classes,
      computedShow,
    }
  },
})
</script>

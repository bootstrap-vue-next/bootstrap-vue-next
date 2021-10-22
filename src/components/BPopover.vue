<template>
  <div
    :id="id"
    ref="element"
    class="popover b-popover"
    :class="classes"
    role="tooltip"
    tabindex="-1"
  >
    <div ref="titleRef">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div ref="contentRef">
      <slot>
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import {Popover} from 'bootstrap'
import {computed, defineComponent, onMounted, PropType, ref, watch} from 'vue'
import useEventListener from '../composables/useEventListener'
import {ColorVariant} from '../types'

export default defineComponent({
  name: 'BPopover',
  props: {
    container: {type: String, default: 'body'},
    content: {type: String},
    id: {type: String},
    noninteractive: {type: Boolean, default: false},
    placement: {type: String as PropType<Popover.Options['placement']>, default: 'right'},
    target: {type: String, required: true},
    title: {type: String},
    triggers: {type: String as PropType<Popover.Options['trigger']>, default: 'click'},
    show: {type: Boolean, default: false},
    variant: {type: String as PropType<ColorVariant>, default: undefined},
    html: {type: Boolean, default: true},
    sanitize: {type: Boolean, default: false},
  },
  emits: ['show', 'shown', 'hide', 'hidden', 'inserted'],
  setup(props, {emit, slots}) {
    const element = ref<HTMLElement>()
    const target = ref<HTMLElement>()
    const instance = ref<Popover>()
    const titleRef = ref<HTMLElement>()
    const contentRef = ref<HTMLElement>()
    const classes = computed(() => ({
      [`b-popover-${props.variant}`]: props.variant,
    }))

    onMounted(() => {
      instance.value = new Popover(`#${props.target}`, {
        container: props.container,
        trigger: props.triggers,
        placement: props.placement,
        title: props.title || slots.title ? titleRef.value : '',
        content: contentRef.value,
        html: props.html,
        sanitize: props.sanitize,
      })

      if (document.getElementById(props.target)) {
        target.value = document.getElementById(props.target) as HTMLElement
      }

      element.value?.parentNode?.removeChild(element.value)

      if (props.show) {
        instance.value.show()
      }
    })

    watch(
      () => props.show,
      (show, oldVal) => {
        if (show !== oldVal) {
          if (show) {
            instance.value?.show()
          } else {
            instance.value?.hide()
          }
        }
      }
    )

    useEventListener(target, 'show.bs.popover', () => emit('show'))
    useEventListener(target, 'shown.bs.popover', () => emit('shown'))
    useEventListener(target, 'hide.bs.popover', () => emit('hide'))
    useEventListener(target, 'hidden.bs.popover', () => emit('hidden'))
    useEventListener(target, 'inserted.bs.popover', () => emit('inserted'))

    return {
      element,
      titleRef,
      contentRef,
      classes,
    }
  },
})
</script>

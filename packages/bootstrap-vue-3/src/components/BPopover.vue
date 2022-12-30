<template>
  <div
    :id="id"
    ref="element"
    class="popover b-popover"
    :class="computedClasses"
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
import {
  type ComponentPublicInstance,
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
  toRef,
  watch,
} from 'vue'
import {Popover} from 'bootstrap'
import {useBooleanish} from '../composables'
import type {BPopoverDelayObject} from '../types/components'
import type {Booleanish, ColorVariant} from '../types'

export default defineComponent({
  props: {
    container: {
      type: [String, Object] as PropType<
        string | ComponentPublicInstance<HTMLElement> | HTMLElement
      >,
      default: 'body',
    },
    content: {type: String},
    id: {type: String},
    customClass: {type: String, default: ''},
    noninteractive: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    placement: {type: String as PropType<Popover.Options['placement']>, default: 'right'},
    target: {
      type: [String, Object] as PropType<
        string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
      >,
      default: undefined,
    },
    title: {type: String},
    delay: {type: [Number, Object] as PropType<number | BPopoverDelayObject>, default: 0},
    triggers: {type: String as PropType<Popover.Options['trigger']>, default: 'click'},
    show: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    variant: {type: String as PropType<ColorVariant>, default: undefined},
    html: {type: [Boolean, String] as PropType<Booleanish>, default: true},
    sanitize: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    offset: {type: String as PropType<Popover.Options['offset']>, default: '0'},
  },
  emits: ['show', 'shown', 'hide', 'hidden', 'inserted'],
  setup(props, {emit, slots}) {
    // TODO noninteractive is never used
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const noninteractiveBoolean = useBooleanish(toRef(props, 'noninteractive'))
    const showBoolean = useBooleanish(toRef(props, 'show'))
    const htmlBoolean = useBooleanish(toRef(props, 'html'))
    const sanitizeBoolean = useBooleanish(toRef(props, 'sanitize'))

    const element = ref<HTMLElement>()
    const target = ref<HTMLElement | undefined>()
    const instance = ref<Popover>()
    const titleRef = ref<HTMLElement>()
    const contentRef = ref<HTMLElement>()

    const computedClasses = computed(() => ({
      [`b-popover-${props.variant}`]: props.variant !== undefined,
    }))

    const cleanElementProp = (
      target: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
    ): HTMLElement | string | undefined => {
      if (typeof target === 'string') {
        return target
      } else if (target instanceof HTMLElement) return target
      else if (typeof target !== 'undefined')
        return (target as ComponentPublicInstance<HTMLElement>).$el as HTMLElement
      return undefined
    }

    const getElement = (element: HTMLElement | string | undefined): HTMLElement | undefined => {
      if (!element) return undefined
      if (typeof element === 'string') {
        const idElement = document.getElementById(element)
        return idElement ? idElement : undefined
      }
      return element
    }

    const bsEventHandlers = [
      {event: 'show.bs.popover', handler: () => emit('show')},
      {event: 'shown.bs.popover', handler: () => emit('shown')},
      {event: 'hide.bs.popover', handler: () => emit('hide')},
      {event: 'hidden.bs.popover', handler: () => emit('hidden')},
      {event: 'inserted.bs.popover', handler: () => emit('inserted')},
    ]

    const attachTargetEventHandlers = (targetElement: HTMLElement) => {
      for (const pair of bsEventHandlers) {
        targetElement.addEventListener(pair.event, pair.handler)
      }
    }

    const disposeTargetEventHandlers = (targetElement: HTMLElement) => {
      for (const pair of bsEventHandlers) {
        targetElement.removeEventListener(pair.event, pair.handler)
      }
    }

    const generatePopoverInstance = (
      targetValue: string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined
    ) => {
      target.value = getElement(cleanElementProp(targetValue))

      if (!target.value) return

      attachTargetEventHandlers(target.value)

      instance.value = new Popover(target.value, {
        customClass: props.customClass,
        container: cleanElementProp(props.container),
        trigger: props.triggers,
        placement: props.placement,
        title: props.title || slots.title ? titleRef.value : '',
        content: contentRef.value,
        html: htmlBoolean.value,
        delay: props.delay,
        sanitize: sanitizeBoolean.value,
        offset: props.offset,
      })
    }

    watch(
      () => props.target,
      (newValue) => {
        instance.value?.dispose()
        if (target.value instanceof HTMLElement) {
          disposeTargetEventHandlers(target.value)
        }
        generatePopoverInstance(newValue)
      }
    )
    watch(
      () => showBoolean.value,
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

    onMounted(() => {
      nextTick(() => {
        generatePopoverInstance(props.target)
      })

      element.value?.parentNode?.removeChild(element.value)

      if (showBoolean.value) {
        instance.value?.show()
      }
    })

    onBeforeUnmount(() => {
      instance.value?.dispose()
      if (target.value instanceof HTMLElement) {
        disposeTargetEventHandlers(target.value)
      }
    })

    return {
      element,
      titleRef,
      contentRef,
      computedClasses,
    }
  },
})
</script>

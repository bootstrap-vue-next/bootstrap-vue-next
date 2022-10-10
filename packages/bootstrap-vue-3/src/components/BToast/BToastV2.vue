<template>
  <teleport v-bind="teleportAttrs">
    <div
      :id="id"
      class="b-toast"
      :class="solidBoolean ? 'b-toast-solid' : ''"
      :role="computedRole"
      :aria-live="computedAriaLive"
      :aria-atomic="computedAriaAtomic"
      @mouseenter="pauseTimer"
      @mouseleave="unPauseTimer"
    >
      <b-transition
        :no-fade="noFadeBoolean"
        @before-enter="onBeforeEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @after-leave="onAfterLeave"
      >
        <div v-if="modelValueBoolean" class="toast" :class="toastClasses" tabindex="0">
          <component
            :is="headerTag"
            v-if="!!$slots.title || !!title"
            :class="headerClass"
            class="toast-header"
          >
            <slot name="title" :hide="hide">
              <strong class="me-auto">
                {{ title }}
              </strong>
            </slot>
            <b-close-button v-if="!noCloseButtonBoolean" @click="hide()" />
          </component>
          <component
            :is="computedTag"
            v-bind="computedLinkProps"
            v-if="!!$slots.default || !!body"
            class="toast-body"
            :class="bodyClass"
            @click="onBodyClick"
          >
            <slot :hide="hide">{{ body }}</slot>
          </component>
        </div>
      </b-transition>
    </div>
  </teleport>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, PropType, ref, toRef} from 'vue'
import {isLink, pluckProps, toInteger} from '../../utils'
import {useBooleanish} from '../../composables'
import type {Booleanish, ClassValue, ColorVariant} from '../../types'
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'

export default defineComponent({
  components: {BLink, BTransition, BCloseButton},
  props: {
    ...BLINK_PROPS,
    delay: {type: Number, default: 5000},
    bodyClass: {type: Object as PropType<ClassValue>, required: false},
    body: {type: String, required: false},
    headerClass: {type: Object as PropType<ClassValue>, required: false},
    headerTag: {type: String, default: 'div'},
    id: {type: String, required: false},
    isStatus: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    autoHide: {type: [Boolean, String] as PropType<Booleanish>, default: true},
    noCloseButton: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    noFade: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    noHoverPause: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    solid: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    static: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    title: {type: String, required: false},
    modelValue: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    toastClass: {type: Object as PropType<ClassValue>, required: false},
    variant: {type: String as PropType<ColorVariant>, required: false},
    // TODO get the toaster right for b-toaster
    toaster: {type: String, default: 'b-toaster-top-right'},
  },
  emits: ['update:modelValue', 'hide', 'hidden', 'show', 'shown', 'paused', 'unPaused'],
  setup(props, {emit}) {
    const MIN_DURATION = 1000

    const isStatusBoolean = useBooleanish(toRef(props, 'isStatus'))
    const autoHideBoolean = useBooleanish(toRef(props, 'autoHide'))
    const noCloseButtonBoolean = useBooleanish(toRef(props, 'noCloseButton'))
    const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))
    const noHoverPauseBoolean = useBooleanish(toRef(props, 'noHoverPause'))
    // TODO even though solid correctly appears in the class list,
    // The basic toast does not have a translucent background
    const solidBoolean = useBooleanish(toRef(props, 'solid'))
    const staticBoolean = useBooleanish(toRef(props, 'static'))
    const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))

    const isMounted = ref(false)
    onMounted(() => {
      isMounted.value = true
    })

    const toastClasses = computed(() => [
      props.toastClass,
      {
        [`b-toast-${props.variant}`]: props.variant !== undefined,
        show: modelValueBoolean.value,
      },
    ])

    const computedRole = computed(() =>
      !modelValueBoolean.value ? undefined : isStatusBoolean.value ? 'status' : 'alert'
    )

    const computedAriaLive = computed(() =>
      !modelValueBoolean.value ? undefined : isStatusBoolean.value ? 'polite' : 'assertive'
    )

    const computedAriaAtomic = computed(() => (!modelValueBoolean.value ? undefined : 'true'))

    const computedTag = computed<'div' | typeof BLink>(() => (isLink(props) ? BLink : 'div'))

    const hide = () => {
      emit('update:modelValue', false)
    }

    const onBodyClick = () => {
      if (!isLink(props)) return
      hide()
    }

    // This would be a lot better if the timer was separated from the logic and was an external function
    // create a timer
    let dismissTimer: ReturnType<typeof setTimeout> | undefined
    let dismissStarted: number
    let resumeDismiss: number
    const computedDuration = computed(() => Math.max(toInteger(props.delay, 0), MIN_DURATION))
    // start the timer
    const startDismissTimer = () => {
      clearDismissTimer()
      dismissTimer = setTimeout(hide, resumeDismiss || computedDuration.value)
      dismissStarted = Date.now()
      resumeDismiss = 0
    }
    // stop the timer
    const clearDismissTimer = () => {
      if (dismissTimer !== undefined) return
      clearTimeout(dismissTimer)
      dismissTimer = undefined
    }
    // reset timer
    const resetTimer = () => {
      clearDismissTimer()
      dismissStarted = resumeDismiss = 0
    }
    // pause the timer
    const pauseTimer = () => {
      if (!autoHideBoolean.value || noHoverPauseBoolean.value || !dismissTimer || resumeDismiss)
        return
      const passed = Date.now() - dismissStarted
      if (passed > 0) {
        emit('paused', passed)
        clearDismissTimer()
        resumeDismiss = Math.max(computedDuration.value - passed, MIN_DURATION)
      }
    }
    const unPauseTimer = () => {
      if (!autoHideBoolean.value || noHoverPauseBoolean.value || !resumeDismiss) {
        resumeDismiss = dismissStarted = 0
        return
      }
      emit('unPaused')
      startDismissTimer()
    }

    // Emit before transition starts
    const onBeforeEnter = () => {
      emit('show')
    }
    // Emit after transition entering ends
    // Also responsible for starting the timer
    const onAfterEnter = () => {
      emit('shown')
      if (autoHideBoolean.value) {
        startDismissTimer()
      }
    }
    // Emit before transition leaves
    const onBeforeLeave = () => {
      emit('hide')
    }
    // Emit after transition leaving ends
    // Also responsible for resetting the timer
    const onAfterLeave = () => {
      emit('hidden')
      if (autoHideBoolean.value) {
        resetTimer()
      }
    }

    const teleportAttrs = computed(() => ({
      // to: `#${props.toaster}`,
      to: isMounted.value ? `#${props.toaster}` : 'body',
      disabled: staticBoolean.value,
    }))

    const computedLinkProps = computed(() => (isLink(props) ? pluckProps(props, BLINK_PROPS) : {}))

    return {
      computedLinkProps,
      computedRole,
      computedAriaLive,
      computedAriaAtomic,
      pauseTimer,
      unPauseTimer,
      noFadeBoolean,
      onBeforeEnter,
      onAfterEnter,
      onBeforeLeave,
      onAfterLeave,
      modelValueBoolean,
      toastClasses,
      hide,
      noCloseButtonBoolean,
      computedTag,
      onBodyClick,
      teleportAttrs,
      solidBoolean,
    }
  },
})
</script>

<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  type PropType,
  ref,
  toRef,
  type VNode,
  watch,
} from 'vue'
import {isLink, normalizeSlot, requestAF, toInteger} from '../../utils'
import {useBooleanish} from '../../composables'
import type {Booleanish, ColorVariant} from '../../types'
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BLink, {BLINK_PROPS} from '../BLink/BLink.vue'
import {BodyProp} from './plugin'

export const SLOT_NAME_TOAST_TITLE = 'toast-title'
const MIN_DURATION = 1000

export default defineComponent({
  components: {BLink},
  props: {
    ...BLINK_PROPS,
    delay: {type: Number, default: 5000},
    bodyClass: {type: String},
    body: {type: [Object, String] as PropType<BodyProp>},
    headerClass: {type: String},
    headerTag: {type: String, default: 'div'},
    animation: {type: [Boolean, String] as PropType<Booleanish>, default: true},
    id: {type: String},
    // Switches role to 'status' and aria-live to 'polite'
    isStatus: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    autoHide: {type: [Boolean, String] as PropType<Booleanish>, default: true},
    noCloseButton: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    noFade: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    noHoverPause: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    solid: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    // Render the toast in place, rather than in a portal-target
    static: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    title: {type: String},
    modelValue: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    toastClass: {type: Array as PropType<Array<string>>},
    variant: {type: String as PropType<ColorVariant>},
  },
  emits: ['destroyed', 'update:modelValue'],
  setup(props, {emit, slots}) {
    // TODO animation is never used
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const animationBoolean = useBooleanish(toRef(props, 'animation'))
    const isStatusBoolean = useBooleanish(toRef(props, 'isStatus'))
    const autoHideBoolean = useBooleanish(toRef(props, 'autoHide'))
    const noCloseButtonBoolean = useBooleanish(toRef(props, 'noCloseButton'))
    const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))
    const noHoverPauseBoolean = useBooleanish(toRef(props, 'noHoverPause'))
    // TODO solid is never used
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const solidBoolean = useBooleanish(toRef(props, 'solid'))
    // TODO static is never used
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const staticBoolean = useBooleanish(toRef(props, 'static'))
    const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))

    const isTransitioning = ref(false)
    const isHiding = ref(false)
    const localShow = ref(false)
    const classes = computed(() => ({
      [`b-toast-${props.variant}`]: props.variant !== undefined,
      show: localShow.value || isTransitioning.value,
    }))

    let dismissTimer: ReturnType<typeof setTimeout> | undefined
    let dismissStarted: number
    let resumeDismiss: number

    const clearDismissTimer = () => {
      if (typeof dismissTimer === 'undefined') return
      clearTimeout(dismissTimer)
      dismissTimer = undefined
    }

    const computedDuration = computed(() =>
      // Minimum supported duration is 1 second
      Math.max(toInteger(props.delay, 0), MIN_DURATION)
    )

    const hide = () => {
      if (modelValueBoolean.value) {
        dismissStarted = resumeDismiss = 0
        clearDismissTimer()
        isHiding.value = true
        requestAF(() => {
          localShow.value = false
        })
      }
    }

    const show = () => {
      clearDismissTimer()
      emit('update:modelValue', true)
      dismissStarted = resumeDismiss = 0
      isHiding.value = false

      nextTick(() => {
        // We show the toast after we have rendered the portal and b-toast wrapper
        // so that screen readers will properly announce the toast
        requestAF(() => {
          localShow.value = true
        })
      })
    }

    const onPause = () => {
      if (!autoHideBoolean.value || noHoverPauseBoolean.value || !dismissTimer || resumeDismiss) {
        return
      }

      const passed = Date.now() - dismissStarted

      if (passed > 0) {
        clearDismissTimer()
        resumeDismiss = Math.max(computedDuration.value - passed, MIN_DURATION)
      }
    }

    const onUnPause = () => {
      if (!autoHideBoolean.value || noHoverPauseBoolean.value || !resumeDismiss) {
        resumeDismiss = dismissStarted = 0
      }

      startDismissTimer()
    }

    watch(
      () => modelValueBoolean.value,
      (newValue) => {
        newValue ? show() : hide()
      }
    )

    const startDismissTimer = () => {
      clearDismissTimer()
      if (autoHideBoolean.value) {
        dismissTimer = setTimeout(hide, resumeDismiss || computedDuration.value)
        dismissStarted = Date.now()
        resumeDismiss = 0
      }
    }

    const OnBeforeEnter = () => {
      isTransitioning.value = true
      emit('update:modelValue', true)
    }

    const OnAfterEnter = () => {
      isTransitioning.value = false
      startDismissTimer()
    }

    const OnBeforeLeave = () => {
      isTransitioning.value = true
    }

    const OnAfterLeave = () => {
      isTransitioning.value = false
      resumeDismiss = dismissStarted = 0
      emit('update:modelValue', false)
    }

    onUnmounted(() => {
      //if there is time left on autoHide or no autoHide then keep toast alive
      clearDismissTimer()
      if (!autoHideBoolean.value) {
        return
      }

      emit('destroyed', props.id)
    })

    onMounted(() => {
      nextTick(() => {
        if (modelValueBoolean.value) {
          requestAF(() => {
            show()
          })
        }
      })
    })

    const onLinkClick = () => {
      nextTick(() => {
        requestAF(() => {
          hide()
        })
      })
    }

    return () => {
      const makeToast = () => {
        const $headerContent: Array<VNode> = []

        const $title = normalizeSlot(SLOT_NAME_TOAST_TITLE, {hide}, slots)

        if ($title) {
          $headerContent.push(h($title))
        } else if (props.title) {
          $headerContent.push(h('strong', {class: 'me-auto'}, props.title))
        }

        if (!noCloseButtonBoolean.value && $headerContent.length !== 0) {
          $headerContent.push(
            h(BCloseButton, {
              class: ['btn-close'],
              onClick: () => {
                hide()
              },
            })
          )
        }
        const $innertoast = []

        if ($headerContent.length > 0) {
          $innertoast.push(
            h(
              props.headerTag,
              {
                class: 'toast-header',
              },
              {default: () => $headerContent}
            )
          )
        }
        if (normalizeSlot('default', {hide}, slots) || props.body) {
          const $body = h(
            isLink(props) ? 'b-link' : 'div',
            {
              class: ['toast-body', props.bodyClass],
              onClick: isLink(props) ? {click: onLinkClick} : {},
            },
            normalizeSlot('default', {hide}, slots) || props.body
          )
          $innertoast.push($body)
        }
        return h(
          'div',
          {
            class: ['toast', props.toastClass, classes.value],
            tabindex: '0',
          },
          $innertoast
        )
      }
      //toast
      return h(
        'div',
        {
          'class': ['b-toast'],
          'id': props.id,
          'role': isHiding.value ? null : isStatusBoolean.value ? 'status' : 'alert',
          'aria-live': isHiding.value ? null : isStatusBoolean.value ? 'polite' : 'assertive',
          'aria-atomic': isHiding.value ? null : 'true',
          'onmouseenter': onPause,
          'onmouseleave': onUnPause,
        },
        [
          h(
            BTransition,
            {
              noFade: noFadeBoolean.value,
              onAfterEnter: OnAfterEnter,
              onBeforeEnter: OnBeforeEnter,
              onAfterLeave: OnAfterLeave,
              onBeforeLeave: OnBeforeLeave,
            },
            () => [localShow.value ? makeToast() : '']
          ),
        ]
      )
    }
  },
})
</script>

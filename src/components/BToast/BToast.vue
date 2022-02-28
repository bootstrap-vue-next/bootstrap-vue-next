<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  VNode,
  watch,
} from 'vue'
import {normalizeSlot} from '../../utils/normalize-slot'
import {ColorVariant} from '../../types'
import {toInteger} from '../../utils/number'
import BTransition from '../BTransition/BTransition.vue'
import {requestAF} from '../../utils/dom'
import BButtonClose from '../BButton/BCloseButton.vue'
import {isLink} from '../../utils/router'
import {BLINK_PROPS} from '../BLink/BLink.vue'
import {BodyProp} from './plugin'

export const SLOT_NAME_TOAST_TITLE = 'toast-title'
const MIN_DURATION = 5000

export default defineComponent({
  name: 'BToast',
  emits: ['destroyed', 'update:modelValue'],
  props: {
    ...BLINK_PROPS,
    delay: {type: Number, default: 5000},
    bodyClass: {type: String},
    body: {type: [Object, String] as PropType<BodyProp>},
    headerClass: {type: String},
    headerTag: {type: String, default: 'div'},
    animation: {type: Boolean, default: true},
    id: {type: String},
    // Switches role to 'status' and aria-live to 'polite'
    isStatus: {type: Boolean, default: false},
    autoHide: {type: Boolean, default: true},
    noCloseButton: {type: Boolean, default: false},
    noFade: {type: Boolean, default: false},
    noHoverPause: {type: Boolean, default: false},
    solid: {type: Boolean, default: false},
    // Render the toast in place, rather than in a portal-target
    static: {type: Boolean, default: false},
    title: {type: String},
    modelValue: {type: Boolean, default: false},
    toastClass: {type: Array as PropType<Array<string>>},
    variant: {type: String as PropType<ColorVariant>},
  },

  setup(props, {emit, slots}) {
    const isTransitioning = ref(false)
    const isHiding = ref(false)
    const localShow = ref(false)
    const classes = computed(() => ({
      [`b-toast-${props.variant}`]: props.variant,
      show: localShow.value || isTransitioning.value,
    }))

    let dismissTimer: number | undefined
    let dismissStarted: number
    let resumeDismiss: number

    const clearDismissTimer = () => {
      clearTimeout(dismissTimer)
      dismissTimer = undefined
    }

    const computedDuration = computed(() =>
      // Minimum supported duration is 1 second
      Math.max(toInteger(props.delay, 0), MIN_DURATION)
    )

    const hide = () => {
      if (props.modelValue) {
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
      if (!props.autoHide || props.noHoverPause || !dismissTimer || resumeDismiss) {
        return
      }

      const passed = Date.now() - dismissStarted

      if (passed > 0) {
        clearDismissTimer()
        resumeDismiss = Math.max(computedDuration.value - passed, MIN_DURATION)
      }
    }

    const onUnPause = () => {
      if (!props.autoHide || props.noHoverPause || !resumeDismiss) {
        resumeDismiss = dismissStarted = 0
      }

      startDismissTimer()
    }

    const toggle = () => {
      if (props.modelValue) {
        hide()
      } else {
        show()
      }
    }

    watch(
      () => props.modelValue,
      (newValue) => {
        newValue ? show() : hide()
      }
    )

    const startDismissTimer = () => {
      clearDismissTimer()
      if (props.autoHide) {
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

    const transitionHandlers = computed(() => ({
      OnBeforeEnter,
      OnAfterEnter,
      OnBeforeLeave,
      OnAfterLeave,
    }))

    onUnmounted(() => {
      //if there is time left on autohide or no autohide then keep toast alive
      clearDismissTimer()
      if (!props.autoHide) {
        return
      }

      emit('destroyed', props.id)
    })

    onMounted(() => {
      nextTick(() => {
        if (props.modelValue) {
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

        if (!props.noCloseButton && $headerContent.length !== 0) {
          $headerContent.push(
            h(BButtonClose, {
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
      const $toast = h(
        'div',
        {
          'class': ['b-toast'],
          'id': props.id,
          'role': isHiding.value ? null : props.isStatus ? 'status' : 'alert',
          'aria-live': isHiding.value ? null : props.isStatus ? 'polite' : 'assertive',
          'aria-atomic': isHiding.value ? null : 'true',
          'onmouseenter': onPause,
          'onmouseleave': onUnPause,
        },
        [
          h(
            BTransition,
            {
              noFade: props.noFade,
              onAfterEnter: OnAfterEnter,
              onBeforeEnter: OnBeforeEnter,
              onAfterLeave: OnAfterLeave,
              onBeforeLeave: OnBeforeLeave,
            },
            () => [localShow.value ? makeToast() : '']
          ),
        ]
      )

      return $toast
    }
  },
})
</script>

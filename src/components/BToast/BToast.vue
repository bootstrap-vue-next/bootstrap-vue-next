<template>
  <div class="b-toast">
    <b-transition :no-fade="noFade" name="b-toaster" v-bind="transitionHandlers">
      <div v-if="localShow" ref="element" class="toast" :class="classes">
        <div v-if="title" class="toast-header">
          {{ title }}
        </div>
        <div v-if="body" class="toast-body">
          {{ body }}
        </div>
        <component :is="component" v-if="component"></component>
      </div>
    </b-transition>
  </div>
</template>

<script lang="ts">
import {
  Component,
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  nextTick,
  onMounted,
  PropType,
  reactive,
  ref,
  VNode,
  watch,
  watchEffect,
} from 'vue'

import useEventListener from '../../composables/useEventListener'
import {ColorVariant} from '../../types'
import {Toast} from 'bootstrap'
import {toInteger} from '../../utils/number'
import BTransition from '../BTransition/BTransition.vue'
import {requestAF} from '../../utils/dom'

const MIN_DURATION = 1000

export default defineComponent({
  name: 'BToast',
  props: {
    appendToast: {type: Boolean, default: false},
    delay: {type: Number, default: 5000},
    bodyClass: {type: String},
    headerClass: {type: String},
    headerTag: {type: String, default: 'header'},
    animation: {type: Boolean, default: true},
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
    component: {type: Object as PropType<VNode>},
    body: {type: String},
    modelValue: {type: Boolean, default: false},
    toastClass: {type: Array as PropType<Array<string>>},
    variant: {type: String as PropType<ColorVariant>, default: 'info'},
  },

  setup(props, {emit}) {
    const instance = ref<Toast>()
    const root = ref(null)
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
        emit('update:modelValue', false)
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

    const onBeforeEnter = () => {
      isTransitioning.value = true
      emit('update:modelValue', true)
    }

    const onAfterEnter = () => {
      isTransitioning.value = false
      startDismissTimer()
    }

    const onBeforeLeave = () => {
      isTransitioning.value = true
    }

    const onAfterLeave = () => {
      isTransitioning.value = false
      resumeDismiss = dismissStarted = 0
    }

    const transitionHandlers = computed(() => ({
      onBeforeEnter,
      onAfterEnter,
      onBeforeLeave,
      onAfterLeave,
    }))

    onMounted(() => {
      nextTick(() => {
        if (props.modelValue) {
          requestAF(() => {
            show()
          })
        }
      })
    })

    //   const show = () => {

    //   }

    // return () =>{

    //   let $overlay = h(
    //       'transition',
    //       {
    //         noFade: props.noFade,
    //         name: 'fade',
    //         appear: true,
    //         onAfterEnter: () => emit('shown'),
    //         onAfterLeave: () => emit('hidden'),
    //       },
    //          h("div", "life")
    //     )
    //   return  $overlay
    // }
    return {
      transitionHandlers,
      onBeforeEnter,
      classes,
      toggle,
      localShow,
    }
  },
})
</script>

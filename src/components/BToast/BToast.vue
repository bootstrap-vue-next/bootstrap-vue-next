<template>
  <div ref="element" class="toast" :class="classes">
    <div :v-if="title" class="toast-header">
      {{ title }}
    </div>
    <div v-if="body" class="toast-body">
      {{ body }}
    </div>
    <component v-if="component" :is="component"></component>
  </div>
</template>

<script lang="ts">
import {
  Component,
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  PropType,
  reactive,
  VNode,
  ref,
  h,
  watch,
} from 'vue'

import useEventListener from '../../composables/useEventListener'
import {ColorVariant} from '../../types'
import {Toast} from 'bootstrap'
import {toInteger} from '../../utils/number'

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
    modelValue: {type: Boolean, default: true},
    toastClass: {type: Array as PropType<Array<string>>},
    variant: {type: String as PropType<ColorVariant>, default: 'info'},
  },

  setup(props, {emit}) {
    const instance = ref<Toast>()
    const root = ref(null)
    const classes = computed(() => ({
      [`b-toast-${props.variant}`]: props.variant,
      show: props.modelValue,
    }))

    let dismissTimer: number | undefined = undefined
    let dismissStarted: number
    let resumeDismiss: number

    let clearDismissTimer = () => {
      clearTimeout(dismissTimer)
      dismissTimer = undefined
    }

    let computedDuration = computed(() => {
      // Minimum supported duration is 1 second
      return Math.max(toInteger(props.delay, 0), MIN_DURATION)
    })

    let startDismissTimer = () => {
      clearDismissTimer()

      if (props.autoHide) {
        dismissTimer = setTimeout(hide, resumeDismiss || computedDuration.value)
        dismissStarted = Date.now()
        resumeDismiss = 0
      }
    }

    // onMounted(() => {

    // })

    const hide = () => {
      console.log('wow')
    }
    //   const show = () => {

    //   }

    return {
      classes,
    }
  },
})
</script>

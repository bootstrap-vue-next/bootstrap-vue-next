<template>
  <div ref="element" class="toast" :class="classes">
    <div :v-if="title" class="toast-header">
      {{ title }}
    </div>
    <div v-if="body" class="toast-body">
      {{ body }}
    </div>
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
  ref,
  watch,
} from 'vue'

import useEventListener from '../../composables/useEventListener'
import {ColorVariant} from '../../types'
import {Toast} from 'bootstrap'

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
    body: {type: String},
    modelValue: {type: Boolean, default: true},
    toastClass: {type: Array as PropType<Array<string>>},
    toaster: {type: String, default: 'top-right'},
    variant: {type: String as PropType<ColorVariant>, default: 'info'},
  },

  setup(props, {emit}) {
    const instance = ref<Toast>()
    const root = ref(null)
    const classes = computed(() => ({
      [`b-toast-${props.variant}`]: props.variant,
      show: props.modelValue,
    }))
    // const toastClasses = computed(() => ({
    //   'show': props.show,
    // }))
    onMounted(() => {
      console.log('hello')
    })

    //   const hide = () => {

    //  }
    //   const show = () => {

    //   }

    return {
      classes,
    }
  },
})
</script>

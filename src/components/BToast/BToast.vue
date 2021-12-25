<template>
  <div ref="element" class="toast">
    <div class="toast-header">
      {{ title }}
    </div>
    <div class="toast-body"></div>
  </div>
</template>

<script lang="ts">
import {
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

import {Toast} from 'bootstrap'

export default defineComponent({
  name: 'BToast',
  props: {
    appendToast: {type: Boolean, default: false},
    delay: {type: Number, default: 5000},
    bodyClagitss: {type: String},
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
    toastClass: {type: Array as PropType<Array<string>>},
    toaster: {type: String, default: 'top-right'},
    variant: {type: String},
  },

  setup(props, {emit}) {
    const element = ref<HTMLElement>()
    const instance = ref<Toast>()
    const root = ref(null)

    console.log(getCurrentInstance()?.appContext.app._container)

    useEventListener(element, 'show.bs.toast', () => emit('show'))
    useEventListener(element, 'shown.bs.toast', () => emit('shown'))
    useEventListener(element, 'hide.bs.toast', () => emit('hide'))
    useEventListener(element, 'hidden.bs.toast', () => emit('hidden'))

    // useEventListener(element, 'mouseover.bs.toast', () => emit('mouseover'))
    // useEventListener(element, 'mouseout.bs.toast', () => emit('mouseout'))
    // useEventListener(element, 'focusin.bs.toast', () => emit('focusin'))
    // useEventListener(element, 'focusout.bs.toast', () => emit('focusout'))

    // const ensureToaster = () =>{

    // }
    watch(
      () => props.toaster,
      (first, second) => {
        // nextTick(ensureToaster)
      }
    )
    onMounted(() => {
      const config = {
        animation: props.animation,
        delay: props.delay,
        autohide: props.autoHide,
      }
      instance.value = new Toast(element.value as HTMLElement, config)
    })

    const hide = () => {
      instance.value?.hide()
    }
    const show = () => {
      instance.value?.show()
    }

    return {
      element,
      hide,
      show,
    }
  },
})
</script>

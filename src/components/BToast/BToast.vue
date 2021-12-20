<template>
  <div ref="element" class="toast">
    <div class="toast-header">
      {{ title }}
    </div>
    <div class="toast-body"></div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, h, onMounted, PropType, reactive, ref, watch} from 'vue'
import useEventListener from '../../composables/useEventListener'

import {Toast} from 'bootstrap'

export default defineComponent({
  name: 'BToast',
  props: {
    appendToast: {type: Boolean, default: false},
    autoHideDelay: {type: Number, default: 5000},
    bodyClagitss: {type: String},
    headerClass: {type: String},
    headerTag: {type: String, default: 'header'},
    // Switches role to 'status' and aria-live to 'polite'
    isStatus: {type: Boolean, default: false},
    noAutoHide: {type: Boolean, default: false},
    noCloseButton: {type: Boolean, default: false},
    noFade: {type: Boolean, default: false},
    noHoverPause: {type: Boolean, default: false},
    solid: {type: Boolean, default: false},
    // Render the toast in place, rather than in a portal-target
    static: {type: Boolean, default: false},
    title: {type: String},
    toastClass: {type: Array as PropType<Array<string>>},
    toaster: {type: String, default: 'b-toaster-top-right'},
    variant: {type: String},
  },
  setup(props, {emit}) {
    const element = ref<HTMLElement>()
    const instance = ref<Toast>()
    const root = ref(null)

    useEventListener(element, 'show.bs.toast', () => emit('show'))
    useEventListener(element, 'shown.bs.toast', () => emit('shown'))
    useEventListener(element, 'hide.bs.toast', () => emit('hide'))
    useEventListener(element, 'hidden.bs.toast', () => emit('hidden'))

    useEventListener(element, 'mouseover.bs.toast', () => emit('mouseover'))
    useEventListener(element, 'mouseout.bs.toast', () => emit('mouseout'))
    useEventListener(element, 'focusin.bs.toast', () => emit('focusin'))
    useEventListener(element, 'focusout.bs.toast', () => emit('focusout'))

    onMounted(() => {
      instance.value = new Toast(element.value as HTMLElement)
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

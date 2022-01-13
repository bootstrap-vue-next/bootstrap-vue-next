<template>
  <div :class="[positionClass]" class="toast-container position-absolute"></div>
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
  Ref,
  ref,
  toRefs,
  ToRefs,
  watch,
} from 'vue'

import {ToastOptions} from '../../plugins/BToast'
import {ContainerPosition} from '../../types/container'

const toastPositions = {
  'top-left': 'top-0 start-0',
  'top-center': 'top-0 start-50',
  'top-right': 'top-0 end-0',
  'middle-left': 'top-50 start-0 translate-middle-y',
  'middle-center': 'top-50 start-50 translate-middle',
  'middle-right': 'top-50 end-0 translate-middle-y',
  'bottom-left': 'bottom-0 start-0',
  'bottom-center': 'bottom-0 start-50',
  'bottom-right': 'bottom-0 end-0',
}

export default defineComponent({
  name: 'BToastContainer',
  props: {
    position: {type: String as PropType<ContainerPosition>, default: 'top-right'},
  },

  setup(props, {emit}) {
    const toasts: Ref<Array<ToastOptions>> = ref([])

    function show(
      toast: ToastOptions = {delay: 5000, value: true, pos: 'top-right'}
    ): ToRefs<ToastOptions> {
      if (toast.id === undefined) {
        const t = reactive({...{id: Symbol('toast')}, ...toast})
        toasts.value.push(t)
        return toRefs<ToastOptions>(t)
      }

      return toRefs<ToastOptions>(toast)
    }
    const positionClass = computed(() => toastPositions[props.position])

    // function hide(){

    // }

    return {
      positionClass,
    }
  },
  computed: {
    // pos() {
    // return toastPositions.topRight
    // },
  },
})
</script>

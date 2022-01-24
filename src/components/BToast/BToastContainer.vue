<template>
  <div :class="[positionClass]" class="toast-container position-absolute p-3">
    <b-toast
      v-for="toast in vm.toasts"
      :key="toast.options.id"
      :title="toast.content.title"
      :body="toast.content.body"
      :component="toast.content.vnode"
    >
    </b-toast>
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
  Ref,
  ref,
  toRefs,
  ToRefs,
  watch,
} from 'vue'

import {Toast, ToastVM} from '../../plugins/BToast'
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
    vm: {type: Object as PropType<ToastVM>},
  },

  setup(props, {emit}) {
    const toasts: Ref<Array<Toast>> = ref([])
    const positionClass = computed(() => toastPositions[props.position])

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

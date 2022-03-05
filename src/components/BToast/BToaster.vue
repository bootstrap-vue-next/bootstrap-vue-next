<template>
  <div :class="[positionClass]" class="b-toaster position-fixed p-3" style="z-index: 11">
    <b-toast
      v-for="toast in instance.toasts(position).value"
      :id="toast.options.id"
      :key="toast.options.id"
      v-model="toast.options.value"
      :title="toast.content.title"
      :body="toast.content.body"
      :component="toast.content.vnode"
      :variant="toast.options.variant"
      @destroyed="handleDestroy"
    >
    </b-toast>
    <div></div>
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
import {ToastInstance} from './plugin'
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
  name: 'BToaster',
  props: {
    position: {type: String as PropType<ContainerPosition>, default: 'top-right'},
    instance: {type: Object as PropType<ToastInstance>},
    // appendToast: {type: Boolean, default: false},
  },

  setup(props, {emit}) {
    const positionClass = computed(() => toastPositions[props.position])

    const handleDestroy = (id: string) => {
      //we made want to disable reactivity for deletes. Future Note
      props.instance?.remove(id)
    }
    return {
      positionClass,
      handleDestroy,
    }
  },
  computed: {},
})
</script>

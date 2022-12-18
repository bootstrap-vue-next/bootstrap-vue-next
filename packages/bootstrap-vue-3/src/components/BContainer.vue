<script lang="ts">
import type {Breakpoint, Position} from '../types'
import {computed, defineComponent, h, onMounted, type PropType, ref, type VNode} from 'vue'
import {ToastInstance, useToast} from './BToast/plugin'
import BToaster from './BToast/BToaster.vue'
export default defineComponent({
  props: {
    gutterX: {type: String, default: null},
    gutterY: {type: String, default: null},
    fluid: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
    toast: {type: Object},
    position: {type: String as PropType<Position>, required: false},
  },
  setup(props, {slots, expose}) {
    const container = ref()
    let toastInstance: ToastInstance | undefined

    const classes = computed(() => ({
      container: !props.fluid,
      [`container-fluid`]: typeof props.fluid === 'boolean' && props.fluid,
      [`container-${props.fluid}`]: typeof props.fluid === 'string',
      [`gx-${props.gutterX}`]: props.gutterX !== null,
      [`gy-${props.gutterY}`]: props.gutterY !== null,
    }))

    onMounted(() => {
      if (props.toast) {
        // toastInstance.setVmContainer(container)
      }
    })

    // let this be the container for the toast
    if (props.toast) {
      toastInstance = useToast({container, root: props.toast.root})
      expose({
        // ...toastInstance?.useMethods,
      })
    }

    return () => {
      const subContainers: Array<VNode> = []

      toastInstance?.containerPositions.value.forEach((position) => {
        subContainers.push(h(BToaster, {key: position, instance: toastInstance, position}))
      })

      return h('div', {class: [classes.value, props.position], ref: container}, [
        ...subContainers,
        slots.default?.(),
      ])
    }
  },
  methods: {},
})

/* Reverted back for compat

<template>
  <component :is="tag" ref="container" :class="computedClasses">
    <!-- <b-toaster
      v-for="(pos, index) in toasts"
      :key="index"
      :instance="toastInstance"
      :position="pos"
    /> -->
    <slot />
  </component>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
// import type {Position} from '../types'
// import BToaster from './BToast/BToaster.vue'
// import {ToastInstance} from './BToast/plugin'

interface Props {
  gutterX?: string
  gutterY?: string
  fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' // boolean | Breakpoint
  // toast?: Record<string, unknown> // Make this strongly typed
  // position?: Position
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  fluid: false,
  tag: 'div',
})

const container = ref()

const computedClasses = computed(() => ({
  container: props.fluid === false,
  [`container-fluid`]: props.fluid === true,
  [`container-${props.fluid}`]: typeof props.fluid === 'string',
  [`gx-${props.gutterX}`]: props.gutterX !== undefined,
  [`gy-${props.gutterY}`]: props.gutterY !== undefined,
}))

const toasts = computed(() => toastInstance?.containerPositions.value)
    let toastInstance: ToastInstance | undefined

    onMounted(() => {
      if (props.toast) {
        // toastInstance.setVmContainer(container)
      }
    })

    // let this be the container for the toast
    if (props.toast) {
      toastInstance = useToast({container, root: props.toast.root})
      expose({
        // ...toastInstance?.useMethods,
      })
    }

    return () => {
      const subContainers: Array<VNode> = []

      toastInstance?.containerPositions.value.forEach((position) => {
        subContainers.push(h(BToaster, {key: position, instance: toastInstance, position}))
      })

      return h(props.tag, {class: [classes.value, props.position], ref: container}, [
        ...subContainers,
        slots.default?.(),
      ])
    }
}

*/
</script>

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

/* TODO finish this system
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

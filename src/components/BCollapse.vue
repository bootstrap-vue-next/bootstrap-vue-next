<template>
  <div ref="element" class="collapse" :class="classes" :data-bs-parent="parent || null">
    <slot :visible="modelValue" :close="close" />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from 'vue'
import {Collapse} from 'bootstrap'
import useEventListener from '../composables/useEventListener'

export default defineComponent({
  name: 'BCollapse',
  props: {
    modelValue: {type: Boolean, default: false},
    parent: {type: String, default: ''},
    toggle: {type: Boolean, default: false},
  },
  emits: ['update:modelValue', 'show', 'shown', 'hide', 'hidden'],
  setup(props, {emit}) {
    const element = ref<HTMLElement>()
    const instance = ref<Collapse>()
    const classes = computed(() => ({
      show: props.modelValue,
    }))

    const close = () => emit('update:modelValue', false)

    useEventListener(element, 'show.bs.collapse', () => {
      emit('show')
      emit('update:modelValue', true)
    })

    useEventListener(element, 'hide.bs.collapse', () => {
      emit('hide')
      emit('update:modelValue', false)
    })

    useEventListener(element, 'shown.bs.collapse', () => emit('shown'))
    useEventListener(element, 'hidden.bs.collapse', () => emit('hidden'))

    onMounted(() => {
      instance.value = new Collapse(element.value as HTMLElement, {
        parent: props.parent,
        toggle: props.toggle,
      })
    })

    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          instance.value?.show()
        } else {
          instance.value?.hide()
        }
      }
    )

    return {
      element,
      classes,
      close,
    }
  },
})
</script>

<template>
  <component
    :is="tag"
    :id="id"
    ref="element"
    class="collapse"
    :class="classes"
    :data-bs-parent="accordion || null"
  >
    <slot :visible="modelValue" :close="close" />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from 'vue'
import {Collapse} from 'bootstrap'
import useEventListener from '../composables/useEventListener'
import getID from '../utils/getID'

export default defineComponent({
  name: 'BCollapse',
  props: {
    accordion: {type: String, required: false},
    // appear: {type: Boolean, default: false},
    id: {type: String, default: getID()},
    // isNav: {type: Boolean, default: false},
    modelValue: {type: Boolean, default: false},
    tag: {type: String, default: 'div'},
    toggle: {type: Boolean, default: false},
    visible: {type: Boolean, default: false},
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
        parent: props.accordion ? `#${props.accordion}` : undefined,
        toggle: props.toggle,
      })
      if (props.visible || props.modelValue) {
        emit('update:modelValue', true)
        instance.value?.show()
      }
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
    watch(
      () => props.visible,
      (value) => {
        if (value) {
          emit('update:modelValue', !!value)
          instance.value?.show()
        } else {
          emit('update:modelValue', !!value)
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

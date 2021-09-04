<template>
  <div
    ref="element"
    class="offcanvas"
    :class="classes"
    tabindex="-1"
    aria-labelledby="offcanvasLabel"
    :data-bs-backdrop="backdrop"
    :data-bs-scroll="bodyScrolling"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasLabel" class="offcanvas-title">
        <slot name="title">
          {{ title }}
        </slot>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from 'vue'
import {Offcanvas} from 'bootstrap'
import useEventListener from '../composables/useEventListener'

export default defineComponent({
  name: 'BOffcanvas',
  props: {
    modelValue: {type: Boolean, default: false},
    bodyScrolling: {type: Boolean, default: false},
    backdrop: {type: Boolean, default: true},
    placement: {type: String, default: 'start'},
    title: {type: String, required: true},
  },
  emits: ['update:modelValue', 'show', 'shown', 'hide', 'hidden'],
  setup(props, {emit}) {
    const element = ref<HTMLElement>()
    const instance = ref<Offcanvas>()

    useEventListener(element, 'shown.bs.offcanvas', () => emit('shown'))
    useEventListener(element, 'hidden.bs.offcanvas', () => emit('hidden'))

    useEventListener(element, 'show.bs.offcanvas', () => {
      emit('show')
      emit('update:modelValue', true)
    })

    useEventListener(element, 'hide.bs.offcanvas', () => {
      emit('hide')
      emit('update:modelValue', false)
    })

    onMounted(() => {
      instance.value = new Offcanvas(element.value as HTMLElement)

      if (props.modelValue) {
        instance.value?.show(element.value as HTMLElement)
      }
    })

    const classes = computed(() => ({
      [`offcanvas-${props.placement}`]: props.placement,
    }))

    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          instance.value?.show(element.value as HTMLElement)
        } else {
          instance.value?.hide()
        }
      }
    )

    return {
      element,
      classes,
    }
  },
})
</script>

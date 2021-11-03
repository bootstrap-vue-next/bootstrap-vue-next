<template>
  <teleport to="body">
    <div :id="id" ref="element" class="modal" :class="classes" tabindex="-1" v-bind="$attrs">
      <div class="modal-dialog" :class="modalDialogClasses">
        <div class="modal-content">
          <div class="modal-header" :class="computedHeaderClasses">
            <h5 class="modal-title">
              <slot name="title">
                {{ title }}
              </slot>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div class="modal-body" :class="computedBodyClasses">
            <slot />
          </div>
          <div v-if="!hideFooter" class="modal-footer" :class="computedFooterClasses">
            <slot name="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="$emit('cancel')"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="$emit('ok')"
              >
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, PropType, ref, watch} from 'vue'
import {Modal} from 'bootstrap'
import useEventListener from '../composables/useEventListener'
import ColorVariant from '../types/ColorVariant'

export default defineComponent({
  name: 'BModal',
  inheritAttrs: false,
  props: {
    modelValue: {type: Boolean, default: false},
    noBackdrop: {type: Boolean, default: false},
    noFocus: {type: Boolean, default: false},
    centered: {type: Boolean, default: false},
    fade: {type: Boolean, default: false},
    fullscreen: {type: [Boolean, String], default: false},
    id: {type: String},
    bodyClass: {type: String, required: false},
    bodyBgVariant: {type: String as PropType<ColorVariant>, required: false},
    bodyTextVariant: {type: String as PropType<ColorVariant>, required: false},
    footerClass: {type: String, required: false},
    footerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    footerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    footerTextVariant: {type: String as PropType<ColorVariant>, required: false},
    headerClass: {type: String, required: false},
    headerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    headerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    headerTextVariant: {type: String as PropType<ColorVariant>, required: false},
    title: {type: String, required: false},
    scrollable: {type: Boolean, default: false},
    show: {type: Boolean, default: false},
    size: {type: String},
    staticBackdrop: {type: Boolean},
    hideFooter: {type: Boolean, default: false},
  },
  emits: ['update:modelValue', 'show', 'shown', 'hide', 'hidden', 'hide-prevented', 'ok', 'cancel'],
  setup(props, {emit}) {
    const element = ref<HTMLElement>()
    const instance = ref<Modal>()
    const classes = computed(() => ({
      fade: props.fade,
      show: props.show,
    }))
    const modalDialogClasses = computed(() => ({
      'modal-fullscreen': typeof props.fullscreen === 'boolean' ? props.fullscreen : false,
      [`modal-fullscreen-${props.fullscreen}-down`]:
        typeof props.fullscreen === 'string' ? props.fullscreen : false,
      [`modal-${props.size}`]: props.size,
      'modal-dialog-centered': props.centered,
      'modal-dialog-scrollable': props.scrollable,
    }))

    const computedBodyClasses = computed(() => [
      {
        [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
        [`text-${props.bodyTextVariant}`]: props.bodyTextVariant,
      },
      props.bodyClass,
    ])

    const computedHeaderClasses = computed(() => [
      {
        [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
        [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
        [`text-${props.headerTextVariant}`]: props.headerTextVariant,
      },
      props.headerClass,
    ])

    const computedFooterClasses = computed(() => [
      {
        [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
        [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
        [`text-${props.footerTextVariant}`]: props.footerTextVariant,
      },
      props.footerClass,
    ])

    useEventListener(element, 'shown.bs.modal', (e) => emit('shown', e))
    useEventListener(element, 'hidden.bs.modal', (e) => emit('hidden', e))
    useEventListener(element, 'hidePrevented.bs.modal', (e) => emit('hide-prevented', e))

    useEventListener(element, 'show.bs.modal', (e) => {
      emit('show', e)
      if (!e.defaultPrevented) {
        emit('update:modelValue', true)
      }
    })

    useEventListener(element, 'hide.bs.modal', (e) => {
      emit('hide', e)
      if (!e.defaultPrevented) {
        emit('update:modelValue', false)
      }
    })

    onMounted(() => {
      instance.value = new Modal(element.value as HTMLElement, {
        backdrop: props.staticBackdrop ? 'static' : !props.noBackdrop,
        keyboard: !props.staticBackdrop,
        focus: !props.noFocus,
      })

      if (props.modelValue) {
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

    return {
      element,
      classes,
      modalDialogClasses,
      computedBodyClasses,
      computedFooterClasses,
      computedHeaderClasses,
    }
  },
})
</script>

<template>
  <teleport to="body">
    <div :id="id" ref="element" class="modal" :class="modalClasses" tabindex="-1" v-bind="$attrs">
      <div class="modal-dialog" :class="modalDialogClasses">
        <div class="modal-content" :class="contentClass">
          <div v-if="!hideHeader" class="modal-header" :class="computedHeaderClasses">
            <component :is="titleTag" class="modal-title" :class="computedTitleClasses">
              <slot name="title">
                {{ title }}
              </slot>
            </component>
            <button
              v-if="!hideHeaderClose"
              type="button"
              class="btn-close"
              :class="computedCloseButtonClasses"
              data-bs-dismiss="modal"
              :aria-label="headerCloseLabel"
            >
              <slot name="header-close"></slot>
            </button>
          </div>
          <div class="modal-body" :class="computedBodyClasses">
            <slot />
          </div>
          <div v-if="!hideFooter" class="modal-footer" :class="computedFooterClasses">
            <slot name="footer">
              <b-button
                v-if="!okOnly"
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                :disabled="disableCancel"
                :size="buttonSize"
                :variant="cancelVariant"
                @click="$emit('cancel')"
              >
                {{ cancelTitle }}
              </b-button>
              <b-button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                :disabled="disableOk"
                :size="buttonSize"
                :variant="okVariant"
                @click="$emit('ok')"
              >
                {{ okTitle }}
              </b-button>
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
import BButton from '../components/BButton/BButton.vue'
import useEventListener from '../composables/useEventListener'
import ColorVariant from '../types/ColorVariant'
import InputSize from '../types/InputSize'

export default defineComponent({
  name: 'BModal',
  components: {BButton},
  inheritAttrs: false,
  props: {
    bodyBgVariant: {type: String as PropType<ColorVariant>, required: false},
    bodyClass: {type: String, required: false},
    bodyTextVariant: {type: String as PropType<ColorVariant>, required: false},
    busy: {type: Boolean, default: false},
    buttonSize: {type: String as PropType<InputSize>, default: 'md'},
    cancelDisabled: {type: Boolean, default: false},
    cancelTitle: {type: String, default: 'Cancel'},
    cancelVariant: {type: String as PropType<ColorVariant>, default: 'secondary'},
    centered: {type: Boolean, default: false},
    contentClass: {type: String, required: false},
    dialogClass: {type: String, required: false},
    footerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    footerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    footerClass: {type: String, required: false},
    footerTextVariant: {type: String as PropType<ColorVariant>, required: false},
    fullscreen: {type: [Boolean, String], default: false},
    headerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    headerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    headerClass: {type: String, required: false},
    headerCloseLabel: {type: String, default: 'Close'},
    headerCloseWhite: {type: Boolean, default: false},
    headerTextVariant: {type: String as PropType<ColorVariant>, required: false},
    hideBackdrop: {type: Boolean, default: false},
    hideFooter: {type: Boolean, default: false},
    hideHeader: {type: Boolean, default: false},
    hideHeaderClose: {type: Boolean, default: false},
    id: {type: String, required: false},
    modalClass: {type: String, required: false},
    modelValue: {type: Boolean, default: false},
    noCloseOnBackdrop: {type: Boolean, default: false},
    noCloseOnEsc: {type: Boolean, default: false},
    noFade: {type: Boolean, default: false},
    noFocus: {type: Boolean, default: false},
    okDisabled: {type: Boolean, default: false},
    okOnly: {type: Boolean, default: false},
    okTitle: {type: String, default: 'Ok'},
    okVariant: {type: String as PropType<ColorVariant>, default: 'primary'},
    scrollable: {type: Boolean, default: false},
    show: {type: Boolean, default: false},
    size: {type: String, required: false},
    title: {type: String, required: false},
    titleClass: {type: String, required: false},
    titleSrOnly: {type: Boolean, default: false},
    titleTag: {type: String, default: 'h5'},
  },
  emits: ['update:modelValue', 'show', 'shown', 'hide', 'hidden', 'hide-prevented', 'ok', 'cancel'],
  setup(props, {emit, slots}) {
    const element = ref<HTMLElement>()
    const instance = ref<Modal>()
    const modalClasses = computed(() => [
      {
        fade: !props.noFade,
        show: props.show,
      },
      props.modalClass,
    ])
    const modalDialogClasses = computed(() => [
      {
        'modal-fullscreen': typeof props.fullscreen === 'boolean' ? props.fullscreen : false,
        [`modal-fullscreen-${props.fullscreen}-down`]:
          typeof props.fullscreen === 'string' ? props.fullscreen : false,
        [`modal-${props.size}`]: props.size,
        'modal-dialog-centered': props.centered,
        'modal-dialog-scrollable': props.scrollable,
      },
      props.dialogClass,
    ])

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

    const computedTitleClasses = computed(() => [
      {
        ['visually-hidden']: props.titleSrOnly,
      },
      props.titleClass,
    ])

    const hasHeaderCloseSlot = computed(() => {
      console.log('Header close slot available', !!slots['header-close'])
      console.log('slots', slots)
      return !!slots['header-close']
    })
    const computedCloseButtonClasses = computed(() => [
      {
        [`btn-close-content`]: hasHeaderCloseSlot.value,
        [`d-flex`]: hasHeaderCloseSlot.value,
        [`btn-close-white`]: !hasHeaderCloseSlot.value && props.headerCloseWhite,
      },
    ])

    const disableCancel = computed(() => props.cancelDisabled || props.busy)
    const disableOk = computed(() => props.okDisabled || props.busy)

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
        backdrop: props.hideBackdrop
          ? false
          : props.noCloseOnBackdrop
          ? 'static'
          : !props.hideBackdrop,
        keyboard: !props.noCloseOnEsc,
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
      disableCancel,
      disableOk,
      modalClasses,
      modalDialogClasses,
      computedBodyClasses,
      computedFooterClasses,
      computedHeaderClasses,
      computedTitleClasses,
      computedCloseButtonClasses,
    }
  },
})
</script>

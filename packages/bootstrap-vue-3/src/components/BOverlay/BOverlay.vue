<script lang="ts">
import type {Booleanish, ColorVariant} from '../../types'
import {normalizeSlot, toFloat} from '../../utils'
import {useBooleanish} from '../../composables'
import {computed, defineComponent, h, PropType, resolveComponent, toRef} from 'vue'
import BTransition from '../BTransition/BTransition.vue'

const POSITION_COVER = {top: 0, left: 0, bottom: 0, right: 0}
const SLOT_NAME_DEFAULT = 'default'
const SLOT_NAME_OVERLAY = 'overlay'

interface ISlotScope {
  spinnerType: string | null
  spinnerVariant: string | null
  spinnerSmall: boolean
}

export default defineComponent({
  components: {BTransition},
  props: {
    bgColor: {type: String, required: false},
    blur: {type: String, default: '2px'},
    fixed: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    noCenter: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    noFade: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    // If `true, does not render the default slot
    // and switches to absolute positioning
    noWrap: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    opacity: {
      type: [Number, String],
      default: 0.85,
      validator: (value: number | string) => {
        const number = toFloat(value, 0)
        return number >= 0 && number <= 1
      },
    },
    overlayTag: {type: String, default: 'div'},
    rounded: {type: [Boolean, String], default: false},
    show: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    spinnerSmall: {type: [Boolean, String] as PropType<Booleanish>, default: false},
    spinnerType: {type: String, default: 'border'},
    spinnerVariant: {type: String, required: false},
    variant: {type: String as PropType<ColorVariant>, default: 'light'},
    wrapTag: {type: String, default: 'div'},
    zIndex: {type: [Number, String], default: 10},
  },
  emits: ['click', 'hidden', 'shown'],
  setup(props, {slots, emit}) {
    const fixedBoolean = useBooleanish(toRef(props, 'fixed'))
    const noCenterBoolean = useBooleanish(toRef(props, 'noCenter'))
    const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))
    const noWrapBoolean = useBooleanish(toRef(props, 'noWrap'))
    const showBoolean = useBooleanish(toRef(props, 'show'))
    const spinnerSmallBoolean = useBooleanish(toRef(props, 'spinnerSmall'))

    const computedRounded = computed(() =>
      props.rounded === true || props.rounded === ''
        ? 'rounded'
        : !props.rounded
        ? ''
        : `rounded-${props.rounded}`
    )

    const computedVariant = computed(() =>
      props.variant && !props.bgColor ? `bg-${props.variant}` : ''
    )

    const computedSlotScope = computed(() => ({
      spinnerType: props.spinnerType || null,
      spinnerVariant: props.spinnerVariant || null,
      spinnerSmall: spinnerSmallBoolean.value,
    }))

    return () => {
      const defaultOverlayFn = (scope: ISlotScope) =>
        h(resolveComponent('BSpinner'), {
          type: scope.spinnerType,
          variant: scope.spinnerVariant,
          small: spinnerSmallBoolean.value,
        })

      let $overlay: any = ''

      if (showBoolean.value) {
        const $background = h('div', {
          class: ['position-absolute', computedVariant.value, computedRounded.value],
          style: {
            ...POSITION_COVER,
            opacity: props.opacity,
            backgroundColor: props.bgColor || null,
            backdropFilter: props.blur ? `blur(${props.blur})` : null,
          },
        })

        const $content = h(
          'div',
          {
            class: 'position-absolute',
            style: noCenterBoolean.value
              ? {...POSITION_COVER}
              : {top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'},
          },
          normalizeSlot(SLOT_NAME_OVERLAY, computedSlotScope.value, slots) ||
            defaultOverlayFn(computedSlotScope.value) ||
            ''
        )

        $overlay = h(
          props.overlayTag,
          {
            class: [
              'b-overlay',
              {
                'position-absolute':
                  !noWrapBoolean.value || (noWrapBoolean.value && !fixedBoolean.value),
                'position-fixed': noWrapBoolean.value && fixedBoolean.value,
              },
            ],
            style: {
              ...POSITION_COVER,
              zIndex: props.zIndex || 10,
            },
            onClick: (event: MouseEvent) => emit('click', event),
            key: 'overlay',
          },
          [$background, $content]
        )
      }

      const getOverlayTransition = () =>
        h(
          BTransition,
          {
            noFade: noFadeBoolean.value,
            transProps: {enterToClass: 'show'},
            name: 'fade',
            onAfterEnter: () => emit('shown'),
            onAfterLeave: () => emit('hidden'),
          },
          {default: () => $overlay}
        )

      if (noWrapBoolean.value) return getOverlayTransition()

      const wrapper = h(
        props.wrapTag,
        {
          'class': ['b-overlay-wrap position-relative'],
          'aria-busy': showBoolean.value ? 'true' : null,
        },
        [h('span', normalizeSlot(SLOT_NAME_DEFAULT, {}, slots)), getOverlayTransition()]
      )
      return wrapper
    }
  },
})
</script>

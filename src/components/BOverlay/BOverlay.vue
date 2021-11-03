<script lang="ts">
import ColorVariant from '../../types/ColorVariant'
import {toFloat} from '../../utils/number'
import {computed, defineComponent, h, PropType, resolveComponent} from 'vue'
import {normalizeSlot} from '../../utils/normalize-slot'
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
  name: 'BOverlay',
  components: {BTransition},
  props: {
    bgColor: {type: String, required: false},
    blur: {type: String, default: '2px'},
    fixed: {type: Boolean, default: false},
    noCenter: {type: Boolean, default: false},
    noFade: {type: Boolean, default: false},
    // If `true, does not render the default slot
    // and switches to absolute positioning
    noWrap: {type: Boolean, default: false},
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
    show: {type: Boolean, default: false},
    spinnerSmall: {type: Boolean, default: false},
    spinnerType: {type: String, default: 'border'},
    spinnerVariant: {type: String, required: false},
    variant: {type: String as PropType<ColorVariant>, default: 'light'},
    wrapTag: {type: String, default: 'div'},
    zIndex: {type: [Number, String], default: 10},
  },
  emits: ['click', 'hidden', 'shown'],
  setup(props, {slots, emit}) {
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
      spinnerSmall: props.spinnerSmall,
    }))

    return () => {
      const defaultOverlayFn = (scope: ISlotScope) =>
        h(resolveComponent('BSpinner'), {
          type: scope.spinnerType,
          variant: scope.spinnerVariant,
          small: scope.spinnerSmall,
        })

      let $overlay: any = ''

      if (props.show) {
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
            style: props.noCenter
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
                'position-absolute': !props.noWrap || (props.noWrap && !props.fixed),
                'position-fixed': props.noWrap && props.fixed,
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
            noFade: props.noFade,
            name: 'fade',
            appear: true,
            onAfterEnter: () => emit('shown'),
            onAfterLeave: () => emit('hidden'),
          },
          {default: () => $overlay}
        )

      if (props.noWrap) return getOverlayTransition()

      const wrapper = h(
        props.wrapTag,
        {
          'class': ['b-overlay-wrap position-relative'],
          'aria-busy': props.show ? 'true' : null,
        },
        [h('span', normalizeSlot(SLOT_NAME_DEFAULT, {}, slots)), getOverlayTransition()]
      )
      return wrapper
    }
  },
})
</script>

<script lang="ts">
import type {Booleanish, ColorVariant} from '../../types'
import type {BProgressParentData} from '../../types/components'
import {resolveBooleanish} from '../../utils'
import {computed, defineComponent, h, inject, PropType} from 'vue'
import {injectionKey} from './BProgress.vue'

export default defineComponent({
  props: {
    animated: {type: Boolean as PropType<Booleanish>, default: false},
    label: {type: String},
    labelHtml: {type: String},
    max: {type: [Number, String]},
    precision: {type: [Number, String], default: 0},
    showProgress: {type: Boolean as PropType<Booleanish>, default: false},
    showValue: {type: Boolean as PropType<Booleanish>, default: false},
    striped: {type: Boolean as PropType<Booleanish>, default: false},
    value: {type: [Number, String], default: 0},
    variant: {type: String as PropType<ColorVariant>},
  },
  setup(props, {slots}) {
    const animatedBoolean = computed(() => resolveBooleanish(props.animated))
    const showProgressBoolean = computed(() => resolveBooleanish(props.showProgress))
    const showValueBoolean = computed(() => resolveBooleanish(props.showValue))
    const stripedBoolean = computed(() => resolveBooleanish(props.striped))

    const parent = inject<BProgressParentData>(injectionKey)

    const classes = computed(() => ({
      'progress-bar-animated': animatedBoolean.value || parent?.animated,
      'progress-bar-striped':
        stripedBoolean.value || parent?.striped || animatedBoolean.value || parent?.animated,
      [`bg-${props.variant}`]: props.variant,
    }))

    const computedLabel = computed<string>(() => {
      if (showValueBoolean.value || parent?.showValue) {
        return parseFloat(props.value as string).toFixed(props.precision as number)
      }

      if (showProgressBoolean.value || parent?.showProgress) {
        const progress = (
          ((props.value as number) * 100) /
          parseInt((props.max || 100) as string)
        ).toString()
        return parseFloat(progress).toFixed(props.precision as number)
      }

      return props.label || ''
    })

    const width = computed<string>(() => {
      if (props.max || parent?.max) {
        return `${
          ((props.value as number) * 100) / parseInt((props.max || parent?.max) as string)
        }%`
      }

      return typeof props.value === 'string' ? props.value : `${props.value}%`
    })

    const progressProps = computed(() => {
      const rawProps = {
        'class': ['progress-bar', classes.value],
        'role': 'progressbar',
        'aria-valuenow': props.value,
        'aria-valuemin': 0,
        'aria-valuemax': props.max,
        'style': {width: width.value},
      }

      if (props.labelHtml) {
        return {
          ...rawProps,
          innerHTML: props.labelHtml,
        }
      }

      return rawProps
    })

    return () => h('div', progressProps.value, slots.default?.() || computedLabel.value)
  },
})
</script>

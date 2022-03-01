<script lang="ts">
import {computed, defineComponent, h, PropType} from 'vue'
import type {ColorVariant} from '../../types'

export default defineComponent({
  props: {
    bordered: {type: Boolean, default: false},
    borderless: {type: Boolean, default: false},
    borderVariant: {type: String as PropType<ColorVariant>},
    captionTop: {type: Boolean, default: false},
    dark: {type: Boolean, default: false},
    hover: {type: Boolean, default: false},
    responsive: {type: [Boolean, String], default: false},
    striped: {type: Boolean, default: false},
    small: {type: Boolean, default: false},
    tableClass: {type: [Array, Object, String]},
    tableVariant: {type: String},
  },
  setup(props, {slots}) {
    const classes = computed(() => [
      {
        'table-bordered': props.bordered,
        'table-borderless': props.borderless,
        [`border-${props.borderVariant}`]: props.borderVariant,
        'caption-top': props.captionTop,
        'table-dark': props.dark,
        'table-hover': props.hover,
        'table-striped': props.striped,
        'table-sm': props.small,
        [`table-${props.tableVariant}`]: props.tableVariant,
      },
      props.tableClass,
    ])

    const table = h(
      'table',
      {
        class: ['table', classes.value],
        role: 'table',
      },
      slots.default?.()
    )

    if (props.responsive) {
      return () =>
        h(
          'div',
          {
            class: {
              'table-responsive': typeof props.responsive === 'boolean',
              [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
            },
          },
          table
        )
    }

    return () => table
  },
})
</script>

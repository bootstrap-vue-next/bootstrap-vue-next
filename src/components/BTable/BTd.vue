<script lang="ts">
import {computed, defineComponent, h, useSlots} from 'vue'

export default defineComponent({
  props: {
    colspan: {type: [String, Number]},
    rowspan: {type: [String, Number]},
    stackedHeading: {type: String},
    stickyColumn: {type: Boolean, default: false},
    variant: {type: String},
  },

  setup(props) {
    const slots = useSlots()

    const classes = computed(() => ({
      [`table-${props.variant}`]: props.variant,
      'b-table-sticky-column': props.stickyColumn,
      'table-b-table-default': props.stickyColumn && !props.variant,
    }))

    const scope = computed(() => (props.colspan ? 'colspan' : props.rowspan ? 'rowspan' : 'col'))

    const children = computed(() =>
      props.stackedHeading ? h('div', slots.default?.()) : slots.default?.()
    )

    return () =>
      h(
        'td',
        {
          'role': 'cell',
          'scope': scope.value,
          'class': classes.value,
          'colspan': props.colspan,
          'rowspan': props.rowspan,
          'data-label': props.stackedHeading,
        },
        children.value
      )
  },
})
</script>

<template>
  <div />
</template>

<script lang="ts">
import {computed, defineComponent, h, PropType} from 'vue'
import {Breakpoint, ColorVariant, TableField, TableItem, VerticalAlign} from '../../types'
import useItemHelper from './itemHelper'

export default defineComponent({
  name: 'BTable',
  props: {
    align: {type: String as PropType<VerticalAlign>},
    caption: {type: String},
    captionTop: {type: Boolean, default: false},
    borderless: {type: Boolean, default: false},
    bordered: {type: Boolean, default: false},
    borderVariant: {type: String as PropType<ColorVariant>},
    dark: {type: Boolean, default: false},
    fields: {type: Array as PropType<TableField[]>, default: () => []},
    footClone: {type: Boolean, default: false},
    hover: {type: Boolean, default: false},
    items: {type: Array as PropType<TableItem[]>, default: () => []},
    responsive: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
    small: {type: Boolean, default: false},
    striped: {type: Boolean, default: false},
    variant: {type: String as PropType<ColorVariant>},
  },
  setup(props, {slots}) {
    const classes = computed(() => ({
      [`align-${props.align}`]: props.align,
      [`table-${props.variant}`]: props.variant,
      'table-striped': props.striped,
      'table-hover': props.hover,
      'table-dark': props.dark,
      'table-bordered': props.bordered,
      [`border-${props.borderVariant}`]: props.borderVariant,
      'table-borderless': props.borderless,
      'table-sm': props.small,
      'caption-top': props.captionTop,
    }))

    const itemHelper = useItemHelper()
    const computedFields = computed(() => itemHelper.normaliseFields(props.fields, props.items))

    return () => {
      const tHead = h(
        'thead',
        h(
          'tr',
          computedFields.value.map((field) =>
            h(
              'th',
              {
                ...field.thAttr,
                scope: 'col',
                class: [field.class, field.thClass, field.variant ? `table-${field.variant}` : ''],
                title: field.headerTitle,
                abbr: field.headerAbbr,
                style: field.thStyle,
              },
              field.label
            )
          )
        )
      )

      const tBody = [
        h(
          'tbody',
          props.items.map((tr, index) =>
            h(
              'tr',
              computedFields.value.map((field) => {
                const slotName = `cell(${field.key})`
                let tdContent = tr[field.key]

                if (slots[slotName]) {
                  tdContent = slots[slotName]?.({
                    value: tr[field.key],
                    index,
                    item: tr,
                    items: props.items,
                  })
                }

                return h(
                  'td',
                  {
                    ...field.tdAttr,
                    class: [
                      field.class,
                      field.tdClass,
                      field.variant ? `table-${field.variant}` : '',
                    ],
                  },
                  tdContent
                )
              })
            )
          )
        ),
      ]

      const tableContent = [tHead, tBody]

      if (slots['table-caption']) {
        tableContent.push(h('caption', slots['table-caption']()))
      } else {
        if (props.caption) {
          const tCaption = h('caption', props.caption)
          tableContent.push(tCaption)
        }
      }

      if (props.footClone) {
        const tFoot = h(
          'tfoot',
          h(
            'tr',
            computedFields.value.map((field) =>
              h(
                'th',
                {
                  ...field.thAttr,
                  scope: 'col',
                  class: [
                    field.class,
                    field.thClass,
                    field.variant ? `table-${field.variant}` : '',
                  ],
                  title: field.headerTitle,
                  abbr: field.headerAbbr,
                  style: field.thStyle,
                },
                field.label
              )
            )
          )
        )

        tableContent.push(tFoot)
      }

      const table = h(
        'table',
        {
          class: ['table', classes.value],
        },
        tableContent
      )

      if (props.responsive) {
        return h(
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

      return table
    }
  },
})
</script>

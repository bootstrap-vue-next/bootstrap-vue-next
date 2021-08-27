<template>
  <table
    class="table"
    :class="classes"
    v-bind="$attrs"
  >
    <caption v-if="caption">
      {{
        caption
      }}
    </caption>
    <thead>
      <tr>
        <th
          v-for="(th, i) in headerTable"
          :key="i"
          scope="col"
        >
          {{ th }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(tr, i) in items"
        :key="i"
        :class="{ [`table-${tr._rowVariant}`]: tr._rowVariant }"
      >
        <td
          v-for="(value, key, index) in tr"
          :key="index"
        >
          <slot
            :name="`cell(${key})`"
            v-bind="{ value, items }"
          >
            {{
              value
            }}
          </slot>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="footClone">
      <tr>
        <th
          v-for="(th, i) in headerTable"
          :key="i"
          scope="col"
        >
          {{ th }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, h, PropType } from 'vue';
import { Breakpoint, ColorVariant, TableField, TableItem, VerticalAlign } from '../types';

export default defineComponent({
  name: 'BTable',
  props: {
    align: { type: String as PropType<VerticalAlign> },
    caption: { type: String },
    captionTop: { type: Boolean, default: false },
    borderless: { type: Boolean, default: false },
    bordered: { type: Boolean, default: false },
    borderVariant: { type: String as PropType<ColorVariant> },
    dark: { type: Boolean, default: false },
    fields: { type: Array as PropType<TableField[]>, default: () => [] },
    footClone: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    items: { type: Array as PropType<TableItem[]>, default: () => [] },
    responsive: { type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false },
    small: { type: Boolean, default: false },
    striped: { type: Boolean, default: false },
    variant: { type: String as PropType<ColorVariant> },
  },
  setup(props, { slots }) {
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
    }));

    const headerTable = computed(() => {
      if (props.items.length > 0) {
        return Object.keys(props.items[0]).map((th) => th.replaceAll('_', ' '));
      }

      return [];
    });

    // return {
    //     classes,
    //     headerTable
    // }
    return () => {
      const tHead = h(
        'thead',
        h(
          'tr',
          headerTable.value.map((th) => h('th', { scope: 'col' }, th))
        )
      );

      const tBody = [
        h(
          'tbody',
          props.items.map((tr) =>
            h(
              'tr',
              Object.keys(tr).map((cell) => {
                const slotName = `cell(${cell})`;
                let tdContent = tr[cell];

                if (slots[slotName]) {
                  tdContent = slots[slotName]?.({
                    value: tr[cell],
                    items: props.items
                  });
                }

                return h('td', tdContent);
              })
            )
          )
        ),
      ];

      const tableContent = [tHead, tBody];

      if (props.footClone) {
        const tFoot = h(
          'tfoot',
          h(
            'tr',
            headerTable.value.map((th) => h('th', { scope: 'col' }, th))
          )
        );

        tableContent.push(tFoot);
      }

      const table = h(
        'table',
        {
          class: ['table', classes.value],
        },
        tableContent
      );

      if (props.responsive) {
        return h(
          'div',
          {
            class: {
                'table-responsive': typeof props.responsive === 'boolean',
                [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string'
            },
          },
          table
        );
      }

      return table;
    };
  },
});
</script>

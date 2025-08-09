import type {BColSlots, BRowSlots} from 'bootstrap-vue-next'
import {type ComponentReference, type PropRecord, type SlotRecord, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import type {
  BColProps,
  BContainerProps,
  BContainerSlots,
  BRowProps,
} from 'node_modules/bootstrap-vue-next/dist/src'

export default {
  load: (): ComponentReference => ({
    BContainer: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.container[-*]'},
      sourcePath: '/BContainer/BContainer.vue',
      props: {
        ...pick(buildCommonProps(), ['tag']),
        fluid: {
          type: 'boolean | Breakpoint',
          default: false, // TODO item not in string format
          description:
            'When set to true, makes the row 100% wide all the time, or set to one of the Bootstrap breakpoint names for 100% width up to the breakpoint', // TODO grammar check (should say "container" instead of "row" to match component context)
        },
        gutterX: {
          type: 'GutterNumbers',
          default: undefined,
          description: 'Horizontal gutter',
        },
        gutterY: {
          type: 'GutterNumbers',
          default: undefined,
          description: 'Vertical gutter',
        },
      } satisfies PropRecord<keyof BContainerProps>,
      slots: {
        default: {
          description: 'Content to place in the container',
        },
      } satisfies SlotRecord<keyof BContainerSlots>,
    },
    BRow: {
      sourcePath: '/BContainer/BRow.vue',
      props: {
        ...pick(buildCommonProps(), ['tag']),
        alignContent: {
          type: 'AlignmentContent',
          default: undefined,
          description:
            "Align columns items together on the cross axis: 'start', 'center', 'end', 'around', 'between', 'fill' or 'stretch'. Has no effect on single rows of items", // TODO grammar check (should say "Aligns column items" instead of "Align columns items" for clarity)
        },
        alignH: {
          type: 'AlignmentJustifyContent',
          default: undefined,
          description:
            "Horizontal alignment/spacing of all columns: 'start', 'center', 'end', 'around', 'between', or 'evenly'",
        },
        alignV: {
          type: 'AlignmentVertical',
          default: undefined,
          description:
            "Vertical alignment of all columns in a row: 'start', 'center', 'end', 'baseline', 'fill', or 'stretch'",
        },
        cols: {
          type: 'ColsNumbers',
          default: undefined,
          description: "The number row columns to create at the 'xs' breakpoint.", // TODO grammar check (should say "number of row columns" instead of "number row columns")
        },
        colsLg: {
          type: 'ColsNumbers',
          default: undefined,
          description: "The number row columns to create at the 'ls' breakpoint.", // TODO grammar check (should say "number of row columns" and "'lg' breakpoint" instead of "'ls' breakpoint")
        },
        colsMd: {
          type: 'ColsNumbers',
          default: undefined,
          description: "The number row columns to create at the 'md' breakpoint.", // TODO grammar check (should say "number of row columns")
        },
        colsSm: {
          type: 'ColsNumbers',
          default: undefined,
          description: "The number row columns to create at the 'sm' breakpoint.", // TODO grammar check (should say "number of row columns")
        },
        colsXl: {
          type: 'ColsNumbers',
          default: undefined,
          description: "The number row columns to create at the 'xl' breakpoint.", // TODO grammar check (should say "number of row columns")
        },
        colsXxl: {
          type: 'ColsNumbers',
          default: undefined,
          description: "The number row columns to create at the 'xxl' breakpoint.", // TODO grammar check (should say "number of row columns")
        },
        gutterX: {
          type: 'GutterNumbers',
          default: undefined,
          description: 'Horizontal gutter',
        },
        gutterY: {
          type: 'GutterNumbers',
          default: undefined,
          description: 'Vertical gutter',
        },
        noGutters: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When set, removes the margin from the row and removes the padding from the child columns',
        },
      } satisfies PropRecord<keyof BRowProps>,
      slots: {
        default: {
          description: 'Content to place in the row',
        },
      } satisfies SlotRecord<keyof BRowSlots>,
    },
    BCol: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.col[-*]'},
      sourcePath: '/BContainer/BCol.vue',
      props: {
        ...pick(buildCommonProps(), ['tag']),
        alignSelf: {
          type: "AlignmentVertical | 'auto'",
          default: undefined,
          description:
            "Vertical alignment of the grid cell with respect to the row: 'start', 'center', 'fill', 'end', 'baseline', or 'stretch'",
        },
        col: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When true makes an equal width column grid cell spans for xs and up breakpoints', // TODO grammar check (should say "When true, makes the column grid cell span equal width" for clarity)
        },
        cols: {
          type: "ColsNumbers | 'auto'",
          default: undefined,
          description: 'Number of columns the grid cell spans for xs and up breakpoints',
        },
        lg: {
          type: "boolean | ColsNumbers | 'auto'",
          default: false, // TODO item not in string format
          description: 'Number of columns the grid cell spans for lg and up breakpoints',
        },
        md: {
          type: "boolean | ColsNumbers | 'auto'",
          default: false, // TODO item not in string format
          description: 'Number of columns the grid cell spans for md and up breakpoints',
        },
        sm: {
          type: "boolean | ColsNumbers | 'auto'",
          default: false, // TODO item not in string format
          description: 'Number of columns the grid cell spans for sm and up breakpoints',
        },
        xl: {
          type: "boolean | ColsNumbers | 'auto'",
          default: false, // TODO item not in string format
          description: 'Number of columns the grid cell spans for xl and up breakpoints',
        },
        xxl: {
          type: "boolean | ColsNumbers | 'auto'",
          default: false, // TODO item not in string format
          description: 'Number of columns the grid cell spans for xxl and up breakpoints',
        },
        offset: {
          type: 'ColsOffsetNumbers',
          default: undefined,
          description: 'Number of columns the grid cell is offset for xs and up breakpoints (0-12)',
        },
        offsetLg: {
          type: 'ColsOffsetNumbers',
          default: undefined,
          description: 'Number of columns the grid cell is offset for lg and up breakpoints (0-12)',
        },
        offsetMd: {
          type: 'ColsOffsetNumbers',
          default: undefined,
          description: 'Number of columns the grid cell is offset for md and up breakpoints (0-12)',
        },
        offsetSm: {
          type: 'ColsOffsetNumbers',
          default: undefined,
          description: 'Number of columns the grid cell is offset for sm and up breakpoints (0-12)',
        },
        offsetXl: {
          type: 'ColsOffsetNumbers',
          default: undefined,
          description: 'Number of columns the grid cell is offset for xl and up breakpoints (0-12)',
        },
        offsetXxl: {
          type: 'ColsOffsetNumbers',
          default: undefined,
          description:
            'Number of columns the grid cell is offset for xxl and up breakpoints (0-12)',
        },
        order: {
          type: 'ColsOrderNumbers',
          default: undefined,
          description:
            "Flex order of the grid cell for xs and up breakpoints (1-5, 'first', or 'last')",
        },
        orderLg: {
          type: 'ColsOrderNumbers',
          default: undefined,
          description:
            "Flex order of the grid cell for lg and up breakpoints (1-5, 'first', or 'last')",
        },
        orderMd: {
          type: 'ColsOrderNumbers',
          default: undefined,
          description:
            "Flex order of the grid cell for md and up breakpoints (1-5, 'first', or 'last')",
        },
        orderSm: {
          type: 'ColsOrderNumbers',
          default: undefined,
          description:
            "Flex order of the grid cell for sm and up breakpoints (1-5, 'first', or 'last')",
        },
        orderXl: {
          type: 'ColsOrderNumbers',
          default: undefined,
          description:
            "Flex order of the grid cell for xl and up breakpoints (1-5, 'first', or 'last')",
        },
        orderXxl: {
          type: 'ColsOrderNumbers',
          default: undefined,
          description:
            "Flex order of the grid cell for xxl and up breakpoints (1-5, 'first', or 'last')",
        },
      } satisfies PropRecord<keyof BColProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the col',
        },
      } satisfies SlotRecord<keyof BColSlots>,
    },
  }),
}

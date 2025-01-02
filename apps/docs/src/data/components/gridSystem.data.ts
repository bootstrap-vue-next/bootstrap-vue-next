import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BContainer',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.container[-*]'},
      sourcePath: '/BContainer/BContainer.vue',
      props: {
        '': {
          fluid: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              'When set to true, makes the row 100% wide all the time, or set to one of the Bootstrap breakpoint names for 100% width up to the breakpoint',
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
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BContainer'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the container',
        },
      ],
    },
    {
      component: 'BRow',
      sourcePath: '/BContainer/BRow.vue',
      props: {
        '': {
          alignContent: {
            type: 'AlignmentContent',
            default: undefined,
            description:
              "Align columns items together on the cross axis: 'start', 'center', 'end', 'around', 'between', 'fill' or 'stretch'. Has no effect on single rows of items",
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
            description: "The number row columns to create at the 'xs' breakpoint.",
          },
          colsLg: {
            type: 'ColsNumbers',
            default: undefined,
            description: "The number row columns to create at the 'ls' breakpoint.",
          },
          colsMd: {
            type: 'ColsNumbers',
            default: undefined,
            description: "The number row columns to create at the 'md' breakpoint.",
          },
          colsSm: {
            type: 'ColsNumbers',
            default: undefined,
            description: "The number row columns to create at the 'sm' breakpoint.",
          },
          colsXl: {
            type: 'ColsNumbers',
            default: undefined,
            description: "The number row columns to create at the 'xl' breakpoint.",
          },
          colsXxl: {
            type: 'ColsNumbers',
            default: undefined,
            description: "The number row columns to create at the 'xxl' breakpoint.",
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
            default: false,
            description:
              'When set, removes the margin from the row and removes the padding from the child columns',
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BRow'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the row',
        },
      ],
    },
    {
      component: 'BCol',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.col[-*]'},
      sourcePath: '/BContainer/BCol.vue',
      props: {
        '': {
          alignSelf: {
            type: "AlignmentVertical | 'auto'",
            default: undefined,
            description:
              "Vertical alignment of the grid cell with respect to the row: 'start', 'center', 'fill', 'end', 'baseline', or 'stretch'",
          },
          col: {
            type: 'boolean',
            default: false,
            description:
              'When true makes an equal width column grid cell spans for xs and up breakpoints',
          },
          cols: {
            type: "ColsNumbers | 'auto'",
            default: undefined,
            description: 'Number of columns the grid cell spans for xs and up breakpoints',
          },
          lg: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Number of columns the grid cell spans for lg and up breakpoints',
          },
          md: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Number of columns the grid cell spans for md and up breakpoints',
          },
          sm: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Number of columns the grid cell spans for sm and up breakpoints',
          },
          xl: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Number of columns the grid cell spans for xl and up breakpoints',
          },
          xxl: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Number of columns the grid cell spans for xxl and up breakpoints',
          },
          offset: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description:
              'Number of columns the grid cell is offset for xs and up breakpoints (0-12)',
          },
          offsetLg: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description:
              'Number of columns the grid cell is offset for lg and up breakpoints (0-12)',
          },
          offsetMd: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description:
              'Number of columns the grid cell is offset for md and up breakpoints (0-12)',
          },
          offsetSm: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description:
              'Number of columns the grid cell is offset for sm and up breakpoints (0-12)',
          },
          offsetXl: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description:
              'Number of columns the grid cell is offset for xl and up breakpoints (0-12)',
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
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BCol'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the col',
        },
      ],
    },
  ],
}

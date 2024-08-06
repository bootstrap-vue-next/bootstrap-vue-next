import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BContainer',
      props: {
        '': {
          fluid: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              'When set to true, makes the row 100% wide all the time, or set to one of the Bootstrap breakpoint names for 100% width up to the breakpoint',
          },
          gutterX: {
            type: 'ColsNumbers',
            default: undefined,
            description: 'Horizontal gutter',
          },
          gutterY: {
            type: 'ColNumbers',
            default: undefined,
            description: 'Vertical gutter',
          },
          tag: {
            type: 'string',
            default: 'div',
            description: 'Specify the HTML tag to render instead of the default tag',
          },
        },
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BRow',
      props: {
        '': {
          alignContent: {
            type: 'AlignmentContent',
            default: undefined,
          },
          alignH: {
            type: 'AlignmentJustifyContent',
            default: undefined,
          },
          alignV: {
            type: 'AlignmentVertical',
            default: undefined,
          },
          cols: {
            type: 'ColsNumbers',
            default: undefined,
          },
          colsLg: {
            type: 'ColsNumbers',
            default: undefined,
          },
          colsMd: {
            type: 'ColsNumbers',
            default: undefined,
          },
          colsSm: {
            type: 'ColsNumbers',
            default: undefined,
          },
          colsXl: {
            type: 'ColsNumbers',
            default: undefined,
          },
          colsXxl: {
            type: 'ColsNumbers',
            default: undefined,
          },
          gutterX: {
            type: 'ColsNumbers',
            default: undefined,
          },
          gutterY: {
            type: 'ColsNumbers',
            default: undefined,
          },
          noGutters: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
        },
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BCol',
      props: {
        '': {
          alignSelf: {
            type: "AlignmentVertical | 'auto'",
            default: undefined,
          },
          col: {
            type: 'boolean',
            default: false,
          },
          cols: {
            type: "ColsNumbers | 'auto'",
            default: undefined,
          },
          offset: {
            type: 'ColsNumbers',
            default: undefined,
          },
          order: {
            type: 'ColsNumbers',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          lg: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
          },
          md: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
          },
          sm: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
          },
          xl: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
          },
          xxl: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
          },
          offsetLg: {
            type: 'ColsNumbers',
            default: undefined,
          },
          offsetMd: {
            type: 'ColsNumbers',
            default: undefined,
          },
          offsetSm: {
            type: 'ColsNumbers',
            default: undefined,
          },
          offsetXl: {
            type: 'ColsNumbers',
            default: undefined,
          },
          offsetXxl: {
            type: 'ColsNumbers',
            default: undefined,
          },
          orderLg: {
            type: 'ColsNumbers',
            default: undefined,
          },
          orderMd: {
            type: 'ColsNumbers',
            default: undefined,
          },
          orderSm: {
            type: 'ColsNumbers',
            default: undefined,
          },
          orderXL: {
            type: 'ColsNumbers',
            default: undefined,
          },
          orderXxl: {
            type: 'ColsNumbers',
            default: undefined,
          },
        },
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}

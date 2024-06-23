import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BContainer',
      props: {
        '': {
          gutterX: {
            type: 'string',
            description: 'Horizontal gutter',
          },
          gutterY: {
            type: 'string',
            description: 'Vertical gutter',
          },
          fluid: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              'When set to true, makes the row 100% wide all the time, or set to one of the Bootstrap breakpoint names for 100% width up to the breakpoint',
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
          tag: {
            type: 'string',
          },
          gutterX: {
            type: 'string',
          },
          gutterY: {
            type: 'string',
          },
          noGutters: {
            type: 'boolean',
          },
          alignV: {
            type: 'AlignmentVertical',
          },
          alignH: {
            type: 'AlignmentHorizontal',
          },
          alignContent: {
            type: 'AlignmentContent',
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
          col: {
            description: '',
            type: 'boolean',
          },
          cols: {
            description: '',
            type: 'string | number',
          },
          offset: {
            description: '',
            type: 'string | number',
          },
          order: {
            description: '',
            type: 'string | number',
          },
          alignSelf: {
            description: '',
            type: "AlignmentVertical | 'auto'",
          },
          tag: {
            description: '',
            type: 'string',
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

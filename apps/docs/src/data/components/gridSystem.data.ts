import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BContainer',
      props: [
        {
          prop: 'gutterX',
          type: 'string',
          description: 'Horizontal gutter',
        },
        {
          prop: 'gutterY',
          type: 'string',
          description: 'Vertical gutter',
        },
        {
          prop: 'fluid',
          type: 'Booleanish | Breakpoint',
          default: false,
          description:
            'When set to true, makes the row 100% wide all the time, or set to one of the Bootstrap breakpoint names for 100% width up to the breakpoint',
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
          description: 'Specify the HTML tag to render instead of the default tag',
        },
      ],
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
      props: [
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'gutterX',
          type: 'string',
        },
        {
          prop: 'gutterY',
          type: 'string',
        },
        {
          prop: 'noGutters',
          type: 'Booleanish',
        },
        {
          prop: 'alignV',
          type: 'AlignmentVertical',
        },
        {
          prop: 'alignH',
          type: 'AlignmentHorizontal',
        },
        {
          prop: 'alignContent',
          type: 'AlignmentContent',
        },
      ],
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
      props: [
        {
          description: '',
          prop: 'col',
          type: 'Booleanish',
        },
        {
          description: '',
          prop: 'cols',
          type: 'string | number',
        },
        {
          description: '',
          prop: 'offset',
          type: 'string | number',
        },
        {
          description: '',
          prop: 'order',
          type: 'string | number',
        },
        {
          description: '',
          prop: 'alignSelf',
          type: "AlignmentVertical | 'auto'",
        },
        {
          description: '',
          prop: 'tag',
          type: 'string',
        },
      ],
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

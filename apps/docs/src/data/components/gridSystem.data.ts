import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BContainer',
      props: [
        {
          prop: 'gutterX',
          type: 'string',
        },
        {
          prop: 'gutterY',
          type: 'string',
        },
        {
          prop: 'fluid',
          type: 'boolean | Breakpoint',
        },
        {
          prop: 'toast',
          type: 'Record<string, unknown>',
        },
        {
          prop: 'position',
          type: 'Position',
        },
        {
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

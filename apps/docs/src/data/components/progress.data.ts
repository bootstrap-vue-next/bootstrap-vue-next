import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BProgress',
      props: [
        {
          prop: 'height',
          type: 'string',
          default: undefined,
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
      component: 'BProgressBar',
      props: [
        {
          prop: 'animated',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'label',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'labelHtml',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'max',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'precision',
          type: 'string | number',
          default: 0,
        },
        {
          prop: 'showProgress',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'showValue',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'striped',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'value',
          type: 'string | number',
          default: 0,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
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

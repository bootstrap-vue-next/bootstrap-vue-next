import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BProgress',
      props: [
        {
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          prop: 'max',
          type: 'number | string',
        },
        {
          prop: 'height',
          type: 'string',
        },
        {
          prop: 'animated',
          type: 'Booleanish',
        },
        {
          prop: 'precision',
          type: 'number | string',
        },
        {
          prop: 'showProgress',
          type: 'Booleanish',
        },
        {
          prop: 'showValue',
          type: 'Booleanish',
        },
        {
          prop: 'striped',
          type: 'Booleanish',
        },
        {
          prop: 'value',
          type: 'number | string',
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
          type: 'Booleanish',
        },
        {
          prop: 'label',
          type: 'string',
        },
        {
          prop: 'labelHtml',
          type: 'string',
        },
        {
          prop: 'max',
          type: 'number | string',
        },
        {
          prop: 'precision',
          type: 'number | string',
        },
        {
          prop: 'showProgress',
          type: 'Booleanish',
        },
        {
          prop: 'showValue',
          type: 'Booleanish',
        },
        {
          prop: 'striped',
          type: 'Booleanish',
        },
        {
          prop: 'value',
          type: 'number | string',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
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

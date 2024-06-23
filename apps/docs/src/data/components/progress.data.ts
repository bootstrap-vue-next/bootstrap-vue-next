import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BProgress',
      props: {
        '': {
          height: {
            type: 'string',
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
    {
      component: 'BProgressBar',
      props: {
        '': {
          animated: {
            type: 'boolean',
            default: false,
          },
          label: {
            type: 'string',
            default: undefined,
          },
          labelHtml: {
            type: 'string',
            default: undefined,
          },
          max: {
            type: 'string | number',
            default: undefined,
          },
          precision: {
            type: 'string | number',
            default: 0,
          },
          showProgress: {
            type: 'boolean',
            default: false,
          },
          showValue: {
            type: 'boolean',
            default: false,
          },
          striped: {
            type: 'boolean',
            default: false,
          },
          value: {
            type: 'string | number',
            default: 0,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
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

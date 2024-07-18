import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BProgress',
      props: {
        '': {
          animated: {
            type: 'boolean',
            default: undefined,
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          height: {
            type: 'string',
            default: undefined,
          },
          max: {
            type: 'Numberish',
            default: 100,
          },
          precision: {
            type: 'Numberish',
            default: undefined,
          },
          showProgress: {
            type: 'boolean',
            default: undefined,
          },
          showValue: {
            type: 'boolean',
            default: undefined,
          },
          striped: {
            type: 'boolean',
            default: undefined,
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          value: {
            type: 'Numberish',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
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
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
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
            type: 'Numberish',
            default: undefined,
          },
          precision: {
            type: 'Numberish',
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
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          value: {
            type: 'Numberish',
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

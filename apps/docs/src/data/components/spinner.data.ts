import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BSpinner',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
          },
          role: {
            type: 'string',
            default: 'status',
          },
          small: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'span',
          },
          type: {
            type: 'SpinnerType',
            default: 'border',
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
          name: 'label',
          scope: [],
        },
      ],
    },
  ],
}

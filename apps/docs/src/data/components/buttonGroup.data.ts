import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonGroup',
      props: {
        '': {
          ariaLabel: {
            type: 'string',
            default: 'Group',
          },
          size: {
            type: 'Size',
            default: 'md',
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          vertical: {
            type: 'boolean',
            default: false,
          },
        } satisfies Record<keyof BvnComponentProps['BButtonGroup'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
      emits: [],
    },
  ],
}

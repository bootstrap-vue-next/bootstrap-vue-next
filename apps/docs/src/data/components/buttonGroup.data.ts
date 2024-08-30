import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonGroup',
      props: {
        '': {
          vertical: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the button group in vertical mode',
          },
          ...pick(buildCommonProps(), ['ariaLabel', 'size', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BButtonGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content (buttons) to place in the button group',
        },
      ],
      emits: [],
    },
  ],
}

import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      props: {
        '': {
          justify: {
            type: 'boolean',
            default: false,
            description:
              'Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns',
          },
          ...pick(buildCommonProps(), ['ariaLabel', 'role']),
        } satisfies Record<keyof BvnComponentProps['BButtonToolbar'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the button toolbar',
        },
      ],
      emits: [],
    },
  ],
}

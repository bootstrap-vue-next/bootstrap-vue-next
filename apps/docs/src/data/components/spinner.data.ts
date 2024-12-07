import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BSpinner',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.spinner-*'},
      sourcePath: '/BSpinner/BSpinner.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the sr-only label',
          },
          small: {
            type: 'boolean',
            default: false,
            description: 'When set, rendered a smaller spinner suitable for placing in buttons',
          },
          type: {
            type: 'SpinnerType',
            default: 'border',
            description: "Type of spinner to show. Current supported types are 'border' and 'grow'",
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'span',
              },
            }),
            ['role', 'tag', 'variant']
          ),
        } satisfies Record<keyof BvnComponentProps['BSpinner'], PropertyReference>,
      },
      slots: [
        {
          name: 'label',
          description: 'Content to place in the visually-hidden label',
        },
      ],
    },
  ],
}

import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-toolbar'},
      sourcePath: '/BButton/BButtonToolbar.vue',
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
    },
  ],
}

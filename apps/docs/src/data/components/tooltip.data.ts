import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {popoverSharedEmits, popoverSharedProps, showHideEmits, showHideSlotsData} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTooltip',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      sourcePath: '/BTooltip/BTooltip.vue',
      props: {
        '': {
          ...popoverSharedProps('tooltip'),
          interactive: {
            type: 'boolean',
            default: false,
            description: 'Allow user interaction with the tooltip content.',
          },
        } satisfies Record<keyof BvnComponentProps['BTooltip'], PropertyReference>,
      },
      emits: [...showHideEmits, ...popoverSharedEmits('tooltip')],
      slots: [
        {
          name: 'title',
          description: 'Slot for tooltip content',
          scope: showHideSlotsData,
        },
        {
          name: 'default',
          description: 'Slot for tooltip content (title slot takes precedence)',
          scope: showHideSlotsData,
        },
        {
          name: 'target',
          description: 'Slot for target/trigger element',
          scope: showHideSlotsData,
        },
      ],
    },
  ],
}

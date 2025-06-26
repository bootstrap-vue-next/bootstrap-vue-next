import {type ComponentReference, StyleKind} from '../../types'
import {popoverSharedEmits, popoverSharedProps, showHideEmits, showHideSlotsData} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      sourcePath: '/BPopover/BPopover.vue',
      props: {
        '': popoverSharedProps('popover'),
      },
      emits: [...showHideEmits, ...popoverSharedEmits('popover')],
      slots: [
        {
          name: 'title',
          description: 'Slot for title content',
          scope: showHideSlotsData,
        },
        {
          name: 'default',
          description: 'Slot for body content',
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

import {type ComponentReference, StyleKind} from '../../types'
import {linkProps} from '../../utils'
export default {
  load: (): ComponentReference[] => [
    {
      component: 'BLink',
      styleSpec: {kind: StyleKind.Tag, value: 'a, router-link'},
      sourcePath: '/BLink/BLink.vue',
      props: {
        '': linkProps,
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when link was clicked',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Native click event',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the link',
        },
      ],
    },
  ],
}

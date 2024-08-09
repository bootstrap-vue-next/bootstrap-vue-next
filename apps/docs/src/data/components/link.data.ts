import type {ComponentReference} from '../../types'
import {linkProps} from '../../utils'
export default {
  load: (): ComponentReference[] => [
    {
      component: 'BLink',
      props: {
        '': linkProps,
      },
      emits: [
        {
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: '',
          event: 'click',
        },
      ],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}

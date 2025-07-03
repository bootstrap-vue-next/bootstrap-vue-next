import {linkProps} from '../../utils/linkProps'
import {type ComponentReference, StyleKind} from '../../types'

export default {
  load: (): ComponentReference => ({
    BLink: {
      styleSpec: {kind: StyleKind.Tag, value: 'a, router-link'},
      sourcePath: '/BLink/BLink.vue',
      props: linkProps,
      emits: {
        click: {
          description: 'Emitted when link was clicked', // TODO grammar check (should say "the link is clicked" instead of "link was clicked" for consistency)
          args: {
            value: {
              type: 'MouseEvent',
              description: 'Native click event',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the link',
        },
      },
    },
  }),
}

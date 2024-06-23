import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBadge',
      props: {
        '': {
          pill: {
            type: 'boolean',
            default: false,
            description: "When set to 'true', renders the badge in pill style",
          },
          tag: {
            type: 'string',
            default: 'span',
            description: 'Specify the HTML tag to render instead of the default tag',
          },
          textIndicator: {
            type: 'boolean',
            default: false,
            description: 'Indication position applied',
          },
          dotIndicator: {
            type: 'boolean',
            default: false,
            description: 'Indication position and dot styling applied',
          },
        },
      },
      emits: [],
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

import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBadge',
      props: [
        {
          prop: 'pill',
          type: 'Booleanish',
          default: false,
          description: "When set to 'true', renders the badge in pill style",
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'span',
          description: 'Specify the HTML tag to render instead of the default tag',
        },
        {
          prop: 'textIndicator',
          type: 'Booleanish',
          default: false,
          description: 'Indication position applied',
        },
        {
          prop: 'dotIndicator',
          type: 'Booleanish',
          default: false,
          description: 'Indication position and dot styling applied',
        },
      ],
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

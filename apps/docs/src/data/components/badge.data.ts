import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBadge',
      props: [
        {
          prop: 'dotIndicator',
          description: 'Indication position and dot styling applied',
          type: 'Booleanish',
        },
        {
          prop: 'textIndicator',
          description: 'Indication position applied',
          type: 'Booleanish',
        },
        {
          prop: 'pill',
          description: "When set to 'true', renders the badge in pill style",
          type: 'Booleanish',
        },
        {
          prop: 'variant',
          description: 'Applies one of the Bootstrap theme color variants to the component',
          type: 'ColorVariant',
        },
        {
          prop: 'tag',
          description: 'Specify the HTML tag to render instead of the default tag',
          type: 'string',
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

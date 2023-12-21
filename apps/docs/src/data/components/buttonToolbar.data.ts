import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: 'Group',
          description: `Sets the ARIA attribute 'label' to a specific value`,
        },
        {
          prop: 'justify',
          type: 'Booleanish',
          default: false,
          description: `Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns`,
        },
        {
          prop: 'role',
          type: 'string',
          default: 'toolbar',
          description: `Sets the ARIA attribute 'role' to a specific value`,
        },
      ],
      slots: [
        {
          description: `Content to place in the button toolbar`,
          name: 'default',
          scope: [],
        },
      ],
      emits: [],
    },
  ],
}

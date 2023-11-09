import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonGroup',
      props: [
        {
          prop: 'ariaLabel',
          type: 'string',
          default: 'Group',
          description: `Sets the ARIA attribute 'role' to a specific value`,
        },
        {
          prop: 'size',
          type: 'Size',
          default: 'md',
          description: `Set the size of the component's appearance`,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
          description: `Specify the HTML tag to render instead of the default tag`,
        },
        {
          prop: 'vertical',
          type: 'Booleanish',
          default: false,
          description: `When set, rendered the button group in vertical mode`,
        },
      ],
      slots: [
        {
          description: 'Content (buttons) to place in the button group',
          name: 'default',
          scope: [],
        },
      ],
      emits: [],
    },
  ],
}

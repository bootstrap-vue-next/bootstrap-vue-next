import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAccordion',
      props: [
        {
          prop: 'flush',
          type: 'Booleanish',
          description:
            'remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container',
        },
        {
          prop: 'free',
          type: 'Booleanish',
          description: 'accordion items stay open when another item is opened',
        },
        {
          prop: 'id',
          type: 'string',
          description:
            'The Id to be injected to accordian items and used to in b-collaspe for state managment',
        },
      ],
      emits: [],
      slots: [
        {
          scope: [],
          name: 'default',
          description: 'Content to place in the Accordion',
        },
      ],
    },
    {
      component: 'BAccordionItem',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'title',
          type: 'string',
        },
        {
          prop: 'visible',
          type: 'Booleanish',
        },
      ],
      emits: [],
      slots: [],
    },
  ],
}

import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAccordion',
      props: [
        {
          prop: 'flush',
          type: 'Booleanish',
          default: false,
          description:
            'Remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container',
        },
        {
          prop: 'free',
          type: 'Booleanish',
          default: false,
          description: 'Accordion items will stay open when another item is opened',
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
          description:
            'The Id to be injected to accordion items and used to in BCollapse for state managment',
        },
        {
          prop: 'modelValue',
          type: 'string',
          default: undefined,
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
          default: undefined,
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'headerTag',
          type: 'string',
          default: 'h2',
        },
        {
          prop: 'tag',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'toggle',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'horizontal',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'visible',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'isNav',
          type: 'Booleanish',
          default: undefined,
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
          default: undefined,
          description: 'Class to be applied to the header element',
        },
        {
          prop: 'buttonClass',
          type: 'ClassValue',
          default: undefined,
          description: 'Class to be applied to the button in header',
        },
        {
          prop: 'collapseClass',
          type: 'ClassValue',
          default: undefined,
          description: 'Class to be applied to the collapse',
        },
        {
          prop: 'bodyClass',
          type: 'ClassValue',
          default: undefined,
          description: 'Class to be applied to the body of the accordion item',
        },
      ],
      emits: [],
      slots: [],
    },
  ],
}

import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAccordion',
      props: {
        '': {
          flush: {
            type: 'boolean',
            default: false,
            description:
              'Remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container',
          },
          free: {
            type: 'boolean',
            default: false,
            description: 'Accordion items will stay open when another item is opened',
          },
          modelValue: {
            type: 'string',
            default: undefined,
          },
          ...pick(
            buildCommonProps({
              id: {
                description:
                  'The Id to be injected to accordion items and used to in BCollapse for state managment',
              },
            }),
            ['id']
          ),
        },
      },
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
      props: {
        '': {
          id: {
            type: 'string',
            default: undefined,
          },
          title: {
            type: 'string',
            default: undefined,
          },
          modelValue: {
            type: 'boolean',
            default: false,
          },
          headerTag: {
            type: 'string',
            default: 'h2',
          },
          tag: {
            type: 'string',
            default: undefined,
          },
          toggle: {
            type: 'boolean',
            default: undefined,
          },
          horizontal: {
            type: 'boolean',
            default: undefined,
          },
          visible: {
            type: 'boolean',
            default: false,
          },
          isNav: {
            type: 'boolean',
            default: undefined,
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the header element',
          },
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the button in header',
          },
          collapseClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the collapse',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class to be applied to the body of the accordion item',
          },
        },
      },
      emits: [],
      slots: [
        {
          scope: [],
          name: 'default',
          description: 'Content to place in the AccordionItem',
        },
        {
          scope: [],
          name: 'title',
          description: 'Content to place in the header of the AccordionItem',
        },
      ],
    },
  ],
}

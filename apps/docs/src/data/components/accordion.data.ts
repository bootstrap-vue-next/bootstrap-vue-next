import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from 'src/types'
import {buildCommonProps} from '../../utils/commonProps'
import {pick} from '../../utils/objectUtils'
import {showHideProps} from '../../utils/showHideData'

export default {
  load: (): ComponentReference => ({
    BAccordion: {
      sourcePath: '/BAccordion/BAccordion.vue',
      props: {
        ...pick(showHideProps, ['initialAnimation', 'lazy', 'unmountLazy']), // Restored spread
        ...pick(
          buildCommonProps({
            id: {
              description:
                'The Id to be injected to accordion items and used in BCollapse for state managment', // TODO grammar check (typo: "managment" should be "management")
            },
          }),
          ['id']
        ),
        flush: {
          type: 'boolean',
          default: false,
          description:
            'Remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container', // TODO grammar check (consider rephrasing for clarity, e.g., "Removes the default background color, certain borders, and rounded corners to render accordions edge-to-edge with their parent container")
        },
        free: {
          type: 'boolean',
          default: false,
          description: 'Accordion items will stay open when another item is opened',
        },
        index: {
          type: 'number | number[]',
          default: undefined,
          description: 'Index of the accordion item that is open',
        },
        modelValue: {
          type: 'string | string[]',
          default: undefined,
          description: 'Id of the accordion item that is open',
        },
      } satisfies Record<keyof BvnComponentProps['BAccordion'], PropertyReference>,
      emits: {
        'update:model-value': {
          description: 'Update the currently opened accordion item',
          args: {
            value: {
              description: 'Id of the accordion item that is open',
              type: 'string | string[]',
            },
          },
        },
        'update:index': {
          description: 'Update the index of the accordion item that is open',
          args: {
            value: {
              description: 'Index of the accordion item that is open',
              type: 'number | number[]',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the Accordion',
        },
      },
    },
    BAccordionItem: {
      sourcePath: '/BAccordion/BAccordionItem.vue',
      props: {
        ...pick(showHideProps, ['modelValue', 'lazy', 'show', 'unmountLazy', 'visible']), // Restored spread
        ...pick(
          buildCommonProps({
            id: {
              description:
                'The Id to be injected to accordion items and used to in BCollapse for state managment', // TODO grammar check (typo: "managment" should be "management"; remove "to" before "in BCollapse")
            },
          }),
          ['id', 'tag', 'wrapperAttrs']
        ),
        bodyAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
          description: 'Attributes to be applied to the body of the accordion item',
        },
        bodyClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class to be applied to the body of the accordion item',
        },
        buttonAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
          description: 'Attributes to be applied to the button in header',
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
        headerAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
          description: 'Attributes to be applied to the header element',
        },
        headerClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class to be applied to the header element',
        },
        headerTag: {
          type: 'string',
          default: 'h2',
          description: 'Tag to be used for the header element',
        },
        horizontal: {
          type: 'boolean',
          default: undefined, // TODO item not in string format
          description:
            'Transition the `width` instead of `height` and set a `width` on the immediate child element',
        },
        isNav: {
          type: 'boolean',
          default: undefined, // TODO item not in string format
          description:
            'When set, signifies that the accordion is part of a navbar, enabling certain features for navbar support',
        },
        title: {
          type: 'string',
          default: undefined,
          description:
            'Text to place in the header of the AccordionItem (title slot takes precedence)',
        },
      } satisfies Record<keyof BvnComponentProps['BAccordionItem'], PropertyReference>,
      emits: {
        'hidden': {
          description: 'Emitted when AccordionItem has finished closing',
        },
        'hide': {
          description: 'Emitted when AccordionItem has started to close',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'Native triggerable event',
            },
          },
        },
        'hide-prevented': {
          description:
            'Emitted when the AccordionItem tried to close, but was prevented from doing so', // TODO grammar check (remove trailing period)
        },
        'show': {
          description: 'Emitted when AccordionItem has started to show',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'Native triggerable event',
            },
          },
        },
        'shown': {
          description: 'Emitted when AccordionItem has finished showing',
        },
        'show-prevented': {
          description:
            'Emitted when the AccordionItem tried to open, but was prevented from doing so', // TODO grammar check (remove trailing period)
        },
        'update:model-value': {
          description: 'Emitted when the visibility of the AccordionItem is changed',
          args: {
            value: {
              type: 'boolean',
              description: 'Current visibility state of the AccordionItem',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the AccordionItem',
        },
        title: {
          description: 'Content to place in the header of the AccordionItem',
        },
      },
    },
  }),
}

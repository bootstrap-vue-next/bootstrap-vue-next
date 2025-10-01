import type {
  BAccordionItemEmits,
  BAccordionItemProps,
  BAccordionItemSlots,
  BAccordionProps,
  BAccordionSlots,
} from 'bootstrap-vue-next'
import type {ComponentReference, EmitRecord, PropRecord, SlotRecord} from 'src/types'
import {buildCommonProps} from '../../utils/commonProps'
import {pick} from '../../utils/objectUtils'
import {showHideEmits, showHideProps} from '../../utils/showHideData'

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
                'The Id to be injected to accordion items and used in BCollapse for state management',
            },
          }),
          ['id']
        ),
        flush: {
          type: 'boolean',
          default: false,
          description:
            'Removes the default background color, certain borders, and rounded corners to render accordions edge-to-edge with their parent container',
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
      } satisfies PropRecord<keyof BAccordionProps>,
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
      } satisfies SlotRecord<keyof BAccordionSlots>,
    },
    BAccordionItem: {
      sourcePath: '/BAccordion/BAccordionItem.vue',
      props: {
        ...pick(showHideProps, ['modelValue', 'lazy', 'show', 'unmountLazy', 'visible']), // Restored spread
        ...pick(
          buildCommonProps({
            id: {
              description:
                'The Id to be injected to accordion items and used in BCollapse for state management',
            },
          }),
          ['bodyAttrs', 'bodyClass', 'id', 'tag', 'wrapperAttrs']
        ),
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
          default: undefined,
          description:
            'Transition the `width` instead of `height` and set a `width` on the immediate child element',
        },
        isNav: {
          type: 'boolean',
          default: undefined,
          description:
            'When set, signifies that the accordion is part of a navbar, enabling certain features for navbar support',
        },
        title: {
          type: 'string',
          default: undefined,
          description:
            'Text to place in the header of the AccordionItem (title slot takes precedence)',
        },
      } satisfies PropRecord<keyof BAccordionItemProps>,
      emits: {
        ...showHideEmits,
        'update:model-value': {
          description: 'Emitted when the visibility of the AccordionItem is changed',
          args: {
            value: {
              type: 'boolean',
              description: 'Current visibility state of the AccordionItem',
            },
          },
        },
        'cancel': {
          args: undefined,
          description: undefined,
        },
        'ok': {
          args: undefined,
          description: undefined,
        },
      } satisfies EmitRecord<keyof BAccordionItemEmits | 'update:model-value'>,
      slots: {
        default: {
          description: 'Content to place in the AccordionItem',
        },
        title: {
          description: 'Content to place in the header of the AccordionItem',
        },
      } satisfies SlotRecord<keyof BAccordionItemSlots>,
    },
  }),
}

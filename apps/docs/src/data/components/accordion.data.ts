import type {
  BAccordionItemEmits,
  BAccordionItemProps,
  BAccordionItemSlots,
  BAccordionProps,
  BAccordionSlots,
} from 'bootstrap-vue-next'
import type { ComponentReference, EmitRecord, PropRecord, SlotRecord } from '../../types'

export default {
  load: (): ComponentReference => ({
    BAccordion: {
      props: {
        flush: {
          type: 'boolean',
          default: false,
          description: 'Removes selected borders and rounded corners.',
        },
        gap: {
          type: 'boolean',
          default: false,
          description: 'Applies the Bootstrap .accordion-gap class.',
        },
        id: {
          type: 'string',
          default: 'generated',
          description: 'HTML id for the accordion wrapper.',
        },
        independent: {
          type: 'boolean',
          default: false,
          description:
            'Omits the native details name so multiple items can remain open; modelValue is an array of open item ids.',
        },
        modelValue: {
          type: 'string | string[] | undefined',
          default: undefined,
          description:
            'Open item id in exclusive mode, or open item ids in independent mode. Undefined means no items are open.',
        },
        name: {
          type: 'string',
          default: 'generated',
          description:
            'Native details group name. Generated per accordion when omitted; ignored in independent mode.',
        },
        size: {
          type: "'sm'",
          default: undefined,
          description: 'Applies .accordion-sm when set to "sm".',
        },
        theme: {
          type: 'string',
          default: undefined,
          description: 'Adds the contextual .theme-{theme} class to the accordion.',
        },
      } satisfies PropRecord<keyof BAccordionProps>,
      emits: {
        'update:model-value': {
          description: 'Emitted when the open item id or ids change.',
          args: {
            value: {
              description: 'The open item id, ids, or undefined when all items are closed.',
              type: 'string | string[] | undefined',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Accordion items.',
        },
      } satisfies SlotRecord<keyof BAccordionSlots>,
    },
    BAccordionItem: {
      props: {
        bodyAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
          description: 'Attributes forwarded to .accordion-body.',
        },
        bodyClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Classes applied to .accordion-body.',
        },
        id: {
          type: 'string',
          default: 'generated',
          description: 'HTML id for the details element and identifier used by the root model.',
        },
        name: {
          type: 'string',
          default: 'inherited',
          description: 'Native details group name override; otherwise inherited from BAccordion.',
        },
        open: {
          type: 'boolean',
          default: false,
          description: 'Controls the native details open state; supports v-model:open.',
        },
        summaryAttrs: {
          type: 'Readonly<AttrsValue>',
          default: undefined,
          description: 'Attributes forwarded to the summary header.',
        },
        summaryClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Classes applied to the summary header.',
        },
        title: {
          type: 'string',
          default: undefined,
          description: 'Text displayed in the summary when the title slot is not used.',
        },
      } satisfies PropRecord<keyof BAccordionItemProps>,
      emits: {
        'update:open': {
          description: 'Emitted when the native details open state changes.',
          args: {
            value: { type: 'boolean', description: 'Whether the item is open.' },
          },
        },
        toggle: {
          description: 'Native details toggle event.',
          args: {
            event: { type: 'Event', description: 'The native toggle event.' },
          },
        },
      } satisfies EmitRecord<keyof BAccordionItemEmits>,
      slots: {
        default: {
          description: 'Accordion body content.',
        },
        title: {
          description: 'Custom summary header content.',
        },
        icon: {
          description: 'Custom icon content; defaults to the Bootstrap accordion SVG icon.',
        },
      } satisfies SlotRecord<keyof BAccordionItemSlots>,
    },
  }),
}

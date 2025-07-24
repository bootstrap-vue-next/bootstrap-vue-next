import type {BCollapseEmits, BCollapseSlots, BvnComponentProps} from 'bootstrap-vue-next'
import type {
  ComponentReference,
  EmitReference,
  PropertyReference,
  SlotScopeReference,
  SlotsReference,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {showHideProps} from '../../utils/showHideData'
import {buildCommonProps} from '../../utils/commonProps'

const sharedSlotsScope: SlotScopeReference = {
  hide: {
    type: '() => void',
    description: "Hides the collapse and fires the 'hide' event",
  },
  id: {
    type: 'string',
    description: 'The id of the collapse element',
  },
  show: {
    type: '() => void',
    description: "Shows the collapse and fires the 'show' event",
  },
  toggle: {
    type: '() => void',
    description: "Toggles the collapse and fires the 'hide' or 'show' event, as appropriate",
  },
  visible: {
    type: '() => void',
    description: 'Visible state of the collapse. `true` if the collapse is visible',
  },
} as const

export default {
  load: (): ComponentReference => ({
    BCollapse: {
      sourcePath: '/BCollapse/BCollapse.vue',
      props: {
        ...showHideProps,
        ...pick(buildCommonProps(), ['id', 'tag']),
        horizontal: {
          type: 'boolean',
          default: false, // TODO item not in string format
          // description: 'When set, collapses horizontally instead of vertically' // TODO missing description
        },
        isNav: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When set, signifies that the collapse is part of a navbar, enabling certain features for navbar support',
        },
      } satisfies Record<keyof BvnComponentProps['BCollapse'], PropertyReference>,
      emits: {
        'update:model-value': {
          description: 'Used to update the v-model', // TODO similar content to BAlert/update:model-value (similar description)
          args: {
            value: {
              type: 'boolean',
              description: 'Will be true if the collapse is visible',
            },
          },
        },
        'hide': {
          description: 'Emitted when collapse has started to close',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          },
        },
        'hidden': {
          description: 'Emitted when collapse has finished closing',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          },
        },
        'hide-prevented': {
          description: 'Emitted when the Collapse tried to close, but was prevented from doing so.', // TODO grammar check (remove capital "Collapse")
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          },
        },
        'show': {
          description: 'Emitted when collapse has started to open',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          },
        },
        'shown': {
          description: 'Emitted when collapse has finished opening',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          },
        },
        'show-prevented': {
          description: 'Emitted when the Collapse tried to open, but was prevented from doing so.', // TODO grammar check (remove capital "Collapse")
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          },
        },
        'toggle': {
          description: 'Emitted when collapse has started to toggle',
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          },
        },
      } satisfies Record<keyof BCollapseEmits | 'update:model-value', EmitReference>,
      slots: {
        default: {
          description: 'The content shown and hidden by the collapse',
          scope: sharedSlotsScope,
        },
        footer: {
          description:
            'Used to create custom toggles for your collapsible content. Placed directly below the content',
          scope: sharedSlotsScope,
        },
        header: {
          description:
            'Used to create custom toggles for your collapsible content. Placed directly above the content',
          scope: sharedSlotsScope,
        },
      } satisfies Record<keyof BCollapseSlots, SlotsReference>,
    },
  }),
}

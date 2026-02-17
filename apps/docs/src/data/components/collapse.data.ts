import type {BCollapseEmits, BCollapseProps, BCollapseSlots} from 'bootstrap-vue-next'
import type {
  ComponentReference,
  EmitRecord,
  ExposedRecord,
  PropRecord,
  SlotRecord,
  SlotScopeReference,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {showHideEmits, showHideProps} from '../../utils/showHideData'
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
      } satisfies PropRecord<keyof BCollapseProps>,
      emits: {
        ...showHideEmits,
        'update:model-value': {
          description: 'Used to update the v-model', // TODO similar content to BAlert/update:model-value (similar description)
          args: {
            value: {
              type: 'boolean',
              description: 'Will be true if the collapse is visible',
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
      } satisfies EmitRecord<keyof BCollapseEmits | 'update:model-value'>,
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
      } satisfies SlotRecord<keyof BCollapseSlots>,
      exposed: {
        show: {
          type: '() => void',
          description: 'Shows the collapse',
        },
        hide: {
          type: '() => void',
          description: 'Hides the collapse',
        },
        toggle: {
          type: '() => void',
          description: 'Toggles the visibility of the collapse',
        },
      } satisfies ExposedRecord,
    },
  }),
}

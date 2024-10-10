import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference, SlotScopeReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

const sharedSlots: SlotScopeReference[] = [
  {
    prop: 'hide',
    type: '() => void',
    description: "Hides the collapse and fires the 'hide' event",
  },
  {
    prop: 'id',
    type: 'string',
    description: 'The id of the collapse element',
  },
  {
    prop: 'show',
    type: '() => void',
    description: "Shows the collapse and fires the 'show' event",
  },
  {
    prop: 'toggle',
    type: '() => void',
    description: "Toggles the collapse and fires the 'hide' or 'show' event, as appropriate",
  },
  {
    prop: 'visible',
    type: '() => void',
    description: 'Visible state of the collapse. `true` if the collapse is visible',
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCollapse',
      sourcePath: '/BCollapse/BCollapse.vue',
      props: {
        '': {
          horizontal: {
            type: 'boolean',
            default: false,
          },
          isNav: {
            type: 'boolean',
            default: false,
            description:
              'When set, signifies that the collapse is part of a navbar, enabling certain features for navbar support',
          },
          modelValue: {
            type: 'boolean',
            default: false,
            description: 'Controls the visibility of the collapse',
          },
          skipAnimation: {
            type: 'boolean',
            default: false,
            description: 'When set, disables the animation',
          },
          toggle: {
            type: 'boolean',
            default: false,
            description:
              "When set, and prop 'visible' is false on mount, will animate from closed to open on initial mount",
          },
          visible: {
            type: 'boolean',
            default: false,
            description: "When 'true', expands the collapse",
          },
          ...pick(buildCommonProps(), ['id', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BCollapse'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Used to update the v-model',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'Will be true if the collapse is visible',
            },
          ],
        },
        {
          event: 'hide',
          description: 'Emitted when collapse has started to close',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'hidden',
          description: 'Emitted when collapse has finished closing',
          args: [],
        },
        {
          event: 'hide-prevented',
          description: 'Emitted when the Collapse tried to close, but was prevented from doing so.',
          args: [],
        },
        {
          event: 'show',
          description: 'Emitted when collapse has started to open',
          args: [],
        },
        {
          event: 'shown',
          description: 'Emitted when collapse has finished opening',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event object',
            },
          ],
        },
        {
          event: 'show-prevented',
          description: 'Emitted when the Collapse tried to open, but was prevented from doing so.',
          args: [],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'The content shown and hidden by the collapse',
          scope: sharedSlots,
        },
        {
          name: 'footer',
          description:
            'Used to create custom toggles for your collapsible content. Placed directly below the content',
          scope: sharedSlots,
        },
        {
          name: 'header',
          description:
            'Used to create custom toggles for your collapsible content. Placed directly above the content',
          scope: sharedSlots,
        },
      ],
    },
  ],
}

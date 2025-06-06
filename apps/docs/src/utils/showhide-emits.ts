import type {ComponentReference} from '../types'

export const showHideEmits: Exclude<ComponentReference['emits'], undefined> = [
  {
    event: 'hide',
    description:
      "Always emits just before the component has hidden. Cancelable (as long as component wasn't forcibly hidden)",
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel hide',
      },
    ],
  },
  {
    event: 'hide-prevented',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description:
      'Emitted when the component tried to close, but was prevented from closing.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
  {
    event: 'hidden',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description: 'Always emits after the component is hidden',
  },
  {
    event: 'show',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel show',
      },
    ],
    description: 'Always emits just before the component is shown. Cancelable',
  },
  {
    event: 'show-prevented',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description:
      'Emitted when the component tried to open, but was prevented from opening. This occurs when preventDefault() is called on the event',
  },
  {
    event: 'shown',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description: 'Always emits just after component is shown.',
  },
  {
    event: 'toggle',
    description:
      "Always emits just before the component is toggled via the exposed 'toggle()' function or useToggle composable . Cancelable (as long as component wasn't forcibly hidden)",
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel hide',
      },
    ],
  },
  {
    event: 'toggle-prevented',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description:
      'Emitted when the component tried to toggle, but was prevented from doing so.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
]

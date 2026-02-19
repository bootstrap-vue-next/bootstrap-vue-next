import type {showHide} from 'bootstrap-vue-next'
import type {PropRecord, SlotScopeReference} from '../types'

/**
 * Shared argument definition for BvTriggerableEvent event args.
 * Use this constant wherever an emit arg has type 'BvTriggerableEvent' to ensure consistency.
 */
export const bvTriggerableEventArg = {
  type: 'BvTriggerableEvent',
  description: 'The BvTriggerableEvent object',
} as const

export const showHideEmits = {
  'cancel': {
    args: {
      value: bvTriggerableEventArg,
    },
    description: 'Emitted when a cancel action is triggered.',
  },
  'hide': {
    description:
      "Always emits just before the component has hidden. Cancelable (as long as component wasn't forcibly hidden)",
    args: {
      value: {
        ...bvTriggerableEventArg,
        description: 'Call value.preventDefault() to cancel hide',
      },
    },
  },
  'hide-prevented': {
    args: {
      value: bvTriggerableEventArg,
    },
    description:
      'Emitted when the component tried to close, but was prevented from closing.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
  'hidden': {
    args: {
      value: bvTriggerableEventArg,
    },
    description: 'Always emits after the component is hidden',
  },
  'ok': {
    args: {
      value: bvTriggerableEventArg,
    },
    description: 'Emitted when an ok action is triggered.',
  },
  'show': {
    args: {
      value: {
        ...bvTriggerableEventArg,
        description: 'Call value.preventDefault() to cancel show',
      },
    },
    description: 'Always emits just before the component is shown. Cancelable',
  },
  'show-prevented': {
    args: {
      value: bvTriggerableEventArg,
    },
    description:
      'Emitted when the component tried to open, but was prevented from opening. This occurs when preventDefault() is called on the event',
  },
  'shown': {
    args: {
      value: bvTriggerableEventArg,
    },
    description: 'Always emits just after component is shown.',
  },
  'toggle': {
    description:
      "Always emits just before the component is toggled via the exposed 'toggle()' function or useToggle composable . Cancelable (as long as component wasn't forcibly hidden)",
    args: {
      value: {
        ...bvTriggerableEventArg,
        description: 'Call value.preventDefault() to cancel hide',
      },
    },
  },
  'toggle-prevented': {
    args: {
      value: bvTriggerableEventArg,
    },
    description:
      'Emitted when the component tried to toggle, but was prevented from doing so.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
} as const

export const showHideProps = {
  initialAnimation: {
    type: 'boolean',
    default: false,
    description: 'When set, enables the initial animation on mount',
  },
  lazy: {
    type: 'boolean',
    default: false,
    description: 'When set, the content will not be mounted until opened',
  },
  modelValue: {
    type: 'boolean',
    default: false,
    description: 'Controls the visibility of the component',
  },
  noFade: {
    type: 'boolean',
    default: false,
    description: 'Alias for `noAnimation`',
  },
  noAnimation: {
    type: 'boolean',
    default: false,
    description: 'When set, disables the animation',
  },
  show: {
    type: 'boolean',
    default: false,
    description:
      "When set, and prop 'visible' is false on mount, will animate from closed to open on initial mount. Mainly to help with template show. Use model-value for reactive show/hide",
  },
  transProps: {
    type: 'TransitionProps',
    default: undefined,
    description: 'Transition properties',
  },
  unmountLazy: {
    type: 'boolean',
    default: false,
    description: 'When set and `lazy` is true, the content will be unmounted when closed',
  },
  visible: {
    type: 'boolean',
    default: false,
    description: "When 'true', open without animation",
  },
} as const satisfies PropRecord<keyof showHide | 'modelValue'>

export const showHideSlotsData = {
  id: {
    type: 'string',
    description: 'Unique ID for the component',
  },
  show: {
    type: '() => void',
    description: 'Function to show the component',
  },
  hide: {
    type: '(trigger?: string, noTriggerEmit?: boolean) => void',
    description:
      'Function to hide the component. `trigger` is the trigger that caused the hide. `noTriggerEmit` prevents the emit of the trigger event.',
  },
  toggle: {
    type: '() => void',
    description: 'Function to toggle the component visibility',
  },
  active: {
    type: 'boolean',
    description: 'Indicates if the component is active (starting show, before/after animations)',
  },
  visible: {
    type: 'boolean',
    description: 'Indicates if the component is visible (shown)',
  },
} as const satisfies SlotScopeReference

/**
 * Builds common emits for dismissible components with close and countdown functionality
 * (currently used by BAlert and BToast)
 */
export const buildDismissibleEmits = () =>
  ({
    ...showHideEmits,
    'update:model-value': {
      description: 'Emitted when the component visibility changes.',
      args: {
        value: {
          type: 'Boolean',
          description: 'The new visibility state of the component.',
        },
      },
    },
    'close': {
      description: 'Emitted when the close button is clicked.',
      args: {
        value: {
          ...bvTriggerableEventArg,
          description: 'The event object for the close button click.',
        },
      },
    },
    'close-countdown': {
      description: 'Emitted during the countdown to auto-dismiss.',
      args: {
        value: {
          type: 'number',
          description: 'The remaining time in milliseconds before auto-dismissal.',
        },
      },
    },
  }) as const

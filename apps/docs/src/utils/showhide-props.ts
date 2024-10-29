import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {PropertyReference} from '../types'

export const showHideProps = {
  initialAnimation: {
    type: 'boolean',
    default: true,
    description: 'When set, enables the initial animation on mount',
  },
  modelValue: {
    type: 'boolean',
    default: false,
    description: 'Controls the visibility of the component',
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
      "When set, and prop 'visible' is false on mount, will animate from closed to open on initial mount. Mainly to help with template show. Use modelValue for reactive show/hide",
  },
  visible: {
    type: 'boolean',
    default: false,
    description: "When 'true', open without animation",
  },
  lazy: {
    type: 'boolean',
    default: false,
    description: 'When set, the content will not be mounted until opened',
  },
  unmountLazy: {
    type: 'boolean',
    default: false,
    description: 'When set and `lazy` is true, the content will be unmounted when closed',
  },
  transProps: {
    type: 'TransitionProps',
    default: undefined,
    description: 'Transition properties',
  },
  noFade: {
    type: 'boolean',
    default: false,
    description: 'Alias for `noAnimation`',
  },
} as const satisfies Record<keyof BvnComponentProps['showHide'], PropertyReference>

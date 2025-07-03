import type {BvnComponentProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type PropertyReference,
} from '../../types'
import {omit, pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'
import {linkedBLinkSection, type linkProps} from '../../utils/linkProps'
import {showHideProps} from '../../utils/showHideData'

export default {
  load: (): ComponentReference => ({
    BToast: {
      sourcePath: '/BToast/BToast.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
          bgVariant: {
            type: 'ColorVariant | null',
            default: null, // TODO item not in string format
            description: 'Sets the background color variant for the toast.',
          },
          body: {
            type: 'string',
            default: undefined,
            description: 'Sets the text content of the toast body.',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Sets the CSS class(es) for the toast body element.',
          },
          closeClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Sets the CSS class(es) for the close button.',
          },
          closeContent: {
            type: 'string',
            default: undefined,
            description: 'Sets the text for the close button. The `close` slot takes precedence.',
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
            description: 'Sets the `aria-label` attribute for the close button.',
          },
          closeVariant: {
            type: 'string | null',
            default: null, // TODO item not in string format
            description: 'Sets the color variant for the close button.',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Sets the CSS class(es) for the toast header element.',
          },
          headerTag: {
            type: 'string',
            default: 'div',
            description: 'Specifies the HTML tag for the toast header, replacing the default tag.',
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              'Sets the `id` attribute for the toast and generates additional element IDs as needed.',
          },
          interval: {
            type: 'number | requestAnimationFrame',
            default: 'requestAnimationFrame', // TODO item not in string format
            description: 'Sets the interval for refreshing the countdown timer.',
          },
          isStatus: {
            type: 'boolean',
            default: false, // TODO item not in string format
            description:
              'Sets `aria-live="polite"` and `role="status"` when `true`; otherwise, `aria-live="assertive"` and `role="alert"`.',
          },
          modelValue: {
            type: 'boolean | number',
            default: false, // TODO item not in string format
            description:
              'Controls toast visibility (`boolean`) or sets the auto-dismiss duration in milliseconds (`number`).',
          },
          noCloseButton: {
            type: 'boolean',
            default: false, // TODO item not in string format
            description: 'Hides the close button in the toast header.',
          },
          noProgress: {
            type: 'boolean',
            default: false, // TODO item not in string format
            description: 'Hides the progress bar in the toast.',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'max' | 'value'>",
            default: undefined,
            description:
              'Configures the progress bar in the toast. No progress bar is shown if undefined.',
          },
          showOnPause: {
            type: 'boolean',
            default: true, // TODO item not in string format
            description: 'Keeps the toast visible when paused.',
          },
          solid: {
            type: 'boolean',
            default: false, // TODO item not in string format
            description: 'Renders the toast with a solid background instead of a translucent one.',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null, // TODO item not in string format
            description: 'Sets the text color variant for the toast.',
          },
          title: {
            type: 'string',
            default: undefined,
            description: 'Sets the title text for the toast.',
          },
          toastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Sets the CSS class(es) for the toast wrapper element.',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BToast'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': linkedBLinkSection,
      },
      emits: {
        'update:model-value': {
          description: 'Emitted when the toast visibility changes.', // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            value: {
              type: 'Boolean',
              description: 'The new visibility state of the toast.',
            },
          },
        },
        'destroyed': {
          description: 'Emitted when the toast is destroyed.', // TODO missing description in original
          args: {
            destroyed: {
              type: 'string',
              description: '', // TODO missing description
            },
          },
        },
        'close': {
          description: 'Emitted when the close button is clicked.', // TODO missing description in original
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'close-countdown': {
          description: 'Emitted during the countdown to auto-dismiss.', // TODO missing description in original
          args: {
            value: {
              type: 'number',
              description: '', // TODO missing description
            },
          },
        },
        'hide': {
          description: 'Emitted when the toast begins to hide.', // TODO missing description in original
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'hide-prevented': {
          description: 'Emitted when the hide action is prevented.', // TODO missing description in original
          args: {},
        },
        'hidden': {
          description: 'Emitted when the toast is fully hidden.', // TODO missing description in original
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'show': {
          description: 'Emitted when the toast begins to show.', // TODO missing description in original
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
        'show-prevented': {
          description: 'Emitted when the show action is prevented.', // TODO missing description in original
          args: {},
        },
        'shown': {
          description: 'Emitted when the toast is fully shown.', // TODO missing description in original
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: '', // TODO missing description
            },
          },
        },
      },
      slots: {},
    },
    BToastOrchestrator: {
      sourcePath: '/BToast/BToastOrchestrator.vue',
      props: {
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: 'body',
          description: 'Overrides the default teleport location for toasts.',
        },
        teleportDisabled: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Renders the toaster in its defined location, disabling teleporting.',
        },
        appendToast: {
          type: '', // TODO missing type
          default: undefined,
          description: '', // TODO missing description
        },
      } satisfies Record<keyof BvnComponentProps['BToastOrchestrator'], PropertyReference>,
      emits: {},
      slots: {},
    },
  }),
}

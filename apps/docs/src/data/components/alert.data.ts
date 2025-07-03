import type {BvnComponentProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type PropertyReference,
} from '../../types'
import {linkedBLinkSection, type linkProps} from '../../utils/linkProps'
import {showHideProps} from '../../utils/showHideData'
import {buildCommonProps} from '../../utils/commonProps'
import {omit, pick} from '../../utils/objectUtils'

export default {
  load: (): ComponentReference => ({
    BAlert: {
      sourcePath: '/BAlert/BAlert.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
          alertClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the alert wrapper element',
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
            // description: 'Background color variant for the alert' // TODO missing description
          }, // TODO prop inconsistency ColorVariant | null (matches ColorExtendables, not directly in BAlertProps, but valid via inheritance)
          body: {
            type: 'string',
            default: undefined,
            description: 'The text content of the body',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the alert body element',
          },
          closeClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Applies one or more custom classes to the close button',
          },
          closeContent: {
            type: 'string',
            default: undefined,
            description: 'Sets the text of the close button. The `close` slot takes precedence',
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
            description: 'Sets the aria-label attribute on the close button',
          },
          closeVariant: {
            type: 'string | null',
            default: null,
            description: 'Color variant for the close button', // TODO prop inconsistency string | null (BAlertProps expects ButtonVariant | null)
          },
          dismissible: {
            type: 'boolean',
            default: false,
            description: 'When set, enables the close button',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the alert header element',
          },
          headerTag: {
            type: 'string',
            default: 'div',
            description: 'Specify the HTML tag to render instead of the default tag for the footer', // TODO grammar check (should refer to "header" instead of "footer")
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
          },
          interval: {
            type: 'number | requestAnimationFrame',
            default: 'requestAnimationFrame',
            description: 'The interval in milliseconds to update the countdown timer',
          },
          isStatus: {
            type: 'boolean',
            default: false,
            description:
              "When set to 'true', makes the alert have attributes aria-live=polite and role=status. When 'false' aria-live will be 'assertive' and role will be 'alert'",
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Controls the visibility of the alert. A `boolean` value directly controls the visibility. A number starts the countdown timer',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'max' | 'value'>",
            default: undefined,
            description:
              'The properties to define the progress bar in the alert. No progress will be shown if left undefined',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description:
              'Setting this property to `false` will override the behavior of showing the Alert when the timer is paused',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
            // description: 'Text color variant for the alert' // TODO missing description
          }, // TODO prop inconsistency TextColorVariant | null (matches ColorExtendables, not directly in BAlertProps, but valid via inheritance)
          title: {
            type: 'string',
            default: undefined,
            description: "The alert's title text",
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BAlert'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': linkedBLinkSection,
      },
      slots: {
        default: {
          description: 'Content to place in the Alert',
        },
        close: {
          description: 'Content to place in the close button',
        },
      },
      emits: {
        'close': {
          description: 'Emitted when the alert begins its transition to close',
        },
        'closed': {
          description: 'Emitted after the alert ends its transition to close',
        },
        'close-countdown': {
          description: 'Content to place in the alert', // TODO grammar check (description is vague and possibly incorrect; should describe the countdown event)
          args: {
            closeCountdown: {
              description: 'Time remaining on the timer',
              type: 'number',
            },
          },
        },
        'update:model-value': {
          description: 'Standard event to update the v-model', // TODO similar content to BAccordion/update:model-value (similar description phrasing)
          args: {
            'update:model-value': {
              description: 'modelValue',
              type: 'boolean | number',
            },
          },
        },
      },
    },
  }),
}

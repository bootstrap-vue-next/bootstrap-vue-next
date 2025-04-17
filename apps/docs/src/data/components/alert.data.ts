import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick, showHideProps} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAlert',
      sourcePath: '/BAlert/BAlert.vue',
      props: {
        '': {
          alertClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the alert wrapper element',
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
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
            description: 'Color variant for the close button',
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
            description: 'Specify the HTML tag to render instead of the default tag for the footer',
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
          },
          title: {
            type: 'string',
            default: undefined,
            description: "The alert's title text",
          },
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BAlert'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the Alert',
        },
        {
          name: 'close',
          description: 'Content to place in the close button',
        },
      ],
      emits: [
        {
          event: 'close',
          description: 'Emitted when the alert begins its transition to close',
        },
        {
          event: 'closed',
          description: 'Emitted after the alert ends its transition to close',
        },
        {
          event: 'close-countdown',
          description: 'Content to place in the alert',
          args: [
            {
              arg: 'closeCountdown',
              description: 'Time remaining on the timer',
              type: 'number',
            },
          ],
        },
        {
          event: 'update:model-value',
          description: 'Standard event to update the v-model',
          args: [
            {
              arg: 'update:model-value',
              description: 'modelValue',
              type: 'boolean | number',
            },
          ],
        },
      ],
    },
  ],
}

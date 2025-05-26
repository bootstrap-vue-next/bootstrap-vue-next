import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick, showHideProps} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BToast',
      sourcePath: '/BToast/BToast.vue',
      props: {
        '': {
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
            description: 'CSS class (or classes) to add to the toast body element',
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
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the toast header element',
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
            description: 'The interval of which the countdown timer will refresh itself',
          },
          isStatus: {
            type: 'boolean',
            default: false,
            description:
              "When set to 'true', makes the toast have attributes aria-live=polite and role=status. When 'false' aria-live will be 'assertive' and role will be 'alert'",
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Sets if the toast is visible or the number of milliseconds that the toast will be dismissed',
          },
          noCloseButton: {
            type: 'boolean',
            default: false,
            description: 'When set, hides the close button in the toast header',
          },
          noProgress: {
            type: 'boolean',
            default: false,
            description: 'When set, hides the progress bar in the toast',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'max' | 'value'>",
            default: undefined,
            description:
              'The properties to define the progress bar in the toast. No progress will be shown if left undefined',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description: "When set, keeps the toast visible when it's paused",
          },
          solid: {
            type: 'boolean',
            default: false,
            description:
              'When set, renders the toast with a solid background rather than translucent',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          title: {
            type: 'string',
            default: undefined,
            description: "The toast's title text",
          },
          toastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the toast wrapper element',
          },
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BToast'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      slots: [],
      emits: [
        {
          event: 'update:model-value',
          description: 'Emitted when toast visibility changes',
          args: [
            {
              arg: 'value',
              type: 'Boolean',
              description: 'The resulting value that was changed',
            },
          ],
        },
        {
          args: [
            {
              arg: 'destroyed',
              description: '',
              type: 'string',
            },
          ],
          description: '',
          event: 'destroyed',
        },
        {
          event: 'close',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
        },
        {
          event: 'close-countdown',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'number',
            },
          ],
        },
        {
          event: 'hide',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
        },
        {
          event: 'hide-prevented',
          args: [],
        },
        {
          event: 'hidden',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
        },
        {
          event: 'show',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
        },
        {
          event: 'show-prevented',
          args: [],
        },
        {
          event: 'shown',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
        },
      ],
    },
    {
      component: 'BToastOrchestrator',
      sourcePath: '/BToast/BToastOrchestrator.vue',
      emits: [],
      slots: [],
      props: {
        '': {
          teleportTo: {
            description: 'Overrides the default teleport location',
            type: 'string | RendererElement | null | undefined',
            default: 'body',
          },
          teleportDisabled: {
            description: 'Renders the Toaster in the exact place it was defined',
            type: 'boolean',
            default: false,
          },
          appendToast: {},
        } satisfies Record<keyof BvnComponentProps['BToastOrchestrator'], PropertyReference>,
      },
    },
  ],
}

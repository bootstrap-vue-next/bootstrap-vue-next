import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BToast',
      props: {
        '': {
          active: {
            type: 'boolean',
            default: undefined,
          },
          activeClass: {
            type: 'string',
            default: undefined,
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
            description: 'CSS class (or classes) to add to the toast body element',
          },
          disabled: {
            type: 'boolean',
            default: undefined,
          },
          exactActiveClass: {
            type: 'string',
            default: undefined,
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
          href: {
            type: 'string',
            default: undefined,
          },
          icon: {
            type: 'boolean',
            default: undefined,
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              'Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed',
          },
          interval: {
            type: 'Numberish',
            default: '1000',
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
          noFade: {
            type: 'boolean',
            default: false,
            description:
              'When set to `true`, disables the fade animation/transition on the component',
          },
          noHoverPause: {
            type: 'boolean',
            default: false,
            description:
              'When set, disables the pausing of the auto hide delay when the mouse hovers the toast',
          },
          opacity: {
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          opacityHover: {
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'labelHtml' | 'max' | 'value'>",
            default: undefined,
            description:
              'The properties to define the progress bar in the toast. No progress will be shown if left undefined',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description: "When set, keeps the toast visible when it's paused",
          },
          rel: {
            type: 'string',
            default: undefined,
          },
          replace: {
            type: 'boolean',
            default: undefined,
          },
          routerComponentName: {
            type: 'string',
            default: undefined,
          },
          solid: {
            type: 'boolean',
            default: false,
            description:
              'When set, renders the toast with a solid background rather than translucent',
          },
          stretched: {
            type: 'boolean',
            default: false,
          },
          target: {
            type: 'LinkTarget',
            default: undefined,
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
          to: {
            type: 'RouteLocationRaw',
            default: undefined,
          },
          toastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the toast wrapper element',
          },
          transProps: {
            type: 'BTransitionProps',
            default: undefined,
            description: 'Props to pass to the BTransition wrapper',
          },
          underlineOffset: {
            type: "1 | 2 | 3 | '1' | '2' | '3'",
            default: undefined,
          },
          underlineOffsetHover: {
            type: "1 | 2 | 3 | '1' | '2' | '3'",
            default: undefined,
          },
          underlineOpacity: {
            type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          underlineOpacityHover: {
            type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          underlineVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        },
      },
      slots: [],
      emits: [
        {
          event: 'update:modelValue',
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
        },
      },
    },
  ],
}

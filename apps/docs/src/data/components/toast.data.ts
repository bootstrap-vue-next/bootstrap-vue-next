import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BToast',
      props: {
        '': {
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the toast body element',
          },
          body: {
            type: 'string',
            default: undefined,
            description: 'The text content of the body',
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
          isStatus: {
            type: 'boolean',
            default: false,
            description:
              "When set to 'true', makes the toast have attributes aria-live=polite and role=status. When 'false' aria-live will be 'assertive' and role will be 'alert'",
          },
          autoHide: {
            type: 'boolean',
            default: true,
            description: 'Used to set if the toast will be dismissed automatically',
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
          solid: {
            type: 'boolean',
            default: false,
            description:
              'When set, renders the toast with a solid background rather than translucent',
          },
          title: {
            type: 'string',
            default: undefined,
            description: "The toast's title text",
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Sets if the toast is visible or the number of milliseconds that the toast will be dismissed',
          },
          toastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the toast wrapper element',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description: "When set, keeps the toast visible when it's paused",
          },
          interval: {
            type: 'number | string',
            default: '1000',
            description: 'The interval of which the countdown timer will refresh itself',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'labelHtml' | 'max' | 'value'>",
            default: undefined,
            description:
              'The properties to define the progress bar in the toast. No toast will be shown if left undefined',
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

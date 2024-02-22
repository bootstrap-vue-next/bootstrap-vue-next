import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BToast',
      props: [
        {
          prop: 'delay',
          type: 'string | number',
          default: 5000,
        },
        {
          prop: 'bodyClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'body',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'headerTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'animation',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'isStatus',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'autoHide',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'noCloseButton',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noFade',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noHoverPause',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'solid',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: 'boolean | number',
          default: false,
        },
        {
          prop: 'toastClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'showOnPause',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'interval',
          type: 'number | string',
          default: '1000',
        },
        {
          prop: 'progressProps',
          type: "Omit<BProgressBarProps, 'label' | 'labelHtml' | 'max' | 'value'>",
          default: undefined,
        },
      ],
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
      props: [
        {
          description: 'Overrides the default teleport location',
          prop: 'teleportTo',
          type: 'string | RendererElement | null | undefined',
          default: 'body',
        },
        {
          description: 'Renders the Toaster in the exact place it was defined',
          prop: 'teleportDisabled',
          type: 'boolean',
          default: false,
        },
      ],
    },
  ],
}

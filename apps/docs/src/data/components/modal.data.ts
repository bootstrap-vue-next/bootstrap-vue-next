import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BModal',
      props: [
        {
          prop: 'bodyBgVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'bodyClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'bodyTextVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'busy',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'buttonSize',
          type: 'Size',
          default: 'md',
        },
        {
          prop: 'cancelDisabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'cancelTitle',
          type: 'string',
          default: 'Cancel',
        },
        {
          prop: 'cancelVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        {
          prop: 'centered',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'contentClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'dialogClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'footerBgVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'footerBorderVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'footerClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'footerTextVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'fullscreen',
          type: 'boolean | string',
          default: false,
        },
        {
          prop: 'headerBgVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'headerBorderVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'headerCloseClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'headerCloseLabel',
          type: 'string',
          default: 'Close',
        },
        {
          prop: 'headerCloseVariant',
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        {
          prop: 'headerTextVariant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'hideBackdrop',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'hideFooter',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'hideHeader',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'hideHeaderClose',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'modalClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noCloseOnBackdrop',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noCloseOnEsc',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noFade',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'autoFocus',
          type: 'Booleanish',
          default: true,
        },
        {
          prop: 'okDisabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'okOnly',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'okTitle',
          type: 'string',
          default: 'Ok',
        },
        {
          prop: 'okVariant',
          type: 'ButtonVariant | null',
          default: 'primary',
        },
        {
          prop: 'scrollable',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'size',
          type: "Size | 'xl'",
          default: 'md',
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'titleClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'titleSrOnly',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'titleTag',
          type: 'string',
          default: 'h5',
        },
        {
          prop: 'autoFocusButton',
          type: "'ok' | 'cancel' | 'close'",
          default: undefined,
        },
        {
          prop: 'teleportDisabled',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'teleportTo',
          type: 'string | RendererElement | null | undefined',
          default: 'body',
        },
        {
          prop: 'bodyScrolling',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'backdropVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'boolean',
            },
          ],
          description: '',
          event: 'update:modelValue',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'show',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'shown',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'hide',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'hidden',
        },
        {
          args: [],
          description: '',
          event: 'hide-prevented',
        },
        {
          args: [],
          description: '',
          event: 'show-prevented',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'ok',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'cancel',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'close',
        },
      ],
      slots: [
        {
          description: '',
          name: 'title',
          scope: [],
        },
        {
          description: '',
          name: 'header-close',
          scope: [],
        },
        {
          description: '',
          name: 'header',
          scope: [],
        },
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          description: '',
          name: 'footer',
          scope: [],
        },
        {
          description: '',
          name: 'cancel',
          scope: [],
        },
        {
          description: '',
          name: 'ok',
          scope: [],
        },
        {
          description: '',
          name: 'backdrop',
          scope: [],
        },
      ],
    },
  ],
}

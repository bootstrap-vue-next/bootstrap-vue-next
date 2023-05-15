import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BModal',
      props: [
        {
          prop: 'bodyBgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'bodyClass',
          type: 'string',
        },
        {
          prop: 'bodyTextVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'busy',
          type: 'Booleanish',
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
        },
        {
          prop: 'buttonSize',
          type: 'Size',
        },
        {
          prop: 'cancelDisabled',
          type: 'Booleanish',
        },
        {
          prop: 'cancelTitle',
          type: 'string',
        },
        {
          prop: 'cancelVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'centered',
          type: 'Booleanish',
        },
        {
          prop: 'contentClass',
          type: 'string',
        },
        {
          prop: 'dialogClass',
          type: 'string',
        },
        {
          prop: 'footerBgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'footerBorderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'footerClass',
          type: 'string',
        },
        {
          prop: 'footerTextVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'fullscreen',
          type: 'boolean | string',
        },
        {
          prop: 'headerBgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'headerBorderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'headerClass',
          type: 'string',
        },
        {
          prop: 'headerCloseLabel',
          type: 'string',
        },
        {
          prop: 'headerCloseWhite',
          type: 'Booleanish',
        },
        {
          prop: 'headerTextVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'hideBackdrop',
          type: 'Booleanish',
        },
        {
          prop: 'hideFooter',
          type: 'Booleanish',
        },
        {
          prop: 'hideHeader',
          type: 'Booleanish',
        },
        {
          prop: 'hideHeaderClose',
          type: 'Booleanish',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'modalClass',
          type: 'string',
        },
        {
          prop: 'modelValue',
          type: 'Booleanish',
        },
        {
          prop: 'noCloseOnBackdrop',
          type: 'Booleanish',
        },
        {
          prop: 'noCloseOnEsc',
          type: 'Booleanish',
        },
        {
          prop: 'noFade',
          type: 'Booleanish',
        },
        {
          prop: 'noFocus',
          type: 'Booleanish',
        },
        {
          prop: 'okDisabled',
          type: 'Booleanish',
        },
        {
          prop: 'okOnly',
          type: 'Booleanish',
        },
        {
          prop: 'okTitle',
          type: 'string',
        },
        {
          prop: 'okVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'scrollable',
          type: 'Booleanish',
        },
        {
          prop: 'show',
          type: 'Booleanish',
        },
        {
          prop: 'size',
          type: 'string',
        },
        {
          prop: 'static',
          type: 'Booleanish',
        },
        {
          prop: 'title',
          type: 'string',
        },
        {
          prop: 'titleClass',
          type: 'string',
        },
        {
          prop: 'titleSrOnly',
          type: 'Booleanish',
        },
        {
          prop: 'titleTag',
          type: 'string',
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

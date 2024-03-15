import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOffcanvas',
      props: [
        {
          prop: 'modelValue',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'bodyScrolling',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'backdrop',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'noCloseOnBackdrop',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noCloseOnEsc',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'placement',
          type: "'top' | 'bottom' | 'start' | 'end'",
          default: 'start',
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'noHeaderClose',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noHeader',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'noFocus',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'backdropVariant',
          type: 'ColorVariant | null',
          default: 'dark',
        },
        {
          prop: 'headerClass',
          type: 'string',
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
          prop: 'bodyClass',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'footerClass',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'teleportDisabled',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'teleportTo',
          type: 'string | RendererElement | null | undefined',
          default: 'body',
        },
      ],
      emits: [
        {
          event: 'update:modelValue',
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'boolean',
            },
          ],
        },
        {
          args: [],
          description: '',
          event: 'show',
        },
        {
          args: [],
          description: '',
          event: 'shown',
        },
        {
          args: [],
          description: '',
          event: 'hide',
        },
        {
          args: [],
          description: '',
          event: 'hidden',
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
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}

import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOffcanvas',
      props: [
        {
          prop: 'modelValue',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'bodyScrolling',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'backdrop',
          type: 'Booleanish',
          default: true,
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
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noHeader',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'noFocus',
          type: 'Booleanish',
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
          type: 'Booleanish',
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

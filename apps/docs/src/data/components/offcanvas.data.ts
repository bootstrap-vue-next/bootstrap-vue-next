import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOffcanvas',
      props: {
        '': {
          modelValue: {
            type: 'boolean',
            default: false,
          },
          bodyScrolling: {
            type: 'boolean',
            default: false,
          },
          backdrop: {
            type: 'boolean',
            default: true,
          },
          noCloseOnBackdrop: {
            type: 'boolean',
            default: false,
          },
          noCloseOnEsc: {
            type: 'boolean',
            default: false,
          },
          placement: {
            type: "'top' | 'bottom' | 'start' | 'end'",
            default: 'start',
          },
          title: {
            type: 'string',
            default: undefined,
          },
          noHeaderClose: {
            type: 'boolean',
            default: false,
          },
          noHeader: {
            type: 'boolean',
            default: false,
          },
          lazy: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          noFocus: {
            type: 'boolean',
            default: false,
          },
          backdropVariant: {
            type: 'ColorVariant | null',
            default: 'dark',
          },
          headerClass: {
            type: 'string',
            default: undefined,
          },
          headerCloseClass: {
            type: 'ClassValue',
            default: undefined,
          },
          headerCloseLabel: {
            type: 'string',
            default: 'Close',
          },
          headerCloseVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
          },
          bodyClass: {
            type: 'string',
            default: undefined,
          },
          footerClass: {
            type: 'string',
            default: undefined,
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
          },
          noTrap: {
            type: 'boolean',
            description: 'Disables the focus trap feature',
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: 'body',
          },
        },
      },
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

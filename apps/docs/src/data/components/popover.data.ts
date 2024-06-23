import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      props: {
        '': {
          modelValue: {
            type: 'boolean',
            default: false,
          },
          teleportTo: {
            type: 'string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined',
            default: undefined,
          },
          target: {
            type: '(() => HTMLElement | VNode) | string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null ',
            default: null,
          },
          reference: {
            type: '(() => HTMLElement | VNode) | string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null',
            default: null,
          },
          content: {
            type: 'string',
            default: undefined,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          title: {
            type: 'string',
            default: undefined,
          },
          click: {
            type: 'boolean',
            default: false,
          },
          manual: {
            type: 'boolean',
            default: false,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
          offset: {
            type: 'number | string | null',
            default: null,
          },
          customClass: {
            type: 'ClassValue',
            default: '',
          },
          placement: {
            type: 'PopoverPlacement',
            default: 'top',
          },
          strategy: {
            type: 'Strategy',
            default: 'absolute',
          },
          floatingMiddleware: {
            type: 'Middleware[]',
            default: undefined,
          },
          noFlip: {
            type: 'boolean',
            default: false,
          },
          noShift: {
            type: 'boolean',
            default: false,
          },
          noFade: {
            type: 'boolean',
            default: false,
          },
          noAutoClose: {
            type: 'boolean',
            default: false,
          },
          hide: {
            type: 'boolean',
            default: true,
          },
          realtime: {
            type: 'boolean',
            default: false,
          },
          inline: {
            type: 'boolean',
            default: false,
          },
          tooltip: {
            type: 'boolean',
            default: false,
          },
          html: {
            type: 'boolean',
            default: false,
          },
          delay: {
            type: 'number | { show: number; hide: number }',
            default: '() => {show: 100, hide: 300})',
          },
        },
      },
      emits: [
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
        {
          args: [],
          description: '',
          event: 'inserted',
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

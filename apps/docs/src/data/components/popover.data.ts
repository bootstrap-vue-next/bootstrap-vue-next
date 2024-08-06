import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      props: {
        '': {
          boundary: {
            type: 'Boundary | RootBoundary',
            default: 'clippingAncestors',
          },
          boundaryPadding: {
            type: 'Padding',
            default: undefined,
          },
          click: {
            type: 'boolean',
            default: false,
          },
          content: {
            type: 'string',
            default: undefined,
          },
          customClass: {
            type: 'ClassValue',
            default: '',
          },
          delay: {
            type: 'number | { show: number; hide: number }',
            default: '() => {show: 100, hide: 300})',
          },
          floatingMiddleware: {
            type: 'Middleware[]',
            default: undefined,
          },
          html: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          inline: {
            type: 'boolean',
            default: false,
          },
          manual: {
            type: 'boolean',
            default: false,
          },
          modelValue: {
            type: 'boolean',
            default: false,
          },
          noAutoClose: {
            type: 'boolean',
            default: false,
          },
          noFade: {
            type: 'boolean',
            default: false,
          },
          noFlip: {
            type: 'boolean',
            default: false,
          },
          noHide: {
            type: 'boolean',
            default: false,
          },
          noShift: {
            type: 'boolean',
            default: false,
          },
          noSize: {
            type: 'boolean',
            default: false,
          },
          noninteractive: {
            type: 'boolean',
            default: false,
          },
          offset: {
            type: 'Numberish | null',
            default: null,
          },
          persistent: {
            type: 'boolean',
            default: false,
          },
          placement: {
            type: 'PopoverPlacement',
            default: 'top',
          },
          realtime: {
            type: 'boolean',
            default: false,
          },
          reference: {
            type: 'string | ComponentPublicInstance | HTMLElement | null',
            default: null,
          },
          strategy: {
            type: 'Strategy',
            default: 'absolute',
          },
          target: {
            type: 'string | ComponentPublicInstance | HTMLElement | null ',
            default: null,
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: undefined,
          },
          title: {
            type: 'string',
            default: undefined,
          },
          tooltip: {
            type: 'boolean',
            default: false,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
        },
      },
      emits: [
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
          event: 'show-prevented',
          description: '',
          args: [],
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
          event: 'hide-prevented',
          description: '',
          args: [],
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
        {
          name: 'target',
          description: '',
          scope: [
            {
              prop: 'show',
              type: '() => void',
            },
            {
              prop: 'hide',
              type: '(e: Event) => void',
            },
            {
              prop: 'toggle',
              type: '(e: Event) => void',
            },
            {
              prop: 'showState',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  ],
}

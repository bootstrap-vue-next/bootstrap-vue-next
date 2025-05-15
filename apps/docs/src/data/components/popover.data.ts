import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {showHideProps} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tooltip, .popover'},
      sourcePath: '/BPopover/BPopover.vue',
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
          body: {
            type: 'string',
            default: undefined,
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
          },
          delay: {
            type: 'number | { show: number; hide: number }',
            default: '() => {show: 100, hide: 300})',
          },
          floatingMiddleware: {
            type: 'Middleware[]',
            default: undefined,
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
          noAutoClose: {
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
          titleClass: {
            type: 'ClassValue',
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
          closeOnHide: {},
          hideMargin: {
            type: 'number',
            default: 0,
            description:
              'The margin to apply when hiding the popover on pointer leave (how far the pointer can move off the target before hiding the popover)',
          },
          ...showHideProps,
        } satisfies Record<keyof BvnComponentProps['BPopover'], PropertyReference>,
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
              type: '(trigger: string) => void',
            },
            {
              prop: 'toggle',
              type: '() => void',
            },
            {
              prop: 'visible',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  ],
}

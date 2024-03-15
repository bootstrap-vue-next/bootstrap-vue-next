import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      props: [
        {
          prop: 'modelValue',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'container',
          type: 'string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined',
          default: undefined,
        },
        {
          prop: 'target',
          type: '(() => HTMLElement | VNode) | string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null ',
          default: null,
        },
        {
          prop: 'reference',
          type: '(() => HTMLElement | VNode) | string | ComponentPublicInstance<HTMLElement> | HTMLSpanElement | HTMLElement | null',
          default: null,
        },
        {
          prop: 'content',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'click',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'manual',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'offset',
          type: 'number | string | null',
          default: null,
        },
        {
          prop: 'customClass',
          type: 'ClassValue',
          default: '',
        },
        {
          prop: 'placement',
          type: 'PopoverPlacement',
          default: 'top',
        },
        {
          prop: 'strategy',
          type: 'Strategy',
          default: 'absolute',
        },
        {
          prop: 'floatingMiddleware',
          type: 'Middleware[]',
          default: undefined,
        },
        {
          prop: 'noFlip',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noShift',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noFade',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noAutoClose',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'hide',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'realtime',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'inline',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tooltip',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'html',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'delay',
          type: 'number | { show: number; hide: number }',
          default: '() => {show: 100, hide: 300})',
        },
      ],
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

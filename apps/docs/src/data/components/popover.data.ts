import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      props: [
        {
          prop: 'modelValue',
          type: 'Booleanish',
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
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'manual',
          type: 'Booleanish',
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
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noShift',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noFade',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'noAutoClose',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'hide',
          type: 'Booleanish',
          default: true,
        },
        {
          prop: 'realtime',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'inline',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'tooltip',
          type: 'Booleanish',
          default: false,
        },
        {
          prop: 'html',
          type: 'Booleanish',
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

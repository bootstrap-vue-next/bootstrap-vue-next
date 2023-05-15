import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPopover',
      props: [
        {
          prop: 'container',
          type: 'string | ComponentPublicInstance<HTMLElement> | HTMLElement',
        },
        {
          prop: 'content',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'customClass',
          type: 'string',
        },
        {
          prop: 'noninteractive',
          type: 'Booleanish',
        },
        {
          prop: 'placement',
          type: "Popover.Options['placement']",
        },
        {
          prop: 'target',
          type: 'string | ComponentPublicInstance<HTMLElement> | HTMLElement | undefined',
        },
        {
          prop: 'title',
          type: 'string',
        },
        {
          prop: 'delay',
          type: 'number | BPopoverDelayObject>',
        },
        {
          prop: 'triggers',
          type: "Popover.Options['trigger']",
        },
        {
          prop: 'show',
          type: 'Booleanish',
        },
        {
          prop: 'variant',
          type: 'ColorVariant',
        },
        {
          prop: 'html',
          type: 'Booleanish',
        },
        {
          prop: 'sanitize',
          type: 'Booleanish',
        },
        {
          prop: 'offset',
          type: "Popover.Options['offset']",
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

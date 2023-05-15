import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCarousel',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'imgHeight',
          type: 'string',
        },
        {
          prop: 'imgWidth',
          type: 'string',
        },
        {
          prop: 'background',
          type: 'string',
        },
        {
          prop: 'modelValue',
          type: 'number',
        },
        {
          prop: 'controls',
          type: 'Booleanish',
        },
        {
          prop: 'indicators',
          type: 'Booleanish',
        },
        {
          prop: 'interval',
          type: 'number',
        },
        {
          prop: 'noTouch',
          type: 'Booleanish',
        },
        {
          prop: 'noWrap',
          type: 'Booleanish',
        },
        {
          prop: 'controlsPrevText',
          type: 'string',
        },
        {
          prop: 'controlsNextText',
          type: 'string',
        },
        {
          prop: 'indicatorsButtonLabel',
          type: 'string',
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'sliding-start',
              description: '',
              type: 'Event',
            },
          ],
          description: '',
          event: 'sliding-start',
        },
        {
          args: [
            {
              arg: 'sliding-end',
              description: '',
              type: 'Event',
            },
          ],
          description: '',
          event: 'sliding-end',
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BCarouselSlide',
      emits: [],
      props: [
        {
          prop: 'imgSrc',
          type: 'string',
        },
        {
          prop: 'imgHeight',
          type: 'string | number',
        },
        {
          prop: 'imgWidth',
          type: 'string | number',
        },
        {
          prop: 'interval',
          type: 'string | number',
        },
        {
          prop: 'active',
          type: 'Booleanish',
        },
        {
          prop: 'background',
          type: 'string',
        },
        {
          prop: 'caption',
          type: 'string',
        },
        {
          prop: 'captionHtml',
          type: 'string',
        },
        {
          prop: 'captionTag',
          type: 'string',
        },
        {
          prop: 'contentTag',
          type: 'string',
        },
        {
          prop: 'contentVisibleUp',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'imgAlt',
          type: 'string',
        },
        {
          prop: 'imgBlank',
          type: 'Booleanish',
        },
        {
          prop: 'imgBlankColor',
          type: 'string',
        },
        {
          prop: 'text',
          type: 'string',
        },
        {
          prop: 'textHtml',
          type: 'string',
        },
        {
          prop: 'textTag',
          type: 'string',
        },
      ],
      slots: [
        {
          description: '',
          name: 'img',
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

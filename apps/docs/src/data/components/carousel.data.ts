import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCarousel',
      props: [
        {
          prop: 'ride',
          type: "true | false | 'true' | 'false' | '' | 'carousel'",
          default: false,
        },
        {
          prop: 'noHoverPause',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'rideReverse',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'fade',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'imgHeight',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'imgWidth',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'background',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'modelValue',
          type: 'number',
          default: 0,
        },
        {
          prop: 'controls',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'indicators',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'interval',
          type: 'number | string',
          default: 5000,
        },
        {
          prop: 'noTouch',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noWrap',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'controlsPrevText',
          type: 'string',
          default: 'Previous',
        },
        {
          prop: 'controlsNextText',
          type: 'string',
          default: 'Next',
        },
        {
          prop: 'indicatorsButtonLabel',
          type: 'string',
          default: 'Slide',
        },
        {
          prop: 'keyboard',
          type: 'boolean',
          default: true,
        },
        {
          prop: 'touchThreshold',
          type: 'number | string',
          default: 50,
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'event',
              description: '',
              type: 'BvCarouselEvent',
            },
          ],
          description: 'Fires immediately when the carousel starts its slide transition.',
          event: 'slide',
        },
        {
          args: [
            {
              arg: 'event',
              description: '',
              type: 'BvCarouselEvent',
            },
          ],
          description: 'Fired when the carousel has completed its slide transition.',
          event: 'slid',
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
          default: undefined,
        },
        {
          prop: 'imgHeight',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'imgWidth',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'interval',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'background',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'caption',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'captionHtml',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'captionTag',
          type: 'string',
          default: 'h3',
        },
        {
          prop: 'contentTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'contentVisibleUp',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'imgSrcset',
          type: 'string | string[]',
          default: undefined,
        },
        {
          prop: 'imgAlt',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'imgBlank',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'imgBlankColor',
          type: 'string',
          default: 'transparent',
        },
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'textHtml',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'textTag',
          type: 'string',
          default: 'p',
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

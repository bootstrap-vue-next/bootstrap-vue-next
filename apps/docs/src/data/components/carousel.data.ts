import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCarousel',
      props: {
        '': {
          ride: {
            type: "true | false | 'true' | 'false' | '' | 'carousel'",
            default: false,
          },
          noHoverPause: {
            type: 'boolean',
            default: false,
          },
          rideReverse: {
            type: 'boolean',
            default: false,
          },
          fade: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          imgHeight: {
            type: 'string',
            default: undefined,
          },
          imgWidth: {
            type: 'string',
            default: undefined,
          },
          background: {
            type: 'string',
            default: undefined,
          },
          modelValue: {
            type: 'number',
            default: 0,
          },
          controls: {
            type: 'boolean',
            default: false,
          },
          indicators: {
            type: 'boolean',
            default: false,
          },
          interval: {
            type: 'number | string',
            default: 5000,
          },
          noTouch: {
            type: 'boolean',
            default: false,
          },
          noWrap: {
            type: 'boolean',
            default: false,
          },
          controlsPrevText: {
            type: 'string',
            default: 'Previous',
          },
          controlsNextText: {
            type: 'string',
            default: 'Next',
          },
          indicatorsButtonLabel: {
            type: 'string',
            default: 'Slide',
          },
          keyboard: {
            type: 'boolean',
            default: true,
          },
          touchThreshold: {
            type: 'number | string',
            default: 50,
          },
        },
      },
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
      props: {
        '': {
          imgSrc: {
            type: 'string',
            default: undefined,
          },
          imgHeight: {
            type: 'string | number',
            default: undefined,
          },
          imgWidth: {
            type: 'string | number',
            default: undefined,
          },
          interval: {
            type: 'string | number',
            default: undefined,
          },
          background: {
            type: 'string',
            default: undefined,
          },
          caption: {
            type: 'string',
            default: undefined,
          },
          captionHtml: {
            type: 'string',
            default: undefined,
          },
          captionTag: {
            type: 'string',
            default: 'h3',
          },
          contentTag: {
            type: 'string',
            default: 'div',
          },
          contentVisibleUp: {
            type: 'string',
            default: undefined,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          imgSrcset: {
            type: 'string | string[]',
            default: undefined,
          },
          imgAlt: {
            type: 'string',
            default: undefined,
          },
          imgBlank: {
            type: 'boolean',
            default: false,
          },
          imgBlankColor: {
            type: 'string',
            default: 'transparent',
          },
          text: {
            type: 'string',
            default: undefined,
          },
          textHtml: {
            type: 'string',
            default: undefined,
          },
          textTag: {
            type: 'string',
            default: 'p',
          },
        },
      },
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

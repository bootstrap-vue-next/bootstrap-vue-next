import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCarousel',
      props: {
        '': {
          background: {
            type: 'string',
            default: undefined,
          },
          controls: {
            type: 'boolean',
            default: false,
          },
          controlsNextText: {
            type: 'string',
            default: 'Next',
          },
          controlsPrevText: {
            type: 'string',
            default: 'Previous',
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
          indicators: {
            type: 'boolean',
            default: false,
          },
          indicatorsButtonLabel: {
            type: 'string',
            default: 'Slide',
          },
          interval: {
            type: 'Numberish',
            default: 5000,
          },
          keyboard: {
            type: 'boolean',
            default: true,
          },
          modelValue: {
            type: 'number',
            default: 0,
          },
          noHoverPause: {
            type: 'boolean',
            default: false,
          },
          noTouch: {
            type: 'boolean',
            default: false,
          },
          noWrap: {
            type: 'boolean',
            default: false,
          },
          ride: {
            type: "boolean | 'carousel'",
            default: false,
          },
          rideReverse: {
            type: 'boolean',
            default: false,
          },
          touchThreshold: {
            type: 'Numberish',
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
        {
          event: 'update:modelValue',
          description: 'Standard event to update the v-model',
          args: [
            {
              arg: 'update:modelValue',
              description: 'modelValue',
              type: 'number',
            },
          ],
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
          imgHeight: {
            type: 'Numberish',
            default: undefined,
          },
          imgSrc: {
            type: 'string',
            default: undefined,
          },
          imgSrcset: {
            type: 'string | string[]',
            default: undefined,
          },
          imgWidth: {
            type: 'Numberish',
            default: undefined,
          },
          interval: {
            type: 'Numberish',
            default: undefined,
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
        {
          description: '',
          name: 'caption',
          scope: [],
        },
        {
          description: '',
          name: 'text',
          scope: [],
        },
      ],
    },
  ],
}

import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCarousel',
      sourcePath: '/BCarousel/BCarousel.vue',
      props: {
        '': {
          background: {
            type: 'string',
            default: undefined,
            description: "Set the CSS color of the carousel's background",
          },
          controls: {
            type: 'boolean',
            default: false,
            description: 'Enable the previous and next controls',
          },
          controlsNextText: {
            type: 'string',
            default: 'Next',
            description: 'Set the text for the "Next" control',
          },
          controlsPrevText: {
            type: 'string',
            default: 'Previous',
            description: 'Set the text for the "Previous" control',
          },
          fade: {
            type: 'boolean',
            default: false,
            description:
              'When set, changes the slide animation to a crossfade instead of a sliding effect',
          },
          imgHeight: {
            type: 'string',
            default: undefined,
            description: "Set the default image 'height' attribute for all b-tab children",
          },
          imgWidth: {
            type: 'string',
            default: undefined,
            description: "Set the default image 'width' attribute for all b-tab children",
          },
          indicators: {
            type: 'boolean',
            default: false,
            description: 'Enable the indicator buttons for jumping to specific slides',
          },
          indicatorsButtonLabel: {
            type: 'string',
            default: 'Slide',
            description: 'Set the aria-label for the indicator buttons',
          },
          interval: {
            type: 'number',
            default: 5000,
            description: 'Set the delay time (in milliseconds) between slides',
          },
          keyboard: {
            type: 'boolean',
            default: true,
            description: 'Enable keyboard navigation with the right and left arrow keys',
          },
          modelValue: {
            type: 'number',
            default: 0,
            description: 'The index of the currently active slide',
          },
          noHoverPause: {
            type: 'boolean',
            default: false,
            description:
              'When set, disables the pausing of the slide show when the current slide is hovered',
          },
          noTouch: {
            type: 'boolean',
            default: false,
            description: 'Disable controlling the slides via touch swipes',
          },
          noWrap: {
            type: 'boolean',
            default: false,
            description: 'Do not restart the slide show when then end is reached',
          },
          ride: {
            type: "boolean | 'carousel'",
            default: false,
            description:
              'Set to "carousel" to animate slides automatically, true to animate on first interaction, false to disable animation',
          },
          rideReverse: {
            type: 'boolean',
            default: false,
            description: 'When set, the carousel will animate in the reverse direction',
          },
          touchThreshold: {
            type: 'Numberish',
            default: 50,
            description:
              'The minimum distance the touch swipe must move to prevent the slide show from being paused',
          },
          ...pick(buildCommonProps({}), ['id']),
        } satisfies Record<keyof BvnComponentProps['BCarousel'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Standard event to update the v-model',
          args: [
            {
              arg: 'update:model-value',
              description: 'modelValue',
              type: 'number',
            },
          ],
        },
        {
          event: 'slide',
          description: 'Fires immediately when the carousel starts its slide transition.',
          args: [
            {
              arg: 'value',
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          ],
        },
        {
          event: 'slid',
          description: 'Fired when the carousel has completed its slide transition.',
          args: [
            {
              arg: 'value',
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          ],
        },
        {
          event: 'click:prev',
          description: '',
          args: [
            {
              arg: 'click',
              description: 'Native click event',
              type: 'MouseEvent',
            },
          ],
        },
        {
          event: 'click:next',
          description: '',
          args: [
            {
              arg: 'click',
              description: 'Native click event',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content (slides) to place in the carousel',
        },
      ],
    },
    {
      component: 'BCarouselSlide',
      sourcePath: '/BCarousel/BCarouselSlide.vue',
      emits: [],
      props: {
        '': {
          background: {
            type: 'string',
            default: undefined,
            description: "CSS color to use as the slide's background color",
          },
          caption: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the caption',
          },
          captionHtml: {
            type: 'string',
            default: undefined,
            description: 'HTML string content to place in the caption',
          },
          captionTag: {
            type: 'string',
            default: 'h3',
            description:
              'Specify the HTML tag to render instead of the default tag for the caption wrapper',
          },
          contentTag: {
            type: 'string',
            default: 'div',
            description:
              'Specify the HTML tag to render instead of the default tag for the content wrapper',
          },
          contentVisibleUp: {
            type: 'string',
            default: undefined,
            description:
              'Specify the breakpoint that the textual content will start to be shown. Leave at default to always show the textual content',
          },
          imgAlt: {
            type: 'string',
            default: undefined,
            description: "Sets the value of the 'alt' attribute on the image",
          },
          imgBlank: {
            type: 'boolean',
            default: false,
            description: 'If set, will render a blank image instead of the img-src',
          },
          imgBlankColor: {
            type: 'string',
            default: 'transparent',
            description: 'Set the CSS color to use as the fill of the blank image',
          },
          imgHeight: {
            type: 'Numberish',
            default: undefined,
            description: "Set the default image 'height' attribute for all b-tab children",
          },
          imgSrc: {
            type: 'string',
            default: undefined,
            description: 'Sets the URL of the image',
          },
          imgSrcset: {
            type: 'string | string[]',
            default: undefined,
          },
          imgWidth: {
            type: 'Numberish',
            default: undefined,
            description: "Set the default image 'width' attribute for all b-tab children",
          },
          interval: {
            type: 'number',
            default: undefined,
            description: 'Set the delay time (in milliseconds) before the slide is shown',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the text of the slide',
          },
          textHtml: {
            type: 'string',
            default: undefined,
            description: 'HTML string content to place in the text of the slide',
          },
          textTag: {
            type: 'string',
            default: 'p',
            description:
              'Specify the HTML tag to render instead of the default tag for the text wrapper',
          },
          ...pick(buildCommonProps({}), ['id']),
        } satisfies Record<keyof BvnComponentProps['BCarouselSlide'], PropertyReference>,
      },
      slots: [
        {
          name: 'caption',
          description: 'Content to place in caption',
        },
        {
          name: 'default',
          description: 'Content to place in the carousel slide',
        },
        {
          name: 'img',
          description: 'Slot for img element or image component',
        },
        {
          name: 'text',
          description: 'Content to place in text area of the slide',
        },
      ],
    },
  ],
}

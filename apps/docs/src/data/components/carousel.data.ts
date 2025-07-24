import type {BCarouselEmits, BCarouselSlideProps, BCarouselSlideSlots, BCarouselSlots, BvnComponentProps} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  type EmitReference,
  type PropertyReference,
  type SlotsReference,
  StyleKind,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BCarousel: {
      sourcePath: '/BCarousel/BCarousel.vue',
      props: {
        ...pick(buildCommonProps(), ['id']),
        background: {
          type: 'string',
          default: undefined,
          description: "Set the CSS color of the carousel's background",
        },
        controls: {
          type: 'boolean',
          default: false, // TODO item not in string format
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
          default: false, // TODO item not in string format
          description:
            'When set, changes the slide animation to a crossfade instead of a sliding effect',
        },
        imgHeight: {
          type: 'string',
          default: undefined,
          description: "Set the default image 'height' attribute for all b-tab children", // TODO grammar check (should say "b-carousel-slide children" instead of "b-tab children")
        },
        imgWidth: {
          type: 'string',
          default: undefined,
          description: "Set the default image 'width' attribute for all b-tab children", // TODO grammar check (should say "b-carousel-slide children" instead of "b-tab children")
        },
        indicators: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Enable the indicator buttons for jumping to specific slides',
        },
        indicatorsButtonLabel: {
          type: 'string',
          default: 'Slide',
          description: 'Set the aria-label for the indicator buttons',
        },
        interval: {
          type: 'number',
          default: 5000, // TODO item not in string format
          description: 'Set the delay time (in milliseconds) between slides',
        },
        keyboard: {
          type: 'boolean',
          default: true, // TODO item not in string format
          description: 'Enable keyboard navigation with the right and left arrow keys',
        },
        labelIndicators: {
          type: 'string',
          default: 'Select a slide to display',
          description: 'Set the aria-label for the indicators',
        },
        modelValue: {
          type: 'number',
          default: 0, // TODO item not in string format
          description: 'The index of the currently active slide',
        },
        noAnimation: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, disables the animation',
        },
        noHoverPause: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When set, disables the pausing of the slide show when the current slide is hovered',
        },
        noTouch: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Disable controlling the slides via touch swipes',
        },
        noWrap: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Do not restart the slide show when then end is reached', // TODO grammar check (typo: "then" should be "the")
        },
        ride: {
          type: "boolean | 'carousel'",
          default: false, // TODO item not in string format
          description:
            'Set to "carousel" to animate slides automatically, true to animate on first interaction, false to disable animation',
        },
        rideReverse: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, the carousel will animate in the reverse direction',
        },
        touchThreshold: {
          type: 'Numberish',
          default: 50, // TODO item not in string format
          description:
            'The minimum distance the touch swipe must move to prevent the slide show from being paused',
        },
      } satisfies Record<keyof BvnComponentProps['BCarousel'], PropertyReference>,
      emits: {
        'update:model-value': {
          description: 'Standard event to update the v-model', // TODO similar content to BAlert/update:model-value (identical description)
          args: {
            'update:model-value': {
              description: 'modelValue',
              type: 'number',
            },
          },
        },
        'slide': {
          description: 'Fires immediately when the carousel starts its slide transition.',
          args: {
            value: {
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          },
        },
        'slid': {
          description: 'Fired when the carousel has completed its slide transition.',
          args: {
            value: {
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          },
        },
        'prev-click': {
          description: '', // TODO missing description
          args: {
            click: {
              description: 'Native click event',
              type: 'MouseEvent',
            },
          },
        },
        'next-click': {
          description: '', // TODO missing description
          args: {
            click: {
              description: 'Native click event',
              type: 'MouseEvent',
            },
          },
        },
      } satisfies Record<keyof BCarouselEmits | 'update:model-value', EmitReference>,
      slots: {
        default: {
          description: 'Content (slides) to place in the carousel',
        },
      } satisfies Record<keyof BCarouselSlots, SlotsReference>,
    },
    BCarouselSlide: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.carousel-item'},
      sourcePath: '/BCarousel/BCarouselSlide.vue',
      props: {
        ...pick(buildCommonProps(), ['id']),
        background: {
          type: 'string',
          default: undefined,
          description: "CSS color to use as the slide's background color", // TODO similar content to BCarousel/background (similar description)
        },
        caption: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the caption',
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
          default: false, // TODO item not in string format
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
          description: "Set the default image 'height' attribute for all b-tab children", // TODO grammar check (should say "b-carousel-slide" instead of "b-tab children")
        },
        imgSrc: {
          type: 'string',
          default: undefined,
          description: 'Sets the URL of the image',
        },
        imgSrcset: {
          type: 'string | string[]',
          default: undefined,
          // description: 'Sets the srcset attribute for the image' // TODO missing description
        },
        imgWidth: {
          type: 'Numberish',
          default: undefined,
          description: "Set the default image 'width' attribute for all b-tab children", // TODO grammar check (should say "b-carousel-slide" instead of "b-tab children")
        },
        interval: {
          type: 'number',
          default: undefined,
          description: 'Set the delay time (in milliseconds) before the slide is shown', // TODO similar content to BCarousel/interval (similar description)
        },
        text: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the text of the slide',
        },
        textTag: {
          type: 'string',
          default: 'p',
          description:
            'Specify the HTML tag to render instead of the default tag for the text wrapper',
        },
      } satisfies Record<keyof BvnComponentProps['BCarouselSlide'], PropertyReference>,
      emits: {},
      slots: {
        caption: {
          description: 'Content to place in caption',
        },
        default: {
          description: 'Content to place in the carousel slide',
        },
        img: {
          description: 'Slot for img element or image component',
        },
        text: {
          description: 'Content to place in text area of the slide',
        },
      } satisfies Record<keyof BCarouselSlideSlots, SlotsReference>,
    },
  }),
}

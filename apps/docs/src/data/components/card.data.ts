import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCard',
      props: {
        '': {
          align: {
            type: 'AlignmentTextHorizontal',
            default: undefined,
            description: "Text alignment for the card's content: 'start', 'center' or 'end'",
          },
          bodyText: {
            type: 'string',
            default: "''",
            description: 'Text content to place in the card body, default slot takes precedence',
          },
          imgAlt: {
            type: 'string',
            default: undefined,
            description: 'URL for the optional image',
          },
          imgHeight: {
            type: 'Numberish',
            default: undefined,
            description: "The value to set on the image's 'height' attribute",
          },
          imgPlacement: {
            type: 'Placement | "overlay"',
            default: 'top',
            description:
              "Placement for the optional image ('top', 'bottom', 'start', 'end', or 'overlay')",
          },
          imgSrc: {
            type: 'string',
            default: undefined,
            description: 'URL for the optional image',
          },
          imgWidth: {
            type: 'Numberish',
            default: undefined,
            description: "The value to set on the image's 'width' attribute",
          },
          noBody: {
            type: 'boolean',
            default: false,
            description: 'Disable rendering of the default inner card-body element',
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
          ...pick(
            buildCommonProps({
              bodyBorderVariant: {
                description:
                  'Applies one of the Bootstrap theme color variants to the body border (NYI?)',
              },
              bodyTextVariant: {
                description:
                  'Applies one of the Bootstrap theme color variants to the body text (NYI?)',
              },
              bodyVariant: {
                description: 'Applies one of the Bootstrap theme color variants to the body (NYI?)',
              },
              variant: {
                default: 'secondary',
              },
            }),
            [
              'bgVariant',
              'bodyBgVariant',
              'bodyBorderVariant',
              'bodyClass',
              'bodyTag',
              'bodyTextVariant',
              'bodyVariant',
              'borderVariant',
              'footer',
              'footerBgVariant',
              'footerBorderVariant',
              'footerClass',
              'footerHtml',
              'footerTag',
              'footerTextVariant',
              'footerVariant',
              'header',
              'headerBgVariant',
              'headerBorderVariant',
              'headerClass',
              'headerHtml',
              'headerTag',
              'headerTextVariant',
              'headerVariant',
              'subtitle',
              'subtitleTag',
              'subtitleTextVariant',
              'tag',
              'textVariant',
              'title',
              'titleTag',
            ]
          ),
        } satisfies Record<keyof BvnComponentProps['BCard'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the card',
        },
        {
          name: 'footer',
          description: 'For custom rendering of footer content',
        },
        {
          name: 'header',
          description: 'For custom rendering of header content',
        },
        {
          description: '',
          name: 'For custom rendering of image content',
        },
      ],
    },
    {
      component: 'BCardBody',
      emits: [],
      props: {
        '': {
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          overlay: {
            type: 'boolean',
            default: false,
          },
          subtitle: {
            type: 'string',
            default: undefined,
          },
          subtitleTag: {
            type: 'string',
            default: 'h4',
          },
          subtitleTextVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          text: {
            type: 'string',
            default: undefined,
          },
          title: {
            type: 'string',
            default: undefined,
          },
          titleTag: {
            type: 'string',
            default: 'h4',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
        } satisfies Record<keyof BvnComponentProps['BCardBody'], PropertyReference>,
      },
      slots: [
        {
          name: 'title',
          description: '',
          scope: [],
        },
        {
          description: '',
          name: 'subtitle',
          scope: [],
        },
        {
          name: 'default',
          description: '',
          scope: [],
        },
      ],
    },
    {
      component: 'BCardFooter',
      emits: [],
      props: {
        '': {
          bgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          html: {
            type: 'string',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          text: {
            type: 'string',
            default: undefined,
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BCardFooter'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BCardGroup',
      emits: [],
      props: {
        '': {
          columns: {
            type: 'boolean',
            default: false,
          },
          deck: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
        } satisfies Record<keyof BvnComponentProps['BCardGroup'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BCardHeader',
      emits: [],
      props: {
        '': {
          bgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          borderVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          html: {
            type: 'string',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          text: {
            type: 'string',
            default: undefined,
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BCardHeader'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BCardImg',
      emits: [],
      props: {
        '': {
          blank: {
            type: 'boolean',
            default: undefined,
          },
          blankColor: {
            type: 'string',
            default: undefined,
          },
          block: {
            type: 'boolean',
            default: undefined,
          },
          fluid: {
            type: 'boolean',
            default: undefined,
          },
          fluidGrow: {
            type: 'boolean',
            default: undefined,
          },
          height: {
            type: 'Numberish',
            default: undefined,
          },
          lazy: {
            type: 'boolean',
            default: undefined,
          },
          placement: {
            type: 'Placement | "overlay"',
            default: 'top',
          },
          rounded: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          roundedTop: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          roundedBottom: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          roundedStart: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          roundedEnd: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          sizes: {
            type: 'string | string[]',
            default: undefined,
          },
          src: {
            type: 'string',
            default: undefined,
          },
          srcset: {
            type: 'string | string[]',
            default: undefined,
          },
          thumbnail: {
            type: 'boolean',
            default: undefined,
          },
          width: {
            type: 'Numberish',
            default: undefined,
          },
          tag: {},
        } satisfies Record<keyof BvnComponentProps['BCardImg'], PropertyReference>,
      },
      slots: [],
    },
    {
      component: 'BCardSubtitle',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'h6',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: 'body-secondary',
          },
        } satisfies Record<keyof BvnComponentProps['BCardSubtitle'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BCardText',
      emits: [],
      props: {
        '': {
          tag: {
            type: 'string',
            default: 'p',
          },
          text: {
            type: 'string',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BCardText'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BCardTitle',
      emits: [],
      props: {
        '': {
          tag: {
            type: 'string',
            default: 'h4',
          },
          text: {
            type: 'string',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BCardTitle'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}

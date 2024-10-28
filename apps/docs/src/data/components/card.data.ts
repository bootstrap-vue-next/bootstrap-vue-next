import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick} from '../../utils'
import {imageProps, linkTo} from '../../utils/image-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCard',
      sourcePath: '/BCard/BCard.vue',
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
          ...pick(
            buildCommonProps({
              bodyBorderVariant: {
                description:
                  'Applies one of the Bootstrap theme color variants to the body border (NYI?)',
              },
            }),
            [
              'bgVariant',
              'bodyBgVariant',
              'bodyBorderVariant',
              'bodyClass',
              'bodyTag',
              'bodyTextVariant',
              'borderVariant',
              'footer',
              'footerBgVariant',
              'footerBorderVariant',
              'footerClass',
              'footerTag',
              'footerTextVariant',
              'footerVariant',
              'header',
              'headerBgVariant',
              'headerBorderVariant',
              'headerClass',
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
              'variant',
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
          name: 'img',
          description: 'For custom rendering of image content',
        },
      ],
    },
    {
      component: 'BCardBody',
      sourcePath: '/BCard/BCardBody.vue',
      emits: [],
      props: {
        '': {
          overlay: {
            type: 'boolean',
            default: false,
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the card body, default slot takes precedence',
          },
          ...pick(buildCommonProps(), [
            'bgVariant',
            'subtitle',
            'subtitleTag',
            'subtitleTextVariant',
            'tag',
            'textVariant',
            'title',
            'titleTag',
            'variant',
          ]),
        } satisfies Record<keyof BvnComponentProps['BCardBody'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the card body',
        },
        {
          name: 'title',
          description: 'Content to place in the card title',
        },
        {
          name: 'subtitle',
          description: 'Content to place in the card subtitle',
        },
      ],
    },
    {
      component: 'BCardFooter',
      sourcePath: '/BCard/BCardFooter.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the card footer, default slot takes precedence',
          },
          ...pick(buildCommonProps(), [
            'bgVariant',
            'borderVariant',
            'tag',
            'textVariant',
            'variant',
          ]),
        } satisfies Record<keyof BvnComponentProps['BCardFooter'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the card footer',
        },
      ],
    },
    {
      component: 'BCardGroup',
      sourcePath: '/BCard/BCardGroup.vue',
      emits: [],
      props: {
        '': {
          columns: {
            type: 'boolean',
            default: false,
            description: 'When set, renders the card group in a masonry-like columnar style',
          },
          deck: {
            type: 'boolean',
            default: false,
            description: 'When set renders the card group with gutters between cards',
          },
          ...pick(buildCommonProps(), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BCardGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content (cards) to place in the card group',
        },
      ],
    },
    {
      component: 'BCardHeader',
      sourcePath: '/BCard/BCardHeader.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the card header, default slot takes precedence',
          },
          ...pick(buildCommonProps(), [
            'bgVariant',
            'borderVariant',
            'tag',
            'textVariant',
            'variant',
          ]),
        } satisfies Record<keyof BvnComponentProps['BCardHeader'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the card header',
        },
      ],
    },
    {
      component: 'BCardImg',
      sourcePath: '/BCard/BCardImg.vue',
      props: {
        '': {
          placement: {
            type: 'Placement | "overlay"',
            default: 'top',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BCardImg'], keyof typeof imageProps>,
          PropertyReference
        >,
        'BImg props': {
          _linkTo: {type: linkTo},
          ...omit(imageProps, ['placement']),
        },
      },
      emits: [],
      slots: [],
    },
    {
      component: 'BCardSubtitle',
      sourcePath: '/BCard/BCardSubtitle.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the card body, default slot takes precedence',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'h6',
              },
              textVariant: {
                default: 'body-secondary',
              },
            }),
            ['tag', 'textVariant']
          ),
        } satisfies Record<keyof BvnComponentProps['BCardSubtitle'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the card subtitle',
        },
      ],
    },
    {
      component: 'BCardText',
      sourcePath: '/BCard/BCardText.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the card text, default slot takes precedence',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'p',
              },
            }),
            ['tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BCardText'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the card text',
        },
      ],
    },
    {
      component: 'BCardTitle',
      sourcePath: '/BCard/BCardTitle.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description: 'Text content to place in the card title, default slot takes precedence',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'h4',
              },
            }),
            ['tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BCardTitle'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the card title',
        },
      ],
    },
  ],
}

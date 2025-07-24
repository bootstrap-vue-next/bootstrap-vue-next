import type {BAccordionSlots,BCardFooterSlots,  BCardBodySlots, BCardSlots, BvnComponentProps, BCardGroupSlots, BCardHeaderSlots, BCardSubtitleSlots, BCardTextSlots, BCardTitleSlots} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type PropertyReference,
  type SlotsReference,
  StyleKind,
} from '../../types'
import {omit, pick} from '../../utils/objectUtils'
import {imageProps, linkTo} from '../../utils/imageProps'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BCard: {
      sourcePath: '/BCard/BCard.vue',
      props: {
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
          description: 'URL for the optional image', // TODO grammar check (description incorrect; should describe alt text, not URL)
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
            "Placement for the optional image ('top', 'bottom', 'start', 'end', or 'overlay')", // TODO similar content to BCardImg/placement (similar description and type)
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
          default: false, // TODO item not in string format
          description: 'Disable rendering of the default inner card-body element',
        },
      } satisfies Record<keyof BvnComponentProps['BCard'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card',
        },
        footer: {
          description: 'For custom rendering of footer content',
        },
        header: {
          description: 'For custom rendering of header content',
        },
        img: {
          description: 'For custom rendering of image content',
        },
      } satisfies Record<keyof BCardSlots, SlotsReference>,
    },
    BCardBody: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card-body, .card-img-overlay'},
      sourcePath: '/BCard/BCardBody.vue',
      props: {
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
        overlay: {
          type: 'boolean',
          default: false, // TODO item not in string format
          // description: 'When set, applies overlay styling to the card body' // TODO missing description
        },
        text: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the card body, default slot takes precedence', // TODO similar content to BCard/bodyText (similar description)
        },
      } satisfies Record<keyof BvnComponentProps['BCardBody'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card body',
        },
        title: {
          description: 'Content to place in the card title',
        },
        subtitle: {
          description: 'Content to place in the card subtitle',
        },
      } satisfies Record<keyof BCardBodySlots, SlotsReference>,
    },
    BCardFooter: {
      sourcePath: '/BCard/BCardFooter.vue',
      props: {
        ...pick(buildCommonProps(), [
          'bgVariant',
          'borderVariant',
          'tag',
          'textVariant',
          'variant',
        ]),
        text: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the card footer, default slot takes precedence', // TODO similar content to BCard/bodyText (similar description structure)
        },
      } satisfies Record<keyof BvnComponentProps['BCardFooter'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card footer',
        },
      } satisfies Record<keyof BCardFooterSlots, SlotsReference>,
    },
    BCardGroup: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card-deck, .card-group, .card-columns'},
      sourcePath: '/BCard/BCardGroup.vue',
      props: {
        ...pick(buildCommonProps(), ['tag']),
        columns: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set, renders the card group in a masonry-like columnar style',
        },
        deck: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'When set renders the card group with gutters between cards', // TODO grammar check (add comma after "When set")
        },
      } satisfies Record<keyof BvnComponentProps['BCardGroup'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content (cards) to place in the card group',
        },
      } satisfies Record<keyof BCardGroupSlots, SlotsReference>,
    },
    BCardHeader: {
      sourcePath: '/BCard/BCardHeader.vue',
      props: {
        ...pick(buildCommonProps(), [
          'bgVariant',
          'borderVariant',
          'tag',
          'textVariant',
          'variant',
        ]),
        text: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the card header, default slot takes precedence', // TODO similar content to BCard/bodyText (similar description structure)
        },
      } satisfies Record<keyof BvnComponentProps['BCardHeader'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card header',
        },
      } satisfies Record<keyof BCardHeaderSlots, SlotsReference>,
    },
    BCardImg: {
      sourcePath: '/BCard/BCardImg.vue',
      props: {
        [defaultPropSectionSymbol]: {
          placement: {
            type: 'Placement | "overlay"',
            default: 'top',
            // description: 'Placement for the image ("top", "bottom", "start", "end", or "overlay")' // TODO missing description // TODO similar content to BCard/imgPlacement (similar type)
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BCardImg'], keyof typeof imageProps>,
          PropertyReference
        >,
        'BImg props': {
          _opts: {
            linkTo,
          },
          _data: omit(imageProps, ['placement']),
        },
      },
      emits: {},
      slots: {},
    },
    BCardSubtitle: {
      sourcePath: '/BCard/BCardSubtitle.vue',
      props: {
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
        text: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the card body, default slot takes precedence', // TODO grammar check (should say "card subtitle" instead of "card body") // TODO similar content to BCard/bodyText (similar description structure)
        },
      } satisfies Record<keyof BvnComponentProps['BCardSubtitle'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card subtitle',
        },
      } satisfies Record<keyof BCardSubtitleSlots, SlotsReference>,
    },
    BCardText: {
      sourcePath: '/BCard/BCardText.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'p',
            },
          }),
          ['tag']
        ),
        text: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the card text, default slot takes precedence', // TODO similar content to BCard/bodyText (similar description structure)
        },
      } satisfies Record<keyof BvnComponentProps['BCardText'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card text',
        },
      } satisfies Record<keyof BCardTextSlots, SlotsReference>,
    },
    BCardTitle: {
      sourcePath: '/BCard/BCardTitle.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'h4',
            },
          }),
          ['tag']
        ),
        text: {
          type: 'string',
          default: undefined,
          description: 'Text content to place in the card title, default slot takes precedence', // TODO similar content to BCard/bodyText (similar description structure)
        },
      } satisfies Record<keyof BvnComponentProps['BCardTitle'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card title',
        },
      } satisfies Record<keyof BCardTitleSlots, SlotsReference>,
    },
  }),
}

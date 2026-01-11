import type {
  BCardBodyProps,
  BCardBodySlots,
  BCardFooterProps,
  BCardFooterSlots,
  BCardGroupProps,
  BCardGroupSlots,
  BCardHeaderProps,
  BCardHeaderSlots,
  BCardImgProps,
  BCardProps,
  BCardSlots,
  BCardSubtitleProps,
  BCardSubtitleSlots,
  BCardTextProps,
  BCardTextSlots,
  BCardTitleProps,
  BCardTitleSlots,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {omit, pick} from '../../utils/objectUtils'
import {imageProps, linkTo} from '../../utils/imageProps'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BCard: {
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
          description: 'Alt text for the optional image',
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
      } satisfies PropRecord<keyof BCardProps>,
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
      } satisfies PropRecord<keyof BCardSlots>,
    },
    BCardBody: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card-body, .card-img-overlay'},
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
      } satisfies PropRecord<keyof BCardBodyProps>,
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
      } satisfies SlotRecord<keyof BCardBodySlots>,
    },
    BCardFooter: {
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
      } satisfies PropRecord<keyof BCardFooterProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card footer',
        },
      } satisfies SlotRecord<keyof BCardFooterSlots>,
    },
    BCardGroup: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card-group'},
      props: {
        ...pick(buildCommonProps(), ['tag']),
      } satisfies PropRecord<keyof BCardGroupProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content (cards) to place in the card group',
        },
      } satisfies SlotRecord<keyof BCardGroupSlots>,
    },
    BCardHeader: {
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
      } satisfies PropRecord<keyof BCardHeaderProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card header',
        },
      } satisfies SlotRecord<keyof BCardHeaderSlots>,
    },
    BCardImg: {
      props: {
        [defaultPropSectionSymbol]: {
          placement: {
            type: 'Placement | "overlay"',
            default: 'top',
            // description: 'Placement for the image ("top", "bottom", "start", "end", or "overlay")' // TODO missing description // TODO similar content to BCard/imgPlacement (similar type)
          },
        } satisfies PropRecord<Exclude<keyof BCardImgProps, keyof typeof imageProps>>,
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
          description: 'Text content to place in the card subtitle, default slot takes precedence',
        },
      } satisfies PropRecord<keyof BCardSubtitleProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card subtitle',
        },
      } satisfies SlotRecord<keyof BCardSubtitleSlots>,
    },
    BCardText: {
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
      } satisfies PropRecord<keyof BCardTextProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card text',
        },
      } satisfies SlotRecord<keyof BCardTextSlots>,
    },
    BCardTitle: {
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
      } satisfies PropRecord<keyof BCardTitleProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the card title',
        },
      } satisfies SlotRecord<keyof BCardTitleSlots>,
    },
  }),
}

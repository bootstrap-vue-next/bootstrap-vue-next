import type {
  BAvatarEmits,
  BAvatarGroupSlots,
  BAvatarSlots,
  BvnComponentProps,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitReference,
  type PropertyReference,
  type SlotsReference,
  StyleKind,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {linkedBLinkSection, type linkProps} from '../../utils/linkProps'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BAvatar: {
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BAvatar/BAvatar.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...pick(
            buildCommonProps({
              alt: {
                default: 'avatar',
              },
              rounded: {
                default: 'circle',
                description:
                  'Specifies the type of rounding to apply to the component or its children. The `square` prop takes precedence',
              },
              src: {
                description: 'Image URL to use for the avatar',
              },
              variant: {
                default: 'secondary',
              },
            }),
            [
              'ariaLabel',
              'alt',
              'bgVariant',
              'rounded',
              'roundedBottom',
              'roundedEnd',
              'roundedStart',
              'roundedTop',
              'src',
              'textVariant',
              'variant',
            ]
          ),
          badge: {
            type: 'boolean | string',
            default: false,
            description:
              'When `true` shows an empty badge on the avatar, alternatively set to a string for content in the badge',
          },
          badgeBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Applies one of the Bootstrap theme color variants to the background of the badge',
          },
          badgeDotIndicator: {
            type: 'boolean',
            default: false,
            description:
              'When `true` shows a small dot indicator on the Avatar. All of the badge props are applied to the dot. `badge-dot-indicator` takes precedence over `badge`',
          },
          badgeTextVariant: {
            type: 'TextColorVariant | null',
            default: null,
            description: 'Applies one of the Bootstrap theme color variants to the text',
          },
          badgeVariant: {
            type: 'ColorVariant | null',
            default: 'primary',
            description: 'Applies one of the Bootstrap theme color variants to the badge',
          },
          badgePlacement: {
            type: 'CombinedPlacement',
            default: 'bottom-end',
            description:
              'Placement of the badge relative to the avatar. One of the values of `CombinedPlacement`',
          },
          badgePill: {
            type: 'boolean',
            default: false,
            description: 'Renders the badge with pill styling',
          },
          button: {
            type: 'boolean',
            default: false,
            description: 'When set to `true`, renders the avatar as a button',
          },
          buttonType: {
            type: 'ButtonType',
            default: 'button',
            description:
              'Type of button to render (i.e. `button`, `submit`, `reset`). Has no effect if prop button is not set',
          },
          size: {
            type: 'Size | string',
            default: undefined,
            description: 'Size of the avatar. Refer to the documentation for details',
          },
          square: {
            type: 'boolean',
            default: false,
            description: 'Disables rounding of the avatar, rending the avatar with square corners', // TODO grammar check (typo: "rending" should be "rendering")
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Text to place in the avatar',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BAvatar'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': linkedBLinkSection,
      },
      emits: {
        'click': {
          description: '', // TODO missing description
          args: {
            click: {
              description: 'Native click event',
              type: 'MouseEvent',
            },
          },
        },
        'img-error': {
          description: 'On image error',
          args: {
            'img-error': {
              description: 'On img-error',
              type: 'Event',
            },
          },
        },
      } satisfies Record<keyof BAvatarEmits, EmitReference>,
      slots: {
        default: {
          description: 'Content to place in the avatars optional badge. Overrides the `badge` prop',
        },
        badge: {
          description:
            'Content to place in the avatar. Overrides props `text`, `src`, and `icon-name`', // TODO prop inconsistency (mentions `icon-name`, which is not in BAvatarProps)
        },
      } satisfies Record<keyof BAvatarSlots, SlotsReference>,
    },
    BAvatarGroup: {
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BAvatar/BAvatarGroup.vue',
      props: {
        ...pick(
          buildCommonProps({
            rounded: {
              default: 'circle',
              description:
                'Specifies the type of rounding to apply to the component or its children. The `square` prop takes precedence. Refer to the documentation for details.',
            },
            variant: {
              default: 'secondary',
            },
          }),
          [
            'bgVariant',
            'rounded',
            'roundedBottom',
            'roundedEnd',
            'roundedStart',
            'roundedTop',
            'tag',
            'textVariant',
            'variant',
          ]
        ),
        overlap: {
          type: 'Numberish',
          default: 0.3,
          description:
            'Content to place in the avatar. Overrides props `text`, `src`, and `icon-name`', // TODO grammar check (description is incorrect; should describe overlap behavior, not avatar content)
        },
        size: {
          type: 'Size | string',
          default: undefined,
          description: 'Size of the child avatars. Refer to the documentation for details',
        },
        square: {
          type: 'boolean',
          default: false,
          description:
            'Disables rounding of the child avatars, rending the avatar with square corners', // TODO grammar check (typo: "rending" should be "rendering")
        },
      } satisfies Record<keyof BvnComponentProps['BAvatarGroup'], PropertyReference>,
      slots: {
        default: {
          description: 'Content (avatars) to place in the avatar group',
        },
      } satisfies Record<keyof BAvatarGroupSlots, SlotsReference>,
    },
  }),
}

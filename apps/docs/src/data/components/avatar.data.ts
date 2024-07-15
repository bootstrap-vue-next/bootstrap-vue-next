import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAvatar',
      props: {
        '': {
          alt: {
            type: 'string',
            default: 'avatar',
          },
          badge: {
            type: 'boolean | string',
            default: false,
          },
          badgeBgVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          badgeTextVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          badgeVariant: {
            type: 'ColorVariant | null',
            default: 'primary',
          },
          badgePlacement: {
            type: 'CombinedPlacement',
            default: 'top-end',
          },
          badgeDotIndicator: {
            type: 'boolean',
            default: false,
          },
          badgePill: {
            type: 'boolean',
            default: false,
          },
          button: {
            type: 'boolean',
            default: false,
          },
          buttonType: {
            type: 'ButtonType',
            default: 'button',
          },
          size: {
            type: 'Size | string',
            default: undefined,
          },
          square: {
            type: 'boolean',
            default: false,
          },
          src: {
            type: 'string',
            default: undefined,
          },
          text: {
            type: 'string',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: 'secondary',
          },
          active: {
            type: 'boolean',
            default: undefined,
          },
          activeClass: {
            type: 'string',
            default: undefined,
          },
          disabled: {
            type: 'boolean',
            default: undefined,
          },
          exactActiveClass: {
            type: 'string',
            default: undefined,
          },
          href: {
            type: 'string',
            default: undefined,
          },
          opacity: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          opacityHover: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          rel: {
            type: 'string',
            default: undefined,
          },
          replace: {
            type: 'boolean',
            default: undefined,
          },
          routerComponentName: {
            type: 'string',
            default: undefined,
          },
          stretched: {
            type: 'boolean',
            default: false,
          },
          target: {
            type: 'LinkTarget',
            default: undefined,
          },
          to: {
            type: 'RouteLocationRaw',
            default: undefined,
          },
          underlineOffset: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOffsetHover: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOpacity: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineOpacityHover: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          rounded: {
            type: 'boolean | RadiusElement',
            default: 'false',
          },
          roundedBottom: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          roundedEnd: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          roundedStart: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
          roundedTop: {
            type: 'boolean | RadiusElement',
            default: undefined,
          },
        },
      },
      emits: [
        {
          event: 'click',
          description: '',
          args: [
            {
              arg: 'click',
              description: 'On click event',
              type: 'MouseEvent',
            },
          ],
        },
        {
          event: 'img-error',
          args: [
            {
              arg: 'img-error',
              description: 'On img-error',
              type: 'Event',
            },
          ],
          description: 'On image error',
        },
      ],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
        {
          name: 'badge',
          description: '',
          scope: [],
        },
      ],
    },
    {
      component: 'BAvatarGroup',
      props: {
        '': {
          overlap: {
            type: 'Numberish',
            default: 0.3,
          },
          size: {
            type: 'LiteralUnion<Size, Numberish>',
            default: undefined,
          },
          square: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          rounded: {
            type: 'boolean | RadiusElement',
            default: false,
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
        },
      },
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
      ],
      emits: [],
    },
  ],
}

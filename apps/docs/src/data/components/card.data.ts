import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCard',
      props: {
        '': {
          align: {
            type: 'AlignmentTextHorizontal',
            default: undefined,
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          bodyBgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
          },
          bodyTag: {
            type: 'string',
            default: 'div',
          },
          bodyText: {
            type: 'string',
            default: undefined,
          },
          bodyTextVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          borderVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          footer: {
            type: 'string',
            default: undefined,
          },
          footerBgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          footerBorderVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          footerClass: {
            type: 'ClassValue',
            default: undefined,
          },
          footerHtml: {
            type: 'string',
            default: '',
          },
          footerTag: {
            type: 'string',
            default: 'div',
          },
          footerTextVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          footerVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          header: {
            type: 'string',
            default: undefined,
          },
          headerBgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerBorderVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
          },
          headerHtml: {
            type: 'string',
            default: '',
          },
          headerTag: {
            type: 'string',
            default: 'div',
          },
          headerTextVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          imgAlt: {
            type: 'string',
            default: undefined,
          },
          imgPlacement: {
            type: 'Placement | "overlay"',
            default: 'top',
          },
          imgHeight: {
            type: 'Numberish',
            default: undefined,
          },
          imgSrc: {
            type: 'string',
            default: undefined,
          },
          imgWidth: {
            type: 'Numberish',
            default: undefined,
          },
          noBody: {
            type: 'boolean',
            default: false,
          },
          subtitle: {
            type: 'string',
            default: undefined,
          },
          subtitleTag: {
            type: 'string',
            default: 'h6',
          },
          subtitleTextVariant: {
            type: 'TextColorVariant | null',
            default: 'body-secondary',
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          title: {
            type: 'string',
            default: undefined,
          },
          titleTag: {
            type: 'string',
            default: 'h6',
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
        {
          name: 'header',
          description: '',
          scope: [],
        },
        {
          name: 'footer',
          description: '',
          scope: [],
        },
        {
          description: '',
          name: 'img',
          scope: [],
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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

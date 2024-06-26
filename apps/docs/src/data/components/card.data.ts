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
          imgAlt: {
            type: 'string',
            default: undefined,
          },
          imgBottom: {
            type: 'boolean',
            default: false,
          },
          imgEnd: {
            type: 'boolean',
            default: false,
          },
          imgHeight: {
            type: 'string | number',
            default: undefined,
          },
          imgSrc: {
            type: 'string',
            default: undefined,
          },
          imgStart: {
            type: 'boolean',
            default: false,
          },
          imgTop: {
            type: 'boolean',
            default: false,
          },
          imgWidth: {
            type: 'string | number',
            default: undefined,
          },
          noBody: {
            type: 'boolean',
            default: false,
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
          bodyText: {
            type: 'string',
            default: undefined,
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
          bodyBgVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          bodyTag: {
            type: 'string',
            default: 'div',
          },
          bodyTextVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          overlay: {
            type: 'boolean',
            default: false,
          },
          subtitle: {
            type: 'string',
            default: 'h4',
          },
          subtitleTag: {
            type: 'string',
            default: 'h4',
          },
          subtitleTextVariant: {
            type: 'TextColorVariant | null',
            default: undefined,
          },
          title: {
            type: 'string',
            default: 'h4',
          },
          titleTag: {
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
          name: 'title',
          description: '',
          scope: [],
        },
        {
          description: '',
          name: 'subtitle',
          scope: [],
        },
      ],
    },
    {
      component: 'BCardFooter',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
          },
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
          textVariant: {
            type: 'TextColorVariant | null',
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
          text: {
            type: 'string',
            default: undefined,
          },
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
          textVariant: {
            type: 'TextColorVariant | null',
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
          bottom: {
            type: 'boolean',
            default: false,
          },
          top: {
            type: 'boolean',
            default: false,
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
            default: 'body-secondary',
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
      slots: [],
    },
    {
      component: 'BCardText',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'p',
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
          text: {
            type: 'string',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'h4',
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

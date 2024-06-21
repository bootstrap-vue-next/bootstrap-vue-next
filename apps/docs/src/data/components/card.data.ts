import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCard',
      props: [
        {
          prop: 'align',
          type: 'AlignmentTextHorizontal',
          default: undefined,
        },
        {
          prop: 'bgVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'bodyBgVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'bodyClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'bodyTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'bodyTextVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'footer',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'footerBgVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'footerBorderVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'footerClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'footerHtml',
          type: 'string',
          default: '',
        },
        {
          prop: 'footerTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'footerTextVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
        {
          prop: 'header',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'headerBgVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'headerBorderVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'headerHtml',
          type: 'string',
          default: '',
        },
        {
          prop: 'headerTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'headerTextVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
        {
          prop: 'imgAlt',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'imgBottom',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'imgEnd',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'imgHeight',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'imgSrc',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'imgStart',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'imgTop',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'imgWidth',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'noBody',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'overlay',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'subtitle',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'subtitleTag',
          type: 'string',
          default: 'h6',
        },
        {
          prop: 'subtitleTextVariant',
          type: 'TextColorVariant | null',
          default: 'body-secondary',
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'titleTag',
          type: 'string',
          default: 'h6',
        },
        {
          prop: 'bodyText',
          type: 'string',
          default: undefined,
        },
      ],
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
      props: [
        {
          prop: 'bodyBgVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'bodyTag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'bodyTextVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
        {
          prop: 'overlay',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'subtitle',
          type: 'string',
          default: 'h4',
        },
        {
          prop: 'subtitleTag',
          type: 'string',
          default: 'h4',
        },
        {
          prop: 'subtitleTextVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
        {
          prop: 'title',
          type: 'string',
          default: 'h4',
        },
        {
          prop: 'titleTag',
          type: 'string',
          default: 'h4',
        },
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
      ],
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
      props: [
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'bgVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'html',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
      ],
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
      props: [
        {
          prop: 'columns',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'deck',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
      ],
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
      props: [
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'bgVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'html',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant | null',
          default: undefined,
        },
      ],
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
      props: [
        {
          prop: 'bottom',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'top',
          type: 'boolean',
          default: false,
        },
      ],
      slots: [],
    },
    {
      component: 'BCardSubtitle',
      emits: [],
      props: [
        {
          prop: 'text',
          type: 'string',
          default: 'body-secondary',
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'h6',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant | null',
          default: 'body-secondary',
        },
      ],
      slots: [],
    },
    {
      component: 'BCardText',
      emits: [],
      props: [
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'p',
        },
      ],
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
      props: [
        {
          prop: 'text',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'h4',
        },
      ],
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

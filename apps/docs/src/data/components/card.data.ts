import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCard',
      props: [
        {
          prop: 'align',
          type: 'AlignmentTextHorizontal',
        },
        {
          prop: 'bgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'bodyBgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'bodyClass',
          type: 'ClassValue',
        },
        {
          prop: 'bodyTag',
          type: 'string',
        },
        {
          prop: 'bodyTextVariant',
          type: 'TextColorVariant',
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'footer',
          type: 'string',
        },
        {
          prop: 'footerBgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'footerBorderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'footerClass',
          type: 'ClassValue',
        },
        {
          prop: 'footerHtml',
          type: 'string',
        },
        {
          prop: 'footerTag',
          type: 'string',
        },
        {
          prop: 'footerTextVariant',
          type: 'TextColorVariant',
        },
        {
          prop: 'header',
          type: 'string',
        },
        {
          prop: 'headerBgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'headerBorderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'headerClass',
          type: 'ClassValue',
        },
        {
          prop: 'headerHtml',
          type: 'string',
        },
        {
          prop: 'headerTag',
          type: 'string',
        },
        {
          prop: 'headerTextVariant',
          type: 'TextColorVariant',
        },
        {
          prop: 'imgAlt',
          type: 'string',
        },
        {
          prop: 'imgBottom',
          type: 'Booleanish',
        },
        {
          prop: 'imgEnd',
          type: 'Booleanish',
        },
        {
          prop: 'imgHeight',
          type: 'string | number',
        },
        {
          prop: 'imgLeft',
          type: 'Booleanish',
        },
        {
          prop: 'imgRight',
          type: 'Booleanish',
        },
        {
          prop: 'imgSrc',
          type: 'string',
        },
        {
          prop: 'imgStart',
          type: 'Booleanish',
        },
        {
          prop: 'imgTop',
          type: 'Booleanish',
        },
        {
          prop: 'imgWidth',
          type: 'string | number',
        },
        {
          prop: 'noBody',
          type: 'Booleanish',
        },
        {
          prop: 'overlay',
          type: 'Booleanish',
        },
        {
          prop: 'subtitle',
          type: 'string',
        },
        {
          prop: 'subtitleTag',
          type: 'string',
        },
        {
          prop: 'subtitleTextVariant',
          type: 'TextColorVariant',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant',
        },
        {
          prop: 'title',
          type: 'string',
        },
        {
          prop: 'titleTag',
          type: 'string',
        },
        {
          prop: 'bodyText',
          type: 'string',
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
          type: 'ColorVariant',
        },
        {
          prop: 'bodyTag',
          type: 'string',
        },
        {
          prop: 'bodyTextVariant',
          type: 'TextColorVariant',
        },
        {
          prop: 'overlay',
          type: 'Booleanish',
        },
        {
          prop: 'subtitle',
          type: 'string',
        },
        {
          prop: 'subtitleTag',
          type: 'string',
        },
        {
          prop: 'subtitleTextVariant',
          type: 'TextColorVariant',
        },
        {
          prop: 'title',
          type: 'string',
        },
        {
          prop: 'titleTag',
          type: 'string',
        },
        {
          prop: 'text',
          type: 'string',
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
        },
        {
          prop: 'bgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'html',
          type: 'string',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant',
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
          type: 'Booleanish',
        },
        {
          prop: 'deck',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
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
        },
        {
          prop: 'bgVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'borderVariant',
          type: 'ColorVariant',
        },
        {
          prop: 'html',
          type: 'string',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant',
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
          prop: 'alt',
          type: 'string',
        },
        {
          prop: 'bottom',
          type: 'Booleanish',
        },
        {
          prop: 'end',
          type: 'Booleanish',
        },
        {
          prop: 'height',
          type: 'number | string',
        },
        {
          prop: 'left',
          type: 'Booleanish',
        },
        {
          prop: 'right',
          type: 'Booleanish',
        },
        {
          prop: 'src',
          type: 'string',
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
        },
        {
          prop: 'start',
          type: 'Booleanish',
        },
        {
          prop: 'top',
          type: 'Booleanish',
        },
        {
          prop: 'width',
          type: 'number | string',
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
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'textVariant',
          type: 'TextColorVariant',
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
        },
        {
          prop: 'tag',
          type: 'string',
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
        },
        {
          prop: 'tag',
          type: 'string',
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

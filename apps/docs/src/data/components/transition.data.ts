import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTransition',
      props: [
        {
          prop: 'appear',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'mode',
          type: 'TransitionMode',
          default: undefined,
        },
        {
          prop: 'noFade',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'transProps',
          type: 'TransitionProps',
          default: undefined,
        },
      ],
      emits: [],
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

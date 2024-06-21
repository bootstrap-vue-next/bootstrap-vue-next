import type {ComponentReference} from '../../types'

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

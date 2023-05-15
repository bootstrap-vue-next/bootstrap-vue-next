import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTransition',
      props: [
        {
          description: '',
          prop: 'appear',
          type: 'Booleanish',
        },
        {
          description: '',
          prop: 'mode',
          type: 'TransitionMode',
        },
        {
          description: '',
          prop: 'noFade',
          type: 'Booleanish',
        },
        {
          description: '',
          prop: 'transProps',
          type: 'Record<string, unknown>',
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

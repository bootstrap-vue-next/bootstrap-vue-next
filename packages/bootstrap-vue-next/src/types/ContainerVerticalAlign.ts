import type {VerticalAlign} from './VerticalAlign'

export type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' | 'text-bottom'>

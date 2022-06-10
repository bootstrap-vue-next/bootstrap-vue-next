import type {VerticalAlign} from 'src/types'

export type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' | 'text-bottom'>
export type ContainerHorizontalAlign = 'left' | 'center' | 'right'
export type ContainerPosition = `${ContainerVerticalAlign}-${ContainerHorizontalAlign}`

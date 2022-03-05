import type VerticalAlign from './VerticalAlign'

export type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' | 'text-bottom'>
export type ContainerHorizontalAlign = 'left' | 'center' | 'right'
export type ContainerPosition = `${ContainerVerticalAlign}-${ContainerHorizontalAlign}`

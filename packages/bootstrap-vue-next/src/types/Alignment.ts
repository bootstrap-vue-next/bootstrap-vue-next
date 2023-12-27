export type AlignmentCommon = 'start' | 'end' | 'center' | 'fill'

export type AlignmentContent = AlignmentCommon | 'between' | 'around' | 'stretch'

export type AlignmentHorizontal = AlignmentCommon | 'between' | 'around'

export type AlignmentJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'

export type AlignmentTextHorizontal = 'start' | 'end' | 'center'

export type AlignmentVertical = AlignmentCommon | 'baseline' | 'stretch'

export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom'

export type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' | 'text-bottom'>

export type ContainerHorizontalAlign = 'left' | 'center' | 'right'

export type ContainerPosition = `${ContainerVerticalAlign}-${ContainerHorizontalAlign}`

declare type Alignment = 'start' | 'end' | 'center' | 'fill'

declare namespace Alignment {
  type Vertical = Alignment | 'baseline' | 'stretch'
  type Horizontal = Alignment | 'between' | 'around'
  type Content = Alignment | 'between' | 'around' | 'stretch'
}

export default Alignment

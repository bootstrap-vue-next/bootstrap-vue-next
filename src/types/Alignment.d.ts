declare type Alignment = 'start' | 'end' | 'center' | 'fill'

declare namespace Alignment {
  type Vertical = Alignment | 'baseline' | 'strech'
  type Horizontal = Alignment | 'between' | 'around'
  type Content = Alignment | 'between' | 'around' | 'stretch'
}

export default Alignment

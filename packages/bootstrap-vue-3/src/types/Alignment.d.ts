/**
 * @external
 */
declare type CommonAlignment = 'start' | 'end' | 'center' | 'fill'

declare namespace Alignment {
  type Vertical = CommonAlignment | 'baseline' | 'stretch'
  type Horizontal = CommonAlignment | 'between' | 'around'
  type Content = CommonAlignment | 'between' | 'around' | 'stretch'
  type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  type TextHorizontal = 'start' | 'end' | 'center'
}

export default Alignment

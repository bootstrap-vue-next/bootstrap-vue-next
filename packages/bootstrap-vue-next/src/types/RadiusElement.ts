import type {Booleanish} from '.'

export type RadiusElement =
  | 'circle'
  | 'pill'
  | 'none'
  | 'sm'
  | 'lg'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5

export type RadiusElementExtendables = {
  rounded?: RadiusElement | Booleanish
  roundedTop?: RadiusElement | Booleanish
  roundedBottom?: RadiusElement | Booleanish
  roundedStart?: RadiusElement | Booleanish
  roundedEnd?: RadiusElement | Booleanish
}

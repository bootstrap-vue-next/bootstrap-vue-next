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
  rounded?: RadiusElement | boolean
  roundedTop?: RadiusElement | boolean
  roundedBottom?: RadiusElement | boolean
  roundedStart?: RadiusElement | boolean
  roundedEnd?: RadiusElement | boolean
}

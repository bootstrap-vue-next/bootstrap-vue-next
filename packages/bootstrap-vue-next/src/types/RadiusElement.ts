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
  rounded?: boolean | RadiusElement
  roundedTop?: boolean | RadiusElement
  roundedBottom?: boolean | RadiusElement
  roundedStart?: boolean | RadiusElement
  roundedEnd?: boolean | RadiusElement
}

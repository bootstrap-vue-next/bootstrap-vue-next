---
sidebar: auto
---

# Types

`BootstrapVue3` born with Typescript in mind. This is a list of types we use in this library and that you can use too:

## Alignment

```ts
type Alignment = 'start' | 'end' | 'center' | 'fill'
namespace Alignment {
  type Vertical = Alignment | 'baseline' | 'stretch'
  type Horizontal = Alignment | 'between' | 'around'
  type Content = Alignment | 'between' | 'around' | 'stretch'
}
```

## Booleanish

```ts
type Booleanish = 'true' | 'false' | '' | boolean
```

## BodyProp

* This type is only used for the Toast component

```ts
type BodyProp = string | VNode<RendererNode, RendererElement, {
    [key: string]: any;
}> | undefined
```

## BPopoverDelayObject

* This type is only used for the Popover component

```ts
interface BPopoverDelayObject {
  show: number
  hide: number
}
```

## BreadcrumbItem

* This type is only used for the Breadcrumb component

```ts
interface BreadcrumbItemObject {
  active?: boolean
  disabled?: boolean
  href?: string
  text: string
  to?: string | Record<string, any>
}
type BreadcrumbItem = BreadcrumbItemObject | string
```

## Breakpoint

```ts
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
```

## ButtonType

```ts
type ButtonType = 'button' | 'submit' | 'reset'
```

## ButtonVariant

```ts
type ButtonVariant =
  | ColorVariant
  | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-light'
  | 'outline-dark'
```

## ColorVariant

```ts
type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
```

## ContainerPosition

```ts
type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' | 'text-bottom'>
type ContainerHorizontalAlign = 'left' | 'center' | 'right'
type ContainerPosition = `${ContainerVerticalAlign}-${ContainerHorizontalAlign}`
```

## InputSize

```ts
type InputSize = 'sm' | 'md' | 'lg'
```

## InputType

```ts
type InputType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'search'
  | 'url'
  | 'tel'
  | 'date'
  | 'time'
  | 'range'
  | 'color'
```

## LinkTarget

```ts
type LinkTarget = '_self' | '_blank' | '_parent' | '_top'
```

## Position

```ts
type Position =
  | 'position-static'
  | 'position-relative'
  | 'position-absolute'
  | 'position-fixed'
  | 'position-sticky'
```

## Size

```ts
type Size = 'sm' | 'lg' | undefined
```

## SkeletonAnimation

```ts
type SkeletonAnimation = boolean | 'wave' | 'fade' | 'throb'
```

## SkeletonType

```ts
type SkeletonType = 'text' | 'avatar' | 'input' | 'button'
```

## SpinnerType

```ts
type SpinnerType = 'border' | 'grow'
```

## TableField

```ts
interface TableFieldObject<T = Record<string, unknown>> {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: string | string[]
  formatter?: string | ((value: string, key?: string, item?: T) => string)
  sortable?: boolean
  sortKey?: string
  sortDirection?: string
  sortByFormatted?: boolean
  filterByFormatted?: boolean
  tdClass?: string | string[]
  thClass?: string | string[]
  thStyle?: StyleValue
  variant?: ColorVariant
  tdAttr?: TdHTMLAttributes
  thAttr?: ThHTMLAttributes
  isRowHeader?: boolean
  stickyColumn?: boolean
}
type TableField<T = Record<string, unknown>> = string | TableFieldObject<T>
```

## TableItem

```ts
type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
}
```

## TextColorVariant

```ts
type TextColorVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'white'
  | 'body'
  | 'muted'
  | 'black-50'
  | 'white-50'
  | 'reset'
```

## TransitionMode

```ts
type TransitionMode = 'in-out' | 'out-in'
```

## VerticalAlign

```ts
type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom'
```

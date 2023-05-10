# Types

`BootstrapVueNext` is a complete rewrite that strives for full TypeScript compatibility. This is a list of types we use in this library and that you can use too:

## Alignment

```ts
type CommonAlignment = 'start' | 'end' | 'center' | 'fill'
type Vertical = CommonAlignment | 'baseline' | 'stretch'
type Horizontal = CommonAlignment | 'between' | 'around'
type Content = CommonAlignment | 'between' | 'around' | 'stretch'
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
type TextHorizontal = 'start' | 'end' | 'center'
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
  | 'datetime'
  | 'datetime-local'
  | 'month'
  | 'week'
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
type Size = 'sm' | 'md' | 'lg'
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

## Extending types

You can extend some types to use your own values (e.g. colors, sizes). This requires the use of interface augmentation. You can augment next interfaces:

* BaseColorVariant
* BaseButtonVariant (extends BaseColorVariant)
* BaseTextColorVariant (extends BaseColorVariant)
* BaseSize

Suppose we want to add a purple style and extra-large (xl) sizes.
We need to create a declaration file in the root of vue project.

```ts
// shims-bootstrap-vue-next.d.ts

import 'bootstrap-vue-next'

declare module 'bootstrap-vue-next/dist/src/types' {
  export interface BaseColorVariant {
    'purple': unknown // we use unknown type because it does not matter here
  }
  export interface BaseButtonVariant {
    // there is no need to add "purple" (it inherits from BaseColorVariant)
    'outline-purple': unknown // outline purple button
  }
  export interface BaseTextColorVariant {
    // there is no need to add "purple" (it inherits from BaseColorVariant)
  }
  export interface BaseSize {
    'xl': unknown // extra large
  }
}
```

New values can be used now and the type check will be successful:

```html
<b-button variant="purple" size="xl">Extra large purple button</b-button>
<b-button variant="outline-purple">Outline purple button</b-button>
```

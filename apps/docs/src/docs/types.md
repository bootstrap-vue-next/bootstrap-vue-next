# Types

<div class="lead mb-5">

`BootstrapVueNext` is a complete rewrite that strives for full TypeScript compatibility. This is a list of types we use in this library and that you can use too.

</div>

## Alignment

<BCard class="bg-body-tertiary">

```ts
type AlignmentCommon = 'start' | 'end' | 'center' | 'fill'
type AlignmentContent = AlignmentCommon | 'between' | 'around' | 'stretch'
type AlignmentHorizontal = AlignmentCommon | 'between' | 'around'
type AlignmentJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
type AlignmentTextHorizontal = 'start' | 'end' | 'center'
type AlignmentVertical = AlignmentCommon | 'baseline' | 'stretch'
type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom'
type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' | 'text-bottom'>
type ContainerHorizontalAlign = 'start' | 'center' | 'end'
type ContainerPosition = `${ContainerVerticalAlign}-${ContainerHorizontalAlign}`
```

</BCard>

## AriaInvalid

<BCard class="bg-body-tertiary">

```ts
type AriaInvalid = boolean | 'grammar' | 'spelling'
```

</BCard>

## AttrsValue

<BCard class="bg-body-tertiary">

```ts
type AttrsValue = Record<string, any>
```

</BCard>

## BodyProp

This type is only used for the Toast component.

<BCard class="bg-body-tertiary">

```ts
type BodyProp =
  | string
  | VNode<
      RendererNode,
      RendererElement,
      {
        [key: string]: any
      }
    >
  | undefined
```

</BCard>

## BreadcrumbItem

This type is only used for the Breadcrumb component.

<BCard class="bg-body-tertiary">

```ts
interface BreadcrumbItem {
  active?: boolean
  disabled?: boolean
  href?: string
  text: string
  to?: string | Record<string, any>
}
type BreadcrumbItemRaw = BreadcrumbItem | string
```

</BCard>

## Breakpoint

<BCard class="bg-body-tertiary">

```ts
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
```

</BCard>

## ButtonType

<BCard class="bg-body-tertiary">

```ts
type ButtonType = 'button' | 'submit' | 'reset'
```

</BCard>

## ButtonVariant

<BCard class="bg-body-tertiary">

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

</BCard>

## CheckboxOption

<BCard class="bg-body-tertiary">

```ts
type CheckboxOption = {
  text: string
  value: CheckboxValue
  disabled?: boolean
}
```

</BCard>

## CheckboxOptionRaw

<BCard class="bg-body-tertiary">

```ts
type CheckboxOptionRaw = string | number | (Partial<CheckboxOption> & Record<string, unknown>)
```

</BCard>

## CheckboxValue

<BCard class="bg-body-tertiary">

```ts
type CheckboxValue =
  | readonly unknown[]
  | ReadonlySet<unknown>
  | string
  | boolean
  | Readonly<Record<string, unknown>>
  | number
  | null
```

</BCard>

## ClassValue

<BCard class="bg-body-tertiary">

```ts
export type ClassValue = any
```

</BCard>

## ColorVariant

<BCard class="bg-body-tertiary">

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

</BCard>

## ColsNumbers

<BCard class="bg-body-tertiary">

```ts
export type ColsBaseNumbers = 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5'

export type ColsNumbers =
  | ColsBaseNumbers
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

export type GutterNumbers = ColsBaseNumbers | 0 | '0'

export type ColsOrderNumbers = ColsBaseNumbers | 'first' | 'last'

export type ColsOffsetNumbers = ColsNumbers | 0 | '0'
```

</BCard>

## CombinedPlacement

<BCard class="bg-body-tertiary">

```ts
type CombinedPlacement = Placement | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
```

</BCard>

## ContainerPosition

<BCard class="bg-body-tertiary">

```ts
type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' | 'text-bottom'>
type ContainerHorizontalAlign = 'left' | 'center' | 'right'
type ContainerPosition = `${ContainerVerticalAlign}-${ContainerHorizontalAlign}`
```

</BCard>

## InputType

<BCard class="bg-body-tertiary">

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

</BCard>

## LinkDecorators

<BCard class="bg-body-tertiary">

```ts
type LinkOpacity = 10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'
type UnderlineOpacity = 0 | '0' | LinkOpacity
type UnderlineOffset = 1 | 2 | 3 | '1' | '2' | '3'
```

</BCard>

## LinkTarget

<BCard class="bg-body-tertiary">

```ts
type LinkTarget = '_self' | '_blank' | '_parent' | '_top'
```

</BCard>

## MaybePromise

<BCard class="bg-body-tertiary">

```ts
type MaybePromise<T> = Promise<T> | T
```

</BCard>

## Placement

<BCard class="bg-body-tertiary">

```ts
type Placement = 'top' | 'bottom' | 'start' | 'end'
```

</BCard>

## Position

<BCard class="bg-body-tertiary">

```ts
type Position =
  | 'position-static'
  | 'position-relative'
  | 'position-absolute'
  | 'position-fixed'
  | 'position-sticky'
```

</BCard>

## PopoverPlacement

<BCard class="bg-body-tertiary">

```ts
type PopoverPlacement = Placement | 'auto' | 'auto-start' | 'auto-end'
```

</BCard>

Where `Placement` is defined in [@floating-ui/vue](https://floating-ui.com/) as

<BCard class="bg-body-tertiary">

```ts
type Placement =
  | 'top'
  | 'bottom'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'
```

</BCard>

## RadioOption

<BCard class="bg-body-tertiary">

```ts
type RadioOption = {
  text: string
  value: RadioValue
  disabled?: boolean
}
```

</BCard>

## RadioOptionRaw

<BCard class="bg-body-tertiary">

```ts
type RadioOptionRaw = string | number | (Partial<RadioOption> & Record<string, unknown>)
```

</BCard>

## RadioValue

<BCard class="bg-body-tertiary">

```ts
type RadioValue =
  | boolean
  | string
  | readonly unknown[]
  | Readonly<Record<string, unknown>>
  | number
  | null
```

</BCard>

## RadiusElement

<BCard class="bg-body-tertiary">

```ts
type RadiusElement =
  | 'circle'
  | 'pill'
  | 'none'
  | 'sm'
  | 'md'
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
```

</BCard>

## RadiusElementExtendables

<BCard class="bg-body-tertiary">

```ts
type RadiusElementExtendables = {
  rounded?: boolean | RadiusElement
  roundedTop?: boolean | RadiusElement
  roundedBottom?: boolean | RadiusElement
  roundedStart?: boolean | RadiusElement
  roundedEnd?: boolean | RadiusElement
}
```

</BCard>

## SelectValue

<BCard class="bg-body-tertiary">

```ts
type SelectValue =
  | boolean
  | string
  | readonly unknown[]
  | Readonly<Record<string, unknown>>
  | number
  | null
```

</BCard>

## Size

<BCard class="bg-body-tertiary">

```ts
type Size = 'sm' | 'md' | 'lg'
```

</BCard>

## SpinnerType

<BCard class="bg-body-tertiary">

```ts
type SpinnerType = 'border' | 'grow'
```

</BCard>

## TableField

<BCard class="bg-body-tertiary">

```ts
type TableFieldFormatter<T = any> =
  | string
  | ((value: unknown, key?: LiteralUnion<keyof T>, item?: T) => string)

type TableFieldAttribute<T = any> =
  | Record<string, unknown>
  | ((value: unknown, key?: LiteralUnion<keyof T>, item?: T) => Record<string, unknown>)

type TableRowType = 'row' | 'row-details' | 'row-top' | 'row-bottom' | 'table-busy'
type TableRowThead = 'top' | 'bottom'

interface TableField<T = Record<string, unknown>> {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: ClassValue
  formatter?: TableFieldFormatter<T>
  sortable?: boolean
  sortByFormatted?: boolean | TableFieldFormatter<T>
  filterByFormatted?: boolean | TableFieldFormatter<T>
  tdClass?: ClassValue
  thClass?: ClassValue
  thStyle?: StyleValue
  variant?: ColorVariant | null
  tdAttr?: TableFieldAttribute<T>
  thAttr?: TableFieldAttribute<T>
  isRowHeader?: boolean
  stickyColumn?: boolean
}
type TableFieldRaw<T = Record<string, unknown>> = string | TableField<T>
```

</BCard>

## TableItem

<BCard class="bg-body-tertiary">

```ts
type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
}
```

</BCard>

## TableProvider

```ts
type BTableProviderContext<T = unknown> = {
  sortBy: BTableSortBy<T>[] | undefined
  filter: string | undefined
  currentPage: number
  perPage: number
}

type BTableProvider<T> = (
  context: Readonly<BTableProviderContext<T>>
) => MaybePromise<T[] | undefined>
```

## TableSortBy

<BCard class="bg-body-tertiary">

```ts
type BTableSortByOrder = 'desc' | 'asc' | undefined
type BTableSortByComparerFunction<T = any> = (a: T, b: T, key: string) => number
type BTableSortBy<T = any> = {
  order: BTableSortByOrder
  key: string
  comparer?: BTableSortByComparerFunction<T>
}
```

</BCard>

## TextColorVariant

<BCard class="bg-body-tertiary">

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

</BCard>

## TransitionMode

<BCard class="bg-body-tertiary">

```ts
type TransitionMode = 'in-out' | 'out-in'
```

</BCard>

## VerticalAlign

<BCard class="bg-body-tertiary">

```ts
type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom'
```

</BCard>

## Extending types

You can extend some types to use your own values (e.g. colors, sizes). This requires the use of interface augmentation. You can augment next interfaces:

- BaseColorVariant
- BaseButtonVariant (extends BaseColorVariant)
- BaseTextColorVariant (extends BaseColorVariant)
- BaseSize

Suppose we want to add a purple style and extra-large (xl) sizes.
We need to create a declaration file in the root of vue project.

<BCard class="bg-body-tertiary">

```ts
// shims-bootstrap-vue-next.d.ts

import 'bootstrap-vue-next'

declare module 'bootstrap-vue-next/dist/src/types' {
  export interface BaseColorVariant {
    purple: unknown // we use unknown type because it does not matter here
  }
  export interface BaseButtonVariant {
    // there is no need to add "purple" (it inherits from BaseColorVariant)
    'outline-purple': unknown // outline purple button
  }
  export interface BaseTextColorVariant {
    // there is no need to add "purple" (it inherits from BaseColorVariant)
  }
  export interface BaseSize {
    xl: unknown // extra large
  }
}
```

</BCard>

New values can be used now and the type check will be successful:

<BCard class="bg-body-tertiary">

```vue-html
<BButton variant="purple" size="xl">Extra large purple button</BButton>
<BButton variant="outline-purple">Outline purple button</BButton>
```

</BCard>

<script setup lang="ts">
import {BCard, BCardBody} from 'bootstrap-vue-next'
</script>

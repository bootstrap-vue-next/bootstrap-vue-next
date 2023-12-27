# Types

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

`BootstrapVueNext` is a complete rewrite that strives for full TypeScript compatibility. This is a list of types we use in this library and that you can use too.

</div>

## Alignment

<BCard class="bg-body-tertiary">

```ts
type CommonAlignment = 'start' | 'end' | 'center' | 'fill'
type Vertical = CommonAlignment | 'baseline' | 'stretch'
type Horizontal = CommonAlignment | 'between' | 'around'
type Content = CommonAlignment | 'between' | 'around' | 'stretch'
type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
type TextHorizontal = 'start' | 'end' | 'center'
```

</BCard>

## Booleanish

<BCard class="bg-body-tertiary">

```ts
type Booleanish = 'true' | 'false' | '' | boolean
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

## LinkTarget

<BCard class="bg-body-tertiary">

```ts
type LinkTarget = '_self' | '_blank' | '_parent' | '_top'
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

interface TableField<T = Record<string, unknown>> {
  key: LiteralUnion<keyof T>
  label?: string
  headerTitle?: string
  headerAbbr?: string
  class?: string | string[]
  formatter?: TableFieldFormatter
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

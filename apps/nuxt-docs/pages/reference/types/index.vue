<template>
  <BContainer>
    <BRow>
      <BCol>
        <h1>Types</h1>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <HighlightedText>BootstrapVueNext</HighlightedText> is a complete rewrite that strives for
        full TypeScript compatibility. This is a list of types we use in this library and that you
        can use too:
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>Alignment</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          type CommonAlignment = 'start' | 'end' | 'center' | 'fill' type Vertical = CommonAlignment
          | 'baseline' | 'stretch' type Horizontal = CommonAlignment | 'between' | 'around' type
          Content = CommonAlignment | 'between' | 'around' | 'stretch' type JustifyContent = 'start'
          | 'end' | 'center' | 'between' | 'around' | 'evenly' type TextHorizontal = 'start' | 'end'
          | 'center'
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>Booleanish</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock> type Booleanish = 'true' | 'false' | '' | boolean </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>BodyProp</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <ul>
          <li>This type is only used for the Toast component</li>
        </ul>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <!-- <CodeBlock> type BodyProp = string | VNode<RendererNode,
RendererElement, {
    [key: string]: any;
}> | undefined </CodeBlock> -->
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>BPopoverDelayObject</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <ul>
          <li>This type is only used for the Popover component</li>
        </ul>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock> interface BPopoverDelayObject { show: number hide: number } </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>BreadcrumbItem</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <ul>
          <li>This type is only used for the Breadcrumb component</li>
        </ul>
      </BCol>
    </BRow>

    <BRow>
      <!-- <BCol> <CodeBlock> interface BreadcrumbItemObject {
  active?: boolean
  disabled?: boolean
  href?: string
  text: string
  to?: string | Record<string, any>
}
type BreadcrumbItem = BreadcrumbItemObject | string </CodeBlock></BCol> -->
    </BRow>

    <BRow>
      <BCol>
        <h2>Breakpoint</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock> type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>ButtonType</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock> type ButtonType = 'button' | 'submit' | 'reset' </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>ButtonVariant</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          type ButtonVariant = | ColorVariant | 'link' | 'outline-primary' | 'outline-secondary' |
          'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' |
          'outline-light' | 'outline-dark'
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>ColorVariant</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          type ColorVariant = | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
          | 'light' | 'dark'
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>ContainerPosition</h2>
      </BCol>
    </BRow>

    <BRow>
      <!-- <BCol>
        <CodeBlock>
        type ContainerVerticalAlign = Exclude<VerticalAlign, 'baseline' | 'text-top' |
        'text-bottom'> type ContainerHorizontalAlign = 'left' | 'center' | 'right' type
        ContainerPosition = `${ContainerVerticalAlign}-${ContainerHorizontalAlign}`
        </CodeBlock>
      </BCol> -->
    </BRow>

    <BRow>
      <BCol>
        <h2>InputType</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          type InputType = | 'text' | 'number' | 'email' | 'password' | 'search' | 'url' | 'tel' |
          'date' | 'time' | 'range' | 'color' | 'datetime' | 'datetime-local' | 'month' | 'week'
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>LinkTarget</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock> type LinkTarget = '_self' | '_blank' | '_parent' | '_top' </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>Position</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol
        ><CodeBlock>
          type Position = | 'position-static' | 'position-relative' | 'position-absolute' |
          'position-fixed' | 'position-sticky'
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>Size</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol> <CodeBlock> type Size = 'sm' | 'md' | 'lg' </CodeBlock></BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>SpinnerType</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol> <CodeBlock> type SpinnerType = 'border' | 'grow' </CodeBlock> </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>TableField</h2>
      </BCol>
    </BRow>

    <BRow>
      <!-- <BCol> <CodeBlock> interface TableFieldObject<T = Record<string, unknown>> {
  key: LiteralUnion<keyof t>
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
type TableField<T = Record<string, unknown>> = string | TableFieldObject<T/> </CodeBlock> </BCol> -->
    </BRow>

    <BRow>
      <BCol>
        <h2>TableItem</h2>
      </BCol>
    </BRow>

    <BRow>
      <!-- <BCol> <CodeBlock> type TableItem<T = Record<string, unknown>> = T & {
  _rowVariant?: ColorVariant
  _cellVariants?: Partial<Record<keyof T, ColorVariant>>
  _showDetails?: boolean
} </CodeBlock> </BCol> -->
    </BRow>

    <BRow>
      <BCol>
        <h2>TextColorVariant</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          type TextColorVariant = | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' |
          'info' | 'light' | 'dark' | 'white' | 'body' | 'muted' | 'black-50' | 'white-50' | 'reset'
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>TransitionMode</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol> <CodeBlock>type TransitionMode = 'in-out' | 'out-in'</CodeBlock> </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>VerticalAlign</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom'
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h2>Extending Types</h2>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        You can extend some types to use your own values (e.g. colors, sizes). This requires the use
        of interface augmentation. You can augment next interfaces:
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <ul>
          <li>BaseColorVariant</li>
          <li>BaseButtonVariant (extends BaseColorVariant)</li>
          <li>BaseTextColorVariant (extends BaseColorVariant)</li>
          <li>BaseSize</li>
        </ul>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        Suppose we want to add a purple style and extra-large (xl) sizes. We need to create a
        declaration file in the root of vue project.
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          // shims-bootstrap-vue-next.d.ts import 'bootstrap-vue-next' declare module
          'bootstrap-vue-next/dist/types' { export interface BaseColorVariant { 'purple': unknown //
          we use unknown type because it does not matter here } export interface BaseButtonVariant {
          // there is no need to add "purple" (it inherits from BaseColorVariant) 'outline-purple':
          unknown // outline purple button } export interface BaseTextColorVariant { // there is no
          need to add "purple" (it inherits from BaseColorVariant) } export interface BaseSize {
          'xl': unknown // extra large } }
        </CodeBlock>
      </BCol>
    </BRow>

    <BRow>
      <BCol> New values can be used now and the type check will be successful: </BCol>
    </BRow>

    <BRow>
      <BCol>
        <CodeBlock>
          <!-- <b-button variant="purple" size="xl">Extra large purple button</b-button>
<b-button variant="outline-purple">Outline purple button</b-button> -->
        </CodeBlock>
      </BCol>
    </BRow>
  </BContainer>
</template>

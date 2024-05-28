# Tooltip

<ContentsSidebar>

[[toc]]

</ContentsSidebar>
<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip="'My title'" />
<BCard v-b-tooltip="{title: 'My title'}" />
<BCard v-b-tooltip.hover.top="'My title'" />
<BCard v-b-tooltip.focus.right="{title: 'My title'}" />
```

</BCard>

As shown above, the BoostrapVueNext directive named `b-tooltip` should have a value, and optionally one or more modifiers. The general format for directives is is:

```vue-html
v-{name}.{modifier1}.{modifier2}.{etc.}={value}.
```

## Triggers modifiers

We can define when we want to trigger a tooltip with the following modifiers.

- click
- hover
- focus
- manual
- click

If we do not specify any modifiers, the tooltip is by default enabled for "hover" and "focus".

## Placement modifiers

We can specify where to place the tooltip with the following modifiers.

- left
- right
- bottom
- top

If we do not define any modifier, the placement will be "top".

## Value

The tooltip text is specified in the value, but remember that what is inside the "" is interpreted in Javascript, not as a string literal. So if you want have your tooltip say "My title", then you must use an extra pair of quotes, e.g. '', inside the "":

```vue-html
<BCard v-b-tooltip="'My title'" />
```

If you want to refer to the reactive variable `userSurname`, you would do this:

```vue-html
<BCard v-b-tooltip="userSurname" />
```

In general, the value can be an object, a string, a function, or an element.

<BCard class="bg-body-tertiary">

```ts
/**
 * Default title value if title attribute is not present.
 *
 * If a function is given, it will be called with its this reference set
 * to the element that the popover is attached to.
 *
 * @default ''
 */
title: string | Element | JQuery | ((this: HTMLElement) => string | Element | JQuery)
```

</BCard>

The object interface is the most flexible, alllowing these options:

<BCard class="bg-body-tertiary">

```ts
interface ValueObject {
  delay?: number // default: 0
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
  title?: string
  trigger?:
    | 'click'
    | 'hover'
    | 'focus'
    | 'manual'
    | 'click hover'
    | 'click focus'
    | 'hover focus'
    | 'click hover focus'
}
```

</BCard>

## Delay

The delay to displaying (and hiding) the tooltip, in millisceonds. The default is 0.

## Pitfalls

When we are using a directive, we have two ways to define the title to use in the tooltip.

### Incorrect use

<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip.hover.top title="my title" />
```

</BCard>

- First example it is using the property from BCard "title", this property is going to render something like:

<BCard class="bg-body-tertiary">

```vue-html
<div class="card">
  <div/> // header
    <div title="my title">
      //something here
    </div>
  </div> // footer
</div>
```

</BCard>

Where our title is going to be attached to a child element, but the custom directive is attached to our parent div with class "card".

So, it is not going to work, and we are going to see a warning in the developer's console.

<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip.hover.top="my title" />
```

</BCard>

Here we are not using a string, because is reading ts or js code. So, we need to set a literal string, a variable, function or so on.

## Correct use

In that cases is working when the title is created in the root component, like this example:

<BCard class="bg-body-tertiary">

```vue-html
<div v-b-tooltip.hover.top title="my title">
 //something
</div>
```

</BCard>

<BCard class="bg-body-tertiary">

```vue-html
<div class="card" title="my title">
    //something here
</div>
```

</BCard>

In that case, the directive is detecting the title value, and it is going to be used correctly.

<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip.hover.top="'my title'" />
```

</BCard>

We should use the value type when the component is not setting to the root component a title. Notice that we should use ts/js code, a variable and so on.

<script setup lang="ts">
import {BCard, BCardBody} from 'bootstrap-vue-next'
import ContentsSidebar from '../../components/ContentsSidebar.vue'
</script>

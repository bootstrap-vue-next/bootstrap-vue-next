# Tooltip

```vue-html
<b-card v-b-tooltip="'My title'" />
<b-card v-b-tooltip="{title: 'My title'}" />
<b-card v-b-tooltip.hover.top="'My title'" />
<b-card v-b-tooltip.focus.right="{title: 'My title'}" />
```

A directive is composed by modifiers and a value, like the examples above.
The anatomy of directive is: v-{name}.{modifier1}.{modifier2}.{etc.}={value}.

So, here we are defining to use the directive "b-tooltip", with different optional modifiers, and an optional value.

## Triggers modifiers

We can define when we want to trigger a tooltip with the following modifiers.

* click
* hover
* focus
* manual

If we don't define any modifier by default is enabled "hover" and "focus".

## Placement modifiers

We can define when we want to placement a tooltip with the following modifiers.

* left
* right
* bottom
* top

If we don't define any modifier by default is enabled "top".

## Value

A tooltip text could be defined using the value. If we remember the anatomy of a custom directive, we can define at a value.
With a value we can use an object, a string, a function, or an element.

```ts
        /**
         * Default title value if title attribute isn't present.
         *
         * If a function is given, it will be called with its this reference set
         * to the element that the popover is attached to.
         *
         * @default ''
         */
        title: string | Element | JQuery | ((this: HTMLElement) => string | Element | JQuery);
```

If we want to use an object, we should use the following interface:

```ts
interface ValueObject {
    delay?: number; // default: 0
    placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    trigger?: | 'click'
            | 'hover'
            | 'focus'
            | 'manual'
            | 'click hover'
            | 'click focus'
            | 'hover focus'
            | 'click hover focus';
}
```

## Delay

We can define a delay to display the tooltip, in that case we need to use the object value format, if not by default it's used 0.

## Pitfalls

When we are using a directive, we have two ways to define the title to use in the tooltip.

### Incorrect use

````vue-html
<b-card v-b-tooltip.hover.top title="my title" />
````

* First example it's using the property from BCard "title", this property is going to render something like:

```vue-html
<div class="card">
    <div/> // header
    <div title="my title">
        //something here
    </div>
    </div> // footer
</div>
```

Where our title is going to be attached to a child element, but the custom directive is attached to our parent div with class "card".
So, it's not going to work, and we are going to see a warning in the developer's console.

````vue-html
<b-card v-b-tooltip.hover.top="my title" />
````

Here we are not using a string, because is reading ts or js code. So, we need to set a literal string, a variable, function or so on

## Correct use

In that cases is working when the title is created in the root component, like this example:

````vue-html
<div v-b-tooltip.hover.top title="my title">
 //something
</div>
````

```vue-html
<div class="card" title="my title">
    //something here
</div>
```

In that case, the directive is detecting the title value, and it's going to be used correctly.

````vue-html
<b-card v-b-tooltip.hover.top="'my title'" />
````

We should use the value type when the component is not setting to the root component a title. Notice that we should use ts/js code, a variable and so on

# Button Group

> Group a series of buttons together on a single line or stack them in a vertical column with `<b-button-group>`.

## Overview

Button Groups are an easy way to group a series of buttons together.

<ClientOnly>
  <b-card>
    <div>
      <b-button-group aria-label="Basic example">
        <b-button>Button 1</b-button>
        <b-button>Button 2</b-button>
        <b-button>Button 3</b-button>
      </b-button-group>
    </div>
    <div class="mt-3">
      <b-button-group>
        <b-button variant="success">Success</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="warning">Warning</b-button>
      </b-button-group>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group>
      <b-button variant="success">Success</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="warning">Warning</b-button>
    </b-button-group>
  </div>
</b-card>
```

**Note:**
In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. bootstrap-vue-next will put the `role="group"` and `aria-role` attributes on the groups. By default, `aria-role` is set to `group`, but you can override that with the `aria-role` property.

In addition, groups should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.

## Sizing

Set the `size` prop to `lg` or `sm` to render larger or smaller, respectively, buttons. There is no
need to specify the size on the individual buttons.

<ClientOnly>
  <b-card>
    <div>
      <b-button-group>
        <b-button>Button 1</b-button>
        <b-button>Button 2</b-button>
        <b-button>Button 3</b-button>
      </b-button-group>
    </div>
    <div class="mt-3">
      <b-button-group size="sm">
        <b-button>Left</b-button>
        <b-button>Middle</b-button>
        <b-button>Right</b-button>
      </b-button-group>
    </div>
    <div class="mt-3">
      <b-button-group size="lg">
        <b-button>Left</b-button>
        <b-button>Middle</b-button>
        <b-button>Right</b-button>
      </b-button-group>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group size="sm">
      <b-button>Left</b-button>
      <b-button>Middle</b-button>
      <b-button>Right</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group size="lg">
      <b-button>Left</b-button>
      <b-button>Middle</b-button>
      <b-button>Right</b-button>
    </b-button-group>
  </div>
</b-card>
```

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally by setting the `vertical`
prop. Split button dropdowns are not supported here.

<ClientOnly>
  <b-card>
    <div>
      <b-button-group vertical>
        <b-button>Top</b-button>
        <b-button>Middle</b-button>
        <b-button>Bottom</b-button>
      </b-button-group>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-button-group vertical>
      <b-button>Top</b-button>
      <b-button>Middle</b-button>
      <b-button>Bottom</b-button>
    </b-button-group>
  </div>
</b-card>
```

## Dropdown menu support

Add [`<b-dropdown>`](/docs/components/dropdown) menus directly inside your `<b-button-group>`. Note
that split dropdown menus are not supported when prop `vertical` is set.

<ClientOnly>
  <b-card>
    <div>
      <b-button-group>
        <b-button>Button</b-button>
        <b-dropdown right text="Menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
        <b-dropdown right split text="Split Menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-button-group>
      <b-button>Button</b-button>
      <b-dropdown right text="Menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-dropdown right split text="Split Menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
    </b-button-group>
  </div>
</b-card>
```

## See also

Also check out the [`<b-button-toolbar>`](/docs/components/button-toolbar) component for generating
toolbars containing button groups and input groups.

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

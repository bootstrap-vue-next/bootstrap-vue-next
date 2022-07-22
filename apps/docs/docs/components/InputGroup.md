# Input Group

> Easily extend form controls by adding text, buttons, or button groups on either side of textual
> inputs.

<ClientOnly>
  <b-card>
    <div>
      <!-- Using props -->
      <b-input-group size="lg" prepend="$" append=".00">
        <b-form-input></b-form-input>
      </b-input-group>
      <!-- Using slots -->
      <b-input-group class="mt-3">
        <template #append>
          <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
        </template>
        <b-form-input></b-form-input>
      </b-input-group>
      <!-- Using components -->
      <b-input-group prepend="Username" class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success">Button</b-button>
          <b-button variant="info">Button</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>  
  </b-card>
</ClientOnly>

```html
<div>
  <!-- Using props -->
  <b-input-group size="lg" prepend="$" append=".00">
    <b-form-input></b-form-input>
  </b-input-group>
  <!-- Using slots -->
  <b-input-group class="mt-3">
    <template #append>
      <b-input-group-text><strong class="text-danger">!</strong></b-input-group-text>
    </template>
    <b-form-input></b-form-input>
  </b-input-group>
  <!-- Using components -->
  <b-input-group prepend="Username" class="mt-3">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-success">Button</b-button>
      <b-button variant="info">Button</b-button>
    </b-input-group-append>
  </b-input-group>
</div>
```

## Usage

You can attach addons using either props, named slots and/or sub-components.

**Note** Bootstrap 5 dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups. The sub-components are added for compatibility reasons.

### Using `prepend` and `append` props

Values will be internally wrapped by a `<b-input-group-text>` to display correctly.

<ClientOnly>
  <b-card>
    <div>
      <b-input-group prepend="$" append=".00">
        <b-form-input></b-form-input>
      </b-input-group>
      <b-input-group prepend="0" append="100" class="mt-3">
        <b-form-input type="range" min="0" max="100"></b-form-input>
      </b-input-group>
    </div>  
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group prepend="$" append=".00">
    <b-form-input></b-form-input>
  </b-input-group>
  <b-input-group prepend="0" append="100" class="mt-3">
    <b-form-input type="range" min="0" max="100"></b-form-input>
  </b-input-group>
</div>
```

### Using named slots

if you want better control over addons, you can use `prepend` and `append` slots instead.

The slot content will automatically be wrapped by
[`<b-input-group-prepend>` or `<b-input-group-append>`](#using-sub-components) to display correctly.

<ClientOnly>
  <b-card>
    <div>
      <b-input-group>
        <template #prepend>
          <b-input-group-text >Username</b-input-group-text>
        </template>
        <b-form-input></b-form-input>
        <template #append>
          <b-dropdown text="Dropdown" variant="success">
            <b-dropdown-item>Action A</b-dropdown-item>
            <b-dropdown-item>Action B</b-dropdown-item>
          </b-dropdown>
        </template>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-input-group>
      <template #prepend>
        <b-input-group-text>Username</b-input-group-text>
      </template>
      <b-form-input></b-form-input>
      <template #append>
        <b-dropdown text="Dropdown" variant="success">
          <b-dropdown-item>Action A</b-dropdown-item>
          <b-dropdown-item>Action B</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-input-group>
  </div>
</b-card>
```

### Using sub-components

Use the `<b-input-group-prepend>` or `<b-input-group-append>` to add arbitrary addons wherever you
like, and use these components to group buttons in your input group. Single buttons must always be
wrapped in these components for proper styling.

<ClientOnly>
  <b-card>
    <div>
      <b-input-group>
        <b-input-group-prepend>
          <b-button variant="outline-info">Button</b-button>
        </b-input-group-prepend>
        <b-form-input type="number" min="0.00"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-secondary">Button</b-button>
          <b-button variant="outline-primary">Button</b-button>
          <b-input-group-text>
            <b-icon icon="x" />
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group>
    <b-input-group-prepend>
      <b-button variant="outline-info">Button</b-button>
    </b-input-group-prepend>
    <b-form-input type="number" min="0.00"></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-secondary">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
      <b-input-group-text>
        <b-icon icon="x" />
      </b-input-group-text>
    </b-input-group-append>
  </b-input-group>
</div>
```

Set the `is-text` prop on `<b-input-group-prepend>` or `<b-input-group-append>` if the content is
textual in nature to apply proper styling. Alternatively, place the `<b-input-group-text>`
subcomponent inside the `<b-input-group-prepend>` or `<b-input-group-append>`. This also applies
when you want to use on of [BootstrapVue's icons](/docs/icons).

## Supported form-controls

The following are the form controls supported as the input-group's _main_ input element:

- [`<b-form-input>`](/docs/components/form-input)
- [`<b-form-textarea>`](/docs/components/form-textarea)
- [`<b-form-select>`](/docs/components/form-select)
- [`<b-form-file>`](/docs/components/form-file)
- [`<b-form-rating>`](/docs/components/form-rating)
- [`<b-form-tags>`](/docs/components/form-tags)
- [`<b-form-spinbutton>`](/docs/components/form-spinbutton)
- [`<b-form-datepicker>`](/docs/components/form-datepicker)
- [`<b-form-timepicker>`](/docs/components/form-timepicker)

**Notes:**

- ~~BootstrapVue uses custom SCSS/CSS to handling sizing the `<b-form-file>` input when it is placed
  in a `<b-input-group>` which has a [`size`](#control-sizing) specified.~~
- ~~BootstrapVue uses custom SCSS/CSS when `<b-form-input type="range">` is placed in a `<b-input-group>`.~~
- ~~BootstrapVue's custom components (i.e. `<b-form-spinbutton>`, `<b-form-rating>`, `<b-form-tags>`,
  etc.) require BootstrapVue's custom SCSS/CSS.~~

## Checkbox and radio addons

Place any checkbox or radio within an input group's addon instead of text.

**Note:** Bootstrap v5 recommends adding `.mt-0` to the `.form-check-input` when there’s no visible text next to the input.
It is also possible to use as `<b-form-radio>` and `<b-form-checkbox>` with a few utility
classes applied.

### Native checkbox and radio addons

<ClientOnly>
  <b-card>
    <div>
      <b-input-group class="mb-2">
        <b-input-group-prepend is-text>
          <input type="checkbox" aria-label="Checkbox for following text input">
        </b-input-group-prepend>
        <b-form-input aria-label="Text input with checkbox"></b-form-input>
      </b-input-group>
      <b-input-group>
        <b-input-group-prepend is-text>
          <input type="radio" aria-label="Radio for following text input">
        </b-input-group-prepend>
        <b-form-input aria-label="Text input with radio input"></b-form-input>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <input type="checkbox" aria-label="Checkbox for following text input" />
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with checkbox"></b-form-input>
  </b-input-group>
  <b-input-group>
    <b-input-group-prepend is-text>
      <input type="radio" aria-label="Radio for following text input" />
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with radio input"></b-form-input>
  </b-input-group>
</div>
```

### Custom radio, checkbox, and switch addons

Using `<b-form-checkbox>` and `<b-form-radio>` components as addons, using Bootstrap
[utility classes](/docs/reference/utility-classes) for additional styling to get them to "fit" in
the addon:

<ClientOnly>
  <b-card>
    <div>
      <b-input-group class="mb-2">
        <b-input-group-prepend is-text>
          <b-form-checkbox class="mr-n2">
            <span class="visually-hidden">Checkbox for following text input</span>
          </b-form-checkbox>
        </b-input-group-prepend>
        <b-form-input aria-label="Text input with checkbox"></b-form-input>
      </b-input-group>
      <b-input-group class="mb-2">
        <b-input-group-prepend is-text>
          <b-form-radio class="mr-n2">
            <span class="visually-hidden">Radio for following text input</span>
          </b-form-radio>
        </b-input-group-prepend>
        <b-form-input aria-label="Text input with radio input"></b-form-input>
      </b-input-group>
      <b-input-group>
        <b-input-group-prepend is-text>
          <b-form-checkbox switch class="mr-n2">
            <span class="visually-hidden">Switch for following text input</span>
          </b-form-checkbox>
        </b-input-group-prepend>
        <b-form-input aria-label="Text input with switch"></b-form-input>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-checkbox class="mr-n2">
        <span class="visually-hidden">Checkbox for following text input</span>
      </b-form-checkbox>
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with checkbox"></b-form-input>
  </b-input-group>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-radio class="mr-n2">
        <span class="visually-hidden">Radio for following text input</span>
      </b-form-radio>
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with radio input"></b-form-input>
  </b-input-group>
  <b-input-group>
    <b-input-group-prepend is-text>
      <b-form-checkbox switch class="mr-n2">
        <span class="visually-hidden">Switch for following text input</span>
      </b-form-checkbox>
    </b-input-group-prepend>
    <b-form-input aria-label="Text input with switch"></b-form-input>
  </b-input-group>
</div>
```

In the above example, we have used the `.visually-hidden` class on a `<span>` to visually hide the custom
control's label content (while making them still accessible to screen reader users), and used the
utility class `.mr-n2` to add a negative right margin to compensate for the "gutter" space between
the control and the hidden label.

## Multiple inputs

<ClientOnly>
  <b-card>
    <div>
      <b-input-group prepend="First and last name" class="mb-2">
        <b-form-input aria-label="First name"></b-form-input>
        <b-form-input aria-label="Last name"></b-form-input>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group prepend="First and last name" class="mb-2">
    <b-form-input aria-label="First name"></b-form-input>
    <b-form-input aria-label="Last name"></b-form-input>
  </b-input-group>
</div>
```

## Multiple addons

Multiple add-ons are supported and can be mixed with checkbox and radio input versions.

<ClientOnly>
  <b-card>
    <div>
      <b-input-group prepend="Item">
        <b-input-group-prepend is-text>
          <input type="checkbox" aria-label="Checkbox for following text input">
        </b-input-group-prepend>
        <b-input-group-prepend is-text><b>$</b></b-input-group-prepend>
        <b-form-input type="number" aria-label="Text input with checkbox"></b-form-input>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group prepend="Item">
    <b-input-group-prepend is-text>
      <input type="checkbox" aria-label="Checkbox for following text input" />
    </b-input-group-prepend>
    <b-input-group-prepend is-text><b>$</b></b-input-group-prepend>
    <b-form-input type="number" aria-label="Text input with checkbox"></b-form-input>
  </b-input-group>
</div>
```

## Dropdown addons

<ClientOnly>
  <b-card>
    <div>
      <b-input-group>
        <template #prepend>
          <b-dropdown text="Dropdown" variant="info">
            <b-dropdown-item>Action A</b-dropdown-item>
            <b-dropdown-item>Action B</b-dropdown-item>
          </b-dropdown>
        </template>
        <b-form-input></b-form-input>
        <template #append>
          <b-dropdown text="Dropdown" variant="outline-secondary" v-for="i in 2" :key="i">
            <b-dropdown-item>Action C</b-dropdown-item>
            <b-dropdown-item>Action D</b-dropdown-item>
          </b-dropdown>
        </template>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group>
    <template #prepend>
      <b-dropdown text="Dropdown" variant="info">
        <b-dropdown-item>Action A</b-dropdown-item>
        <b-dropdown-item>Action B</b-dropdown-item>
      </b-dropdown>
    </template>
    <b-form-input></b-form-input>
    <template #append>
      <b-dropdown text="Dropdown" variant="outline-secondary" v-for="i in 2" :key="i">
        <b-dropdown-item>Action C</b-dropdown-item>
        <b-dropdown-item>Action D</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-input-group>
</div>
```

## Control sizing

Set height using the `size` prop to `sm` or `lg` for small or large respectively. There is no need
to set size on the individual inputs or buttons. Note however, you _will be required_ to also set
the size on dropdowns.

<ClientOnly>
  <b-card>
    <div>
      <b-input-group
        v-for="size in ['sm','','lg']"
        :key="size"
        :size="size"
        class="mb-3"
        prepend="Label"
      >
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button size="sm" text="Button" variant="success">Button</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group
    v-for="size in ['sm','','lg']"
    :key="size"
    :size="size"
    class="mb-3"
    prepend="Label"
  >
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button size="sm" text="Button" variant="success">Button</b-button>
    </b-input-group-append>
  </b-input-group>
</div>
```

To control width, place the input inside standard Bootstrap grid column.

### Sizing custom radio, checkbox and switch addons

If using `<b-form-radio>` or `<b-form-checkbox>` as addons, additional utility classes may be
required to make everything fit correctly, depending on the size chosen:

<ClientOnly>
  <b-card>
    <div>
      <b-input-group size="sm" prepend="Small" class="mb-2">
        <b-form-input aria-label="Small text input with custom switch"></b-form-input>
        <b-input-group-append is-text>
        <b-form-checkbox switch class="mr-n2 mb-n1">
            <span class="visually-hidden">Checkbox for previous text input</span>
        </b-form-checkbox>
        </b-input-group-append>
      </b-input-group>
      <b-input-group size="lg" prepend="Large" class="mb-2">
        <b-form-input aria-label="Large text input with switch"></b-form-input>
        <b-input-group-append is-text>
          <b-form-checkbox switch class="mr-n2">
            <span class="visually-hidden">Switch for previous text input</span>
          </b-form-checkbox>
        </b-input-group-append>
      </b-input-group>
    </div>
  </b-card>
</ClientOnly>

```html
<div>
  <b-input-group size="sm" prepend="Small" class="mb-2">
    <b-form-input aria-label="Small text input with custom switch"></b-form-input>
    <b-input-group-append is-text>
      <b-form-checkbox switch class="mr-n2 mb-n1">
        <span class="visually-hidden">Checkbox for previous text input</span>
      </b-form-checkbox>
    </b-input-group-append>
  </b-input-group>
  <b-input-group size="lg" prepend="Large" class="mb-2">
    <b-form-input aria-label="Large text input with switch"></b-form-input>
    <b-input-group-append is-text>
      <b-form-checkbox switch class="mr-n2">
        <span class="visually-hidden">Switch for previous text input</span>
      </b-form-checkbox>
    </b-input-group-append>
  </b-input-group>
</div>
```

Specifically, when using the `sm` size on `<b-input-group>` you will need to add a negative bottom
margin, via the use of the `.mb-n1` [utility class](/docs/reference/utility-classes).

## Contextual states

Bootstrap v5 currently **does not** support contextual state styling (i.e. valid or invalid) of
input groups. However, the inputs inside the input group do support contextual state.

## Component reference

### `<b-input-group>`

#### Properties

| Property       | Type     | Default | Description                                                                                                                   |
| -------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `append`       | `String` |         | Text to append to the input group                                                                                             |
| `append-html`  | `String` |         | HTML string to append to the input group. Has precedence over 'append' prop                                                   |
| `id`           | `String` |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed |
| `prepend`      | `String` |         | Text to prepend to the input group                                                                                            |
| `prepend-html` | `String` |         | HTML string to prepend to the input group. Has precedence over 'append' prop                                                  |
| `size`         | `String` |         | Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'                                                     |
| `tag`          | `String` | `div`   | Specify the HTML tag to render instead of the default tag                                                                     |

#### Slots

| Name      | Scoped | Description                         |
| --------- | ------ | ----------------------------------- |
| `append`  | No     | Append attachment                   |
| `default` | No     | Content to place in the input group |
| `prepend` | No     | Prepend attachment                  |

### `<b-input-group-prepend>`

**Note** Bootstrap 5 dropped `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups. `<b-input-group-prepend>` is added for compatibility reasons.

| Property  | Type      | Default | Description                                                                                                                   |
| --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`      | `String`  |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed |
| `is-text` | `Boolean` | `false` | When 'true', wraps the content in a b-input-group-text component                                                              |
| `tag`     | `String`  | `div`   | Specify the HTML tag to render instead of the default tag                                                                     |

#### Slots

| Name      | Scoped | Description                                 |
| --------- | ------ | ------------------------------------------- |
| `default` | No     | Content to place in the input group prepend |

### `<b-input-group-append>`

**Note** Bootstrap 5 dropped `.input-group-append`. You can now just add buttons and `.input-group-text` as direct children of the input groups. `<b-input-group-append>` is added for compatibility reasons.

| Property  | Type      | Default | Description                                                                                                                   |
| --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`      | `String`  |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed |
| `is-text` | `Boolean` | `false` | When 'true', wraps the content in a b-input-group-text component                                                              |
| `tag`     | `String`  | `div`   | Specify the HTML tag to render instead of the default tag                                                                     |

#### Slots

| Name      | Scoped | Description                                |
| --------- | ------ | ------------------------------------------ |
| `default` | No     | Content to place in the input group append |

### `<b-input-group-text>`

**Note** `<b-input-group-text>` is added for compatibility reasons.

| Property | Type     | Default | Description                                               |
| -------- | -------- | ------- | --------------------------------------------------------- |
| `tag`    | `String` | `div`   | Specify the HTML tag to render instead of the default tag |

#### Slots

| Name      | Scoped | Description                              |
| --------- | ------ | ---------------------------------------- |
| `default` | No     | Content to place in the input group text |

### `<b-input-group-addon>`

**Note** `<b-input-group-addon>` is added for compatibility reasons.

#### Properties

| Property  | Type      | Default | Description                                                                                                                   |
| --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `append`  | `Boolean` | `false` | When set to 'true' sets the addon as being appended. defaults to 'false' which is prepended                                   |
| `id`      | `String`  |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed |
| `is-text` | `Boolean` | `false` | When 'true', wraps the content in a b-input-group-text component                                                              |
| `tag`     | `String`  | `div`   | Specify the HTML tag to render instead of the default tag                                                                     |

#### Slots

| Name      | Scoped | Description                               |
| --------- | ------ | ----------------------------------------- |
| `default` | No     | Content to place in the input group addon |

# Button Toolbar

<div class="lead mb-5">

Group a series of button-groups and/or input-groups together on a single line.

</div>

**Example 1:** with button groups

<b-card no-body class="mb-5">
  <b-card-body>
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1">
        <b-button>&laquo;</b-button>
        <b-button>&lsaquo;</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>
        <b-button>Redo</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button>&rsaquo;</b-button>
        <b-button>&raquo;</b-button>
      </b-button-group>
    </b-button-toolbar>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-button-toolbar key-nav aria-label="Toolbar with button groups">
  <b-button-group class="mx-1">
    <b-button>&laquo;</b-button>
    <b-button>&lsaquo;</b-button>
  </b-button-group>
  <b-button-group class="mx-1">
    <b-button>Edit</b-button>
    <b-button>Undo</b-button>
    <b-button>Redo</b-button>
  </b-button-group>
  <b-button-group class="mx-1">
    <b-button>&rsaquo;</b-button>
    <b-button>&raquo;</b-button>
  </b-button-group>
</b-button-toolbar>
```

  </b-card-body>

</b-card>

**Example 2:** with mixture of small button group and small input group

<b-card no-body class="mb-5">
  <b-card-body>
    <b-button-toolbar aria-label="Toolbar with button groups and input groups">
      <b-button-group size="sm" class="me-1">
        <b-button>Save</b-button>
        <b-button>Cancel</b-button>
      </b-button-group>
      <b-input-group size="sm" prepend="$" append=".00">
        <b-form-input value="100" class="text-end"></b-form-input>
      </b-input-group>
    </b-button-toolbar>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-button-toolbar aria-label="Toolbar with button groups and input groups">
  <b-button-group size="sm" class="me-1">
    <b-button>Save</b-button>
    <b-button>Cancel</b-button>
  </b-button-group>
  <b-input-group size="sm" prepend="$" append=".00">
    <b-form-input value="100" class="text-end"></b-form-input>
  </b-input-group>
</b-button-toolbar>
```

  </b-card-body>

</b-card>

**Example 3:** with button groups and dropdown menu

<b-card no-body class="mb-5">
  <b-card-body>
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
      <b-button-group class="mx-1">
        <b-button>New</b-button>
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>
      </b-button-group>
      <b-dropdown class="mx-1" right text="menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-button-group class="mx-1">
        <b-button>Save</b-button>
        <b-button>Cancel</b-button>
      </b-button-group>
    </b-button-toolbar>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
  <b-button-group class="mx-1">
    <b-button>New</b-button>
    <b-button>Edit</b-button>
    <b-button>Undo</b-button>
  </b-button-group>
  <b-dropdown class="mx-1" right text="menu">
    <b-dropdown-item>Item 1</b-dropdown-item>
    <b-dropdown-item>Item 2</b-dropdown-item>
    <b-dropdown-item>Item 3</b-dropdown-item>
  </b-dropdown>
  <b-button-group class="mx-1">
    <b-button>Save</b-button>
    <b-button>Cancel</b-button>
  </b-button-group>
</b-button-toolbar>
```

  </b-card-body>

</b-card>

## Usage

Feel free to mix input groups and dropdowns with button groups in your toolbars. Similar to the
example above, you'll likely need some utility classes though to space things properly.

## Sizing

Note, if you want smaller or larger buttons or controls, set the `size` prop directly on the
`<b-button-group>`, `<b-input-group>`, and `<b-dropdown>` components.

<b-card no-body class="mb-5">
  <b-card-body>
    <div>
      <b-button-toolbar aria-label="Toolbar with size sm">
        <b-button-group size="sm" class="mx-1">
          <b-button>New</b-button>
          <b-button>Edit</b-button>
          <b-button>Undo</b-button>
        </b-button-group>
      </b-button-toolbar>
    </div>
    <div class="mt-2">
      <b-button-toolbar aria-label="Toolbar with dropdown size sm">
          <b-dropdown size="sm" class="mx-1" right text="menu">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
      </b-button-toolbar>
    </div>
    <div class="mt-2">
      <b-button-toolbar aria-label="Toolbar with size lg">
        <b-button-group size="lg" class="mx-1">
          <b-button>New</b-button>
          <b-button>Edit</b-button>
          <b-button>Undo</b-button>
        </b-button-group>
      </b-button-toolbar>
    </div>
    <div class="mt-2">
      <b-button-toolbar aria-label="Toolbar with dropdown size lg">
        <b-dropdown size="lg" class="mx-1" right text="menu">
          <b-dropdown-item>Item 1</b-dropdown-item>
          <b-dropdown-item>Item 2</b-dropdown-item>
          <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
      </b-button-toolbar>
    </div>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-button-toolbar aria-label="Toolbar with size sm">
  <b-button-group size="sm" class="mx-1">
    <b-button>New</b-button>
    <b-button>Edit</b-button>
    <b-button>Undo</b-button>
  </b-button-group>
</b-button-toolbar>

<b-button-toolbar aria-label="Toolbar with dropdown size sm">
  <b-dropdown size="sm" class="mx-1" right text="menu">
    <b-dropdown-item>Item 1</b-dropdown-item>
    <b-dropdown-item>Item 2</b-dropdown-item>
    <b-dropdown-item>Item 3</b-dropdown-item>
  </b-dropdown>
</b-button-toolbar>

<b-button-toolbar aria-label="Toolbar with size lg">
  <b-button-group size="lg" class="mx-1">
    <b-button>New</b-button>
    <b-button>Edit</b-button>
    <b-button>Undo</b-button>
  </b-button-group>
</b-button-toolbar>

<b-button-toolbar aria-label="Toolbar with dropdown size lg">
  <b-dropdown size="lg" class="mx-1" right text="menu">
    <b-dropdown-item>Item 1</b-dropdown-item>
    <b-dropdown-item>Item 2</b-dropdown-item>
    <b-dropdown-item>Item 3</b-dropdown-item>
  </b-dropdown>
</b-button-toolbar>
```

  </b-card-body>

</b-card>

## Justify

Make the toolbar span the maximum available width, by increasing spacing between the button groups,
input groups and dropdowns, by setting the prop `justify`.

<b-card no-body class="mb-5">
  <b-card-body>
    <b-button-toolbar justify aria-label="Toolbar with justify">
      <b-button-group class="mx-1">
        <b-button>New</b-button>
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>
      </b-button-group>
      <b-dropdown class="mx-1" right text="menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-button-group class="mx-1">
        <b-button>Save</b-button>
        <b-button>Cancel</b-button>
      </b-button-group>
    </b-button-toolbar>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-button-toolbar justify aria-label="Toolbar with justify">
  <b-button-group class="mx-1">
    <b-button>New</b-button>
    <b-button>Edit</b-button>
    <b-button>Undo</b-button>
  </b-button-group>
  <b-dropdown class="mx-1" right text="menu">
    <b-dropdown-item>Item 1</b-dropdown-item>
    <b-dropdown-item>Item 2</b-dropdown-item>
    <b-dropdown-item>Item 3</b-dropdown-item>
  </b-dropdown>
  <b-button-group class="mx-1">
    <b-button>Save</b-button>
    <b-button>Cancel</b-button>
  </b-button-group>
</b-button-toolbar>
```

  </b-card-body>

</b-card>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/buttonToolbar.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BCard, BCardBody, BButtonGroup, BDropdown, BInputGroup, BDropdownItem, BButton, BButtonToolbar, BFormInput} from 'bootstrap-vue-next'
</script>

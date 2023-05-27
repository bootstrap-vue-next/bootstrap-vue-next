# Components - Table of Contents

<div class="lead mb-5">

BootstrapVueNext components list

</div>

<table-of-contents-card v-for="component in computedComponentsList" :key="component.name" class="my-3" :name="component.name" :description="component.description" :route="component.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/reference/components/${name.toLowerCase()}`).trim().replaceAll(/\s+/g, '-')

const componentList: {name: string; description: string}[] = [
  {
    name: 'Accordion',
    description:
      'Easily toggle content visibility on your pages. Includes support for making accordions',
  },
  {
    name: 'Alert',
    description:
      'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages',
  },
  {
    name: 'Avatar',
    description:
      'Custom component typically used to display a user profile as a picture, an icon, or short text',
  },
  {
    name: 'Badge',
    description: 'Small and adaptive tag for adding context to just about any content',
  },
  {
    name: 'Breadcrumb',
    description: `Indicate the current page's location within a navigational hierarchy.`,
  },
  {
    name: 'Button',
    description: 'Custom button component for actions in forms, dialogs, and more',
  },
  {
    name: 'Button Group',
    description: 'Group a series of buttons on a single line or stack them in a vertical column',
  },
  {
    name: 'Button Toolbar',
    description: 'Group a series of button-groups and/or input-groups together on a single line',
  },
  {
    name: 'Card',
    description:
      'A flexible and extensible content container. It includes options for headers and footers, a wide variety of content',
  },
  {
    name: 'Carousel',
    description:
      'A slideshow component for cycling through elements—images or slides of text—like a carousel',
  },
  {
    name: 'Collapse',
    description:
      'Easily toggle visibility of almost any content on your pages in a vertically collapsing container',
  },
  {
    name: 'Dropdown',
    description:
      'Toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format',
  },
  {
    name: 'Form',
    description:
      'Form component and helper components that optionally support inline form styles and validation states',
  },
  {
    name: 'Form Checkbox',
    description:
      'Custom checkbox input and checkbox group to replace the browser default checkbox input, built on top of semantic and accessible markup. Optionally supports switch styling',
  },
  {
    name: 'Form Group',
    description: 'The easiest way to add some structure to forms',
  },
  {
    name: 'Form Input',
    description:
      'Create various type inputs such as text, password, number, URL, email, search, range, date, and more',
  },
  {
    name: 'Form Radio',
    description: `Bootstrap's custom radio input to replace the browser default radio input.`,
  },
  {
    name: 'Form Select',
    description: 'Bootstrap custom select using custom styles',
  },
  {
    name: 'Form Tags',
    description:
      'Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection, and optional tag validation',
  },
  {
    name: 'Form Textarea',
    description:
      'Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states',
  },
  {
    name: 'Grid System',
    description: 'Lightweight utility components for making a flexible, responsive user interface',
  },
  {
    name: 'Image',
    description: 'Image component with responsive behavior',
  },
  {
    name: 'Input Group',
    description:
      'Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs. ',
  },
  {
    name: 'Link',
    description: 'A simple wrapper for standard navigation components',
  },
  {
    name: 'List Group',
    description:
      'A flexible and powerful component for displaying a series of content. List Group items can be modified to support just about any content within',
  },
  {
    name: 'Modal',
    description:
      'Modals are flexible dialog, interruptive, prompts that can support a variety of use cases',
  },
  {
    name: 'Nav',
    description: 'The Nav component is a simple wrapper for building navigation components',
  },
  {
    name: 'Navbar',
    description:
      'The Navbar is typically the central location for branding, navigation, and other elements on the header',
  },
  {
    name: 'Offcanvas',
    description:
      'Offcanvas components are hidden sidebars for your app, usually opened by some event',
  },
  {
    name: 'Overlay',
    description: 'Visually obscure a particular element or component and its content',
  },
  {
    name: 'Pagination',
    description:
      'Quick first, previous, next, last, and page buttons for pagination control of another component',
  },
  {
    name: 'Placeholder',
    description:
      'Placeholder components can create a unique appearance to indicate something may still be loading',
  },
  {
    name: 'Popover',
    description: 'Popover provides a tooltip behavior over another component',
  },
  {
    name: 'Progress',
    description:
      'A custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels',
  },
  {
    name: 'Spinner',
    description: `The spinner component can be used to show the loading state in your projects. They're rendered only with basic HTML and CSS as a lightweight Vue functional component.`,
  },
  {
    name: 'Table',
    description:
      'For displaying tabular data. Table supports pagination, filtering, sorting, custom rendering, events, and asynchronous data. For a simple display of tabular data without all the fancy features, use TableSimple',
  },
  {
    name: 'Tabs',
    description: 'Create a widget of tabbable panes of local content',
  },
  {
    name: 'Toast',
    description:
      'Push notifications to your visitors with a toast, a lightweight and easily customizable alert message',
  },
]

const computedComponentsList = computed(() =>
  [...componentList]
    .map((el) => ({
      name: el.name,
      description: el.description,
      route: routeLocation(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)
</script>

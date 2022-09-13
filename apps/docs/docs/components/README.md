# Table of contents

BootstrapVue 3 components

<ClientOnly>
    <b-list-group>
        <b-list-group-item v-for="(component, key)  in componentList">
            <RouterLink :to="`./${key}.html`">{{component.name}}</RouterLink>
            <b-badge v-if="component.status=='todo'" variant="warning" pill>TODO</b-badge>
            <b-badge v-else-if="component.status=='wip'" variant="warning" pill>WIP</b-badge>
            — <span class="text-muted">{{component.description}}</span>
        </b-list-group-item>
    </b-list-group>
</ClientOnly>

<script setup>
import { ref } from "vue"

const componentList = {
    Accordion : {
        name: 'Accordion',
        description: 'Easily toggle content visibility on your pages. Includes support for making accordions.'
    },
    Alert: {
        name: 'Alert',
        description: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'
    },
    Avatar: {
        name: 'Avatar',
        description: 'Custom component typically used to display a user profile as a picture, an icon, or short text.'
    },
    Badge: {
        name: 'Badge',
        description: 'Small and adaptive tag for adding context to just about any content.'
    },
    Breadcrumb: {
        name: 'Breadcrumb',
        description: `Indicate the current page's location within a navigational hierarchy.`
    },
    Button: {
        name: 'Button',
        description: 'Custom button component for actions in forms, dialogs, and more.'
    },
    ButtonGroup: {
        name: 'Button Group',
        description: 'Group a series of buttons together on a single line or stack them in a vertical column.'
    },
    ButtonToolbar: {
        name: 'Button Toolbar',
        description: 'Group a series of button-groups and/or input-groups together on a single line.'
    },
    Card: {
        name: 'Card',
        description: 'A flexible and extensible content container. It includes options for headers and footers, a wide variety of content.'
    },
    Carousel: {
        name: 'Carousel',
        description: 'A slideshow component for cycling through elements—images or slides of text—like a carousel.'
    },
    Collapse: {
        name: 'Collapse',
        description: 'Easily toggle visibility of almost any content on your pages in a vertically collapsing container.'
    },
    Dropdown: {
        name: 'Dropdown',
        description: 'Toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.'
    },
    Form: {
        name: 'Form',
        description: 'Form component and helper components that optionally support inline form styles and validation states.'
    },
    FormCheckbox: {
        name: 'Form Checkbox',
        description: 'Custom checkbox input and checkbox group to replace the browser default checkbox input, built on top of semantic and accessible markup. Optionally supports switch styling.'
    },
    FormGroup: {
        name: 'Form Group',
        description: 'The easiest way to add some structure to forms.'
    },
    FormInput: {
        name: 'Form Input',
        description: 'Create various type inputs such as: text, password, number, url, email, search, range, date and more.'
    },
    FormRadio: {
        name: 'Form Radio',
        description: `Bootstrap's custom radio input to replace the browser default radio input.`
    },
    FormSelect: {
        name: 'Form Select',
        description: 'Bootstrap custom select using custom styles.'
    },
    FormTags: {
        name: 'Form Tags',
        description: 'Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection and optional tag validation.'
    },
    FormTextarea: {
        name: 'Form Textarea',
        description: 'Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states.'
    },
    Image: {
        name: 'Image',
        description: 'Image component with responsive behavior.'
    },
    InputGroup: {
        name: 'InputGroup',
        description: 'Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs. '
    },
    ListGroup: {
        name: 'ListGroup',
        description: 'A flexible and powerful component for displaying a series of content. List Group items can be modified to support just about any content within.'
    },
    Overlay: {
        name: 'Overlay',
        description: 'Visually obscure a particular element or component and its content.'
    },
    Pagination: {
        name: 'Pagination',
        description: 'Quick first, previous, next, last, and page buttons for pagination control of another component.'
    },
    Progress: {
        name: 'Progress',
        description: 'A custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels.'
    },
    Spinners: {
        name: 'Spinners',
        description: `The <spinner> component can be used to show the loading state in your projects. They're rendered only with basic HTML and CSS as a lightweight Vue functional component.`
    },
    Skeleton: {
        name: 'Skeleton',
        description: 'The <skeleton> component can be used to scaffold a loading state, while your data is loading.'
    },
    Table: {
        name: 'Table',
        description: 'For displaying tabular data. <b-table> supports pagination, filtering, sorting, custom rendering, events, and asynchronous data. For simple display of tabular data without all the fancy features, BootstrapVue also provides lightweight alternative components <b-table-lite> and <b-table-simple>.'
    },
    Tabs: {
        name: 'Tabs',
        description: 'Create a widget of tabbable panes of local content.'
    },
    Toast: {
        name: 'Toast',
        description: 'Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.',
    }
}
</script>

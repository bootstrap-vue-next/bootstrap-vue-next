<p align="center">
  <a href="https://cdmoro.github.io/bootstrap-vue-3/">
    <img src="https://raw.githubusercontent.com/cdmoro/bootstrap-vue-3/main/static/logo.png" width="300">
  </a>
</p>

<h1 align="center">BootstrapVue 3</h1>
<p align="center">Early (but lovely) implementation of Vue 3, Bootstrap 5 and Typescript</p>

<br>

<p align="center">
  <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
    <img src="https://flat.badgen.net/badge/bootstrap/5.0.x/563d7c" alt="Bootstrap version">
  </a>
  <a href="https://v3.vuejs.org/">
    <img src="https://flat.badgen.net/badge/vue.js/3.0.x/4fc08d" alt="Vue.js version">
  </a>
</p>

# Components

Early versions of:

- [x] Accordion
- Props: flush
- Slots: default
- [x] Accordion item
- Props: title, visible
- Events: `b-collapse` events
- Slots: default, title
 
- [x] Alert
- Props: dismissible, fade, show, variant
- Slots: default

- [x] Badge
- Props: dot-indicator, text-indicator, pill, variant

- [x] Breadcrumb
- Props: items
- Slots: prepend, append

- [x] Button
- [x] Button group
- [x] Button toolbar
- [x] Card
- [x] Card body
- [x] Card footer
- [x] Card header
- [x] Card sub title
- [x] Card Text
- [x] Card Title
- [x] Carousel
- [x] Close button
- [x] Collapse
- Props: modelValue (`v-model`), parent, toggle, visible
- Events: show, shown, hide, hidden
- Slots: default

- [x] Container
- Props: fluid (boolean / string)
- Slots: default

- [x] Dropdowns
- [x] ListGroup
- [x] ListGroup item
- [x] Modal
- Props: modelValue, no-backdrop, centered, fade, fullscreen, title, scrollable, show, size, static-backdrop
- Events: show, shown, hide, hidden, hide-prevented
- Slots: default, title
- [ ] Navs
- [ ] Navbar
- [x] Offcanvas
- Props: modelValue (`v-model`), body-scrolling, backdrop, placement, title
- Events: show, shown, hide, hidden
- Slots: default, title
- [ ] Pagination
- [ ] Popover
- - [x] Directive
- [x] Progress
- [ ] Scrollspy
- [x] Spinners
- [ ] Tabs
- [ ] Toasts
- [ ] Tooltip
- - [x] Directive

# Directives

- [x] v-b-toggle
- [x] v-b-modal
- [x] v-b-tooltip
- [x] v-b-popover

# Composables

- [x] useBreadcrumb: A first attempt to have the breadcrumb's items in one place across the aplication.
- [ ] useModal: The goal is to emulate the same behaviour as boostrap-vue progamatic modals.

# License

MIT

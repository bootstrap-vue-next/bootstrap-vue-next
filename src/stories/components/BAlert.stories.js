import BAlert from '../../components/BAlert.vue';

export default {
  title: 'Components/Alert',
  component: BAlert,
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'warning', 'danger', 'success', 'info'] } },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BAlert },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<b-alert v-bind="args" v-html="args.label"></b-alert>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'A simple default alert—check it out! ',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'A simple primary alert—check it out! ',
  variant: 'primary'
};

// export const Link = Template.bind({});
// Link.args = {
//   variant: 'primary',
//   label: 'A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.',
// };

export const Link = (args) => ({
  components: {
    BAlert
  },
  setup() {
    return {
      args
    }
  },
  template: `
    <b-alert v-bind="args">A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</b-alert>
  `
})

// export const Dismissible = (args) => ({
//   components: {
//     BAlert
//   },
//   setup() {
//     return {
//       args
//     }
//   },
//   template: `
//     <b-alert v-bind="args">
//       <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//     </b-alert>`,
// });
// Dismissible.args = {
//   dismissible: true
// }
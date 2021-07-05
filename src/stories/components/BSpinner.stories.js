import BSpinner from '../../components/BSpinner.vue';
import BButton from '../../components/BButton.vue';

export default {
  title: 'Components/Spinner',
  component: BSpinner,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "none",
          "primary",
          "secondary",
          "warning",
          "danger",
          "success",
          "info",
        ],
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BSpinner },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<b-spinner v-bind="args">{{ args.label }}</b-spinner>',
});

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  variant: 'primary',
}

export const Grow = Template.bind({});
Grow.args = {
  grow: true,
}

export const Size = Template.bind({});
Size.args = {
  small: true,
}

export const Button = (args) => ({
  components: {
    BSpinner,
    BButton,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <b-button variant="primary" disabled><b-spinner v-bind="args" /></b-button>
    <b-button class="ms-2" variant="primary" disabled><b-spinner v-bind="args" /> Loading...</b-button>
  `,
});
Button.args = {
  small: true
}
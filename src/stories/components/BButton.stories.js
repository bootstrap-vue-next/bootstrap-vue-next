import BButton from '../../components/BButton.vue';

export default {
  title: 'Components/Button',
  component: BButton,
  argTypes: {
    size: { control: { type: 'select', options: ['sm', 'default', 'lg'] } },
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "warning",
          "danger",
          "success",
          "info",
          "link",
          "outline-primary",
          "outline-secondary",
          "outline-warning",
          "outline-danger",
          "outline-success",
          "outline-info",
        ],
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<b-button v-bind="args">{{ args.label }}</b-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};
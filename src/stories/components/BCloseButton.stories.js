import BCloseButton from '../../components/BCloseButton.vue';

export default {
  title: 'Components/CloseButton',
  component: BCloseButton,
};

const Template = (args) => ({
  components: { BCloseButton },
  setup() {
    return { args };
  },
  template: '<b-close-button v-bind="args" />',
});

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
}

export const Button = (args) => ({
  components: {
    BCloseButton,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="bg-dark p-2">
      <b-close-button white />
      <b-close-button white disabled />
    </div>    
  `,
});
Button.args = {
  small: true
}
import BBadge from "../../components/BBadge.vue";
import BButton from "../../components/BButton.vue";

export default {
  title: "Components/Badge",
  component: BBadge,
  argTypes: {
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
        ],
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<b-badge v-bind="args">{{ args.label }}</b-badge>',
});

export const Default = (args) => ({
  components: {
    BBadge,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
  <h3>Headings</h3>
  <div class="card">
  <div class="card-body">
  <h1>Example heading <b-badge v-bind="args">New</b-badge></h1>
      <h2>Example heading <b-badge v-bind="args">New</b-badge></h2>
      <h3>Example heading <b-badge v-bind="args">New</b-badge></h3>
      <h4>Example heading <b-badge v-bind="args">New</b-badge></h4>
      <h5>Example heading <b-badge v-bind="args">New</b-badge></h5>
      <h6>Example heading <b-badge v-bind="args">New</b-badge></h6></div></div>`,
});

export const Button = (args) => ({
  components: {
    BBadge,
    BButton,
  },
  setup() {
    return {
      args,
    };
  },
  template: `<b-button variant="primary">Notifications <b-badge v-bind="args">4</b-badge></b-button>`,
});

export const TextIndicator = (args) => ({
  components: {
    BBadge,
    BButton,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
  <b-button variant="primary" class="position-relative">
    Notifications 
    <b-badge v-bind="args">
      +99
      <span class="visually-hidden">unread messages</span>
    </b-badge>
  </b-button>`,
});
TextIndicator.args = {
  variant: 'danger',
  textIndicator: true
}

export const DotIndicator = (args) => ({
  components: {
    BBadge,
    BButton,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
  <b-button variant="primary" class="position-relative">
    Profile 
    <b-badge v-bind="args">
      <span class="visually-hidden">unread messages</span>
    </b-badge>
  </b-button>`,
});
DotIndicator.args = {
  variant: 'danger',
  dotIndicator: true
}

export const Background = (args) => ({
  components: {
    BBadge
  },
  setup() {
    return {
      args
    }
  },
  template: `
    <b-badge v-bind="args">{{ args.variant[0].toUpperCase() + args.variant.slice(1) }}</b-badge>
  `
})
Background.args = {
  variant: 'primary',
}

export const Pill = (args) => ({
  components: {
    BBadge
  },
  setup() {
    return {
      args
    }
  },
  template: `
    <b-badge v-bind="args">{{ args.variant[0].toUpperCase() + args.variant.slice(1) }}</b-badge>
  `
})
Pill.args = {
  variant: 'primary',
  pill: true
}

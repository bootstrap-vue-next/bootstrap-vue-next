import BDropdown from "../../components/BDropdown.vue";
import BDropdownDivider from "../../components/BDropdownDivider.vue";
import BDropdownHeader from "../../components/BDropdownHeader.vue";
import BDropdownItem from "../../components/BDropdownItem.vue";
import BDropdownText from "../../components/BDropdownText.vue";

export default {
  title: "Components/Dropdown",
  component: BDropdown,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg"],
      },
    },
    autoClose: {
      control: {
        type: "select",
        options: ["true", "false", "inside", "outside"],
      },
    },
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
  components: { BDropdown, BDropdownItem },
  setup() {
    return { args };
  },
  template: `
    <b-dropdown v-bind="args">
        <b-dropdown-item href="#" @click.prevent>Action</b-dropdown-item>
        <b-dropdown-item href="#" active @click.prevent>Another action</b-dropdown-item>
        <b-dropdown-item href="#" @click.prevent>Something else here</b-dropdown-item>
    </b-dropdown>`,
});

export const Default = Template.bind({});
Default.args = {
  text: "Dropdown button",
};

export const Right = Template.bind({});
Right.args = {
  text: "Right-aligned menu example",
  right: true
};

export const Dropup = Template.bind({});
Dropup.args = {
  text: "Dropup",
  dropup: true
};

export const Dropleft = Template.bind({});
Dropleft.args = {
  text: "Dropleft",
  dropleft: true
};

export const Dropright = Template.bind({});
Dropright.args = {
  text: "Dropright",
  dropright: true
};

export const Header = (args) => ({
    components: {
      BDropdown,
      BDropdownItem,
      BDropdownHeader
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <b-dropdown v-bind="args">
        <b-dropdown-header>Dropdown header</b-dropdown-header>
      <b-dropdown-item href="#" @click.prevent>Action</b-dropdown-item>
      <b-dropdown-item href="#" @click.prevent>Another action</b-dropdown-item>
    </b-dropdown>`,
  });
  Header.args = {
    text: "Dropdown button",
  };

export const Divider = (args) => ({
    components: {
      BDropdown,
      BDropdownItem,
      BDropdownDivider
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <b-dropdown v-bind="args">
      <b-dropdown-item href="#" @click.prevent>Action</b-dropdown-item>
      <b-dropdown-item href="#" @click.prevent>Another action</b-dropdown-item>
      <b-dropdown-item href="#" @click.prevent>Something else here</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item href="#" @click.prevent>Separated link</b-dropdown-item>
    </b-dropdown>`,
  });
  Divider.args = {
    text: "Dropdown button",
  };

  export const Text = (args) => ({
    components: {
      BDropdown,
      BDropdownText
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <b-dropdown v-bind="args">
      <b-dropdown-text style="width: 240px;">Some example text that's free-flowing within the dropdown menu.</b-dropdown-text>
      <b-dropdown-text>And this is more example text.</b-dropdown-text>
    </b-dropdown>`,
  });
  Text.args = {
    text: "Dropdown button",
  };
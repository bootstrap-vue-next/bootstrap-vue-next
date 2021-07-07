<template>
  <div :class="classes">
    <button
      class="btn"
      :class="buttonClasses"
      type="button"
      :id="localID"
      :data-bs-toggle="split ? null : 'dropdown'"
      :data-bs-auto-close="split ? null : autoClose"
      :data-bs-offset="split || !offset ? null : offset"
      :aria-expanded="split ? null : false"
    >
      {{ text }}
    </button>
    <button
      v-if="split"
      type="button"
      class="btn dropdown-toggle-split dropdown-toggle"
      :class="splitClasses"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      :data-bs-auto-close="autoClose"
      :data-bs-offset="!offset ? null : offset"
      :data-bs-referent="offsetParent ? 'parent' : null"
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul
      class="dropdown-menu"
      :class="dropdownMenuClasses"
      :aria-labelledby="localID"
    >
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ButtonVariant, Size } from "@/types";
import getID from "../utils/getID";

export default defineComponent({
  props: {
    autoClose: { type: String, default: "true" },
    id: { type: String },
    dark: { type: Boolean, default: false },
    dropleft: { type: Boolean, default: false },
    dropright: { type: Boolean, default: false },
    dropup: { type: Boolean, default: false },
    right: { type: [Boolean, String], default: false },
    left: { type: [Boolean, String], default: false },
    text: { type: String },
    offset: { type: String },
    offsetParent: { type: Boolean, default: false },
    split: { type: Boolean, default: false },
    splitVariant: { type: String as PropType<ButtonVariant> },
    size: { type: String as PropType<Size> },
    variant: { type: String as PropType<ButtonVariant>, default: "secondary" },
  },
  setup(props) {
    const localID = computed(() => {
      return props.id || getID();
    });

    const classes = computed(() => ({
      "btn-group": props.split,
      dropdown: !props.split,
      dropup: props.dropup,
      dropend: props.dropright,
      dropstart: props.dropleft,
    }));

    const buttonClasses = computed(() => ({
      [`btn-${props.variant}`]: props.variant,
      [`btn-${props.size}`]: props.size,
      "dropdown-toggle": !props.split,
    }));

    const splitClasses = computed(() => ({
      [`btn-${props.splitVariant || props.variant}`]:
        props.splitVariant || props.variant,
      [`btn-${props.size}`]: props.size,
    }));

    const dropdownMenuClasses = computed(() => ({
      "dropdown-menu-dark": props.dark,
      "dropdown-menu-end":
        typeof props.right === "boolean" ? props.right : false,
      [`dropdown-menu-${props.left}-start`]: typeof props.left === "string",
      [`dropdown-menu-${props.right}-end`]: typeof props.right === "string",
    }));

    return {
      localID,
      classes,
      buttonClasses,
      splitClasses,
      dropdownMenuClasses,
    };
  },
});
</script>

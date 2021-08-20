<template>
  <component
    :is="tag"
    class="b-avatar"
    :class="classes"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="b-avatar-img"
    >
    <!-- TODO: Refactor BIcon component -->
    <!-- <b-icon
      v-else-if="icon"
      :icon="icon"
      aria-hidden="true"
      :alt="alt"
      :variant="iconVariant"
      :size="size"
    /> -->
    <span
      v-else-if="text"
      class="b-avatar-text"
      :class="textClasses"
    >{{ text }}</span>
    <span
      v-else
      class="b-avatar-custom"
    >
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColorVariant, InputSize } from '../types';

export default defineComponent({
    name: 'BAvatar',
    props: {
        src: {type: String},
        text: {type: String},
        icon: {type: String},
        alt: {type: String, default: 'avatar'},
        variant: {type: String as PropType<ColorVariant>, default: 'info'},
        iconVariant: {type: String as PropType<ColorVariant>, default: 'light'}, // not standard BootstrapVue props
        textVariant: {type: String as PropType<ColorVariant>, default: 'light'}, // not standard BootstrapVue props
        size: {type: String as PropType<InputSize>},
        square: {type: Boolean, default: false},
        rounded: {type: [Boolean, String], default: 'circle'},
        button: {type: Boolean, default: false},
        buttonType: {type: String, default: 'button'},
    },
    setup(props) {
        const classes = computed(() => ({
            [`b-avatar-${props.size}`]: props.size,
            [`bg-${props.variant}`]: props.variant,
            rounded: props.rounded === '' || props.rounded === true,
            [`rounded-${(props.square) ? '0' : props.rounded}`]: props.square || (typeof props.rounded === 'string' && props.rounded !== ''),
            'btn': props.button
        }));

        const textClasses = computed(() => ({
            [`text-${props.textVariant}`]: props.textVariant
        }));

        const tag = computed(() => props.button ? props.buttonType : 'span');

        return {
            classes,
            tag,
            textClasses
        }
    }
})
</script>

<style lang="scss">
  @import "../styles/_variables.scss";

  .b-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    flex-shrink: 0;
    width: $b-avatar-size;
    height: $b-avatar-size;

    &.btn {
      padding: 0;
      border: 0;
    }

    .b-avatar-custom,
    .b-avatar-text,
    .b-avatar-img {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .b-avatar-sm {
    width: $b-avatar-size-sm;
    height: $b-avatar-size-sm;

    .b-avatar-text {
      font-size: calc(#{$b-avatar-size-sm * $b-avatar-font-size-scale});
    }
  }

  .b-avatar-lg {
    width: $b-avatar-size-lg;
    height: $b-avatar-size-lg;

    .b-avatar-text {
      font-size: calc(#{$b-avatar-size-lg * $b-avatar-font-size-scale});
    }
  }
</style>

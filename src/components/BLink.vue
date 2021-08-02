<template>
  <component
    :is="tag"
    :href="href ? href : null"
    :rel="target === '_blank' && rel === null ? 'noopener' : rel || null"
    :target="target"
    :tabindex=" disabled ? '-1' : typeof $attrs.tabindex === 'undefined' ? null : $attrs.tabindex"
    :aria-disabled="disabled ? 'true' : null"
    :class="{ active, disabled }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import type { LinkTarget } from '../types';
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'BLink',
    props: {
        active: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        href: { type: String, default: null },
        rel: { type: String, default: null },
        target: { type: String as PropType<LinkTarget>, default: '_self' },
        // <router-link> specific props
        activeClass: { type: String },
        append: { type: Boolean, default: false },
        event: { type: [String, Array], default: 'click' },
        exact: { type: Boolean, default: false },
        exactActiveClass: { type: String },
        replace: { type: Boolean, default: false },
        routerTag: { type: String, default: 'a' },
        to: { type: [String, Object], default: null },
        routerComponentName: { type: String, default: 'router-link' }
        // <nuxt-link> specific props
    },
    setup(props) {
        const tag = computed(() => {
            const { to, disabled, routerComponentName } = props;
            const hasRouter = true; // todo check router is available
            if (!hasRouter || (hasRouter && (disabled || !to))) {
                return 'a';
            }
            return routerComponentName;
        });

        return {
            tag,
        };
    },
})
</script>

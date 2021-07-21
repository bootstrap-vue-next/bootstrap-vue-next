<script lang="ts">
import { Breakpoint } from '@/types'
import { computed, defineComponent, PropType, h } from 'vue'

export default defineComponent({
    props: {
        fluid: { type: [Boolean, String] as PropType<Boolean | Breakpoint>, default: false },

    },
    setup(props, { slots }) {
        const classes = computed(() => ({
            container: !props.fluid,
            [`container-fluid`]: typeof props.fluid === 'boolean' && props.fluid,
            [`container-${props.fluid}`]: typeof props.fluid === 'string',
        }))

        return () => h('div', {
            class: classes.value
        }, slots.default!())
    },
})
</script>
